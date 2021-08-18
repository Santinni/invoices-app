import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import '../style/Table.scss';
import DataTypes from '../data/types';
import Loader from './Loader';
import Icon from '../icons';
import Button from './Button';
//import TableRow from './TableRow';

//TODO: doresit sklonovani dnu pro payment, do Table vytvorit komponentu TableRow, dostylovat pro bp <+-900 + dlazdicove zobrazeni na mobilu??, poresit placeholder pro table content?, mozna roztridit scss k jednotlivym komponentam, poresit handleclick jako jednu fci pro odkazovaci buttony

function Table() {
	const [apiData, setData] = useState<DataTypes.RootObject[]>([]);
	const [loaded, setLoaded] = useState<boolean>(false);

	const getData = () => {
		fetch('https://mocki.io/v1/d3f6aae8-b7aa-4f41-8cac-9b7c996b75bf'
			, {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}
		)
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setData(myJson);
				setLoaded(true);
			});
	}
	useEffect(() => {
		getData()
	}, [])

	const hasData = apiData && apiData.length > 0 ? true : false;
	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => { setCurrentDate(new Date()); }, 10000);
		return (() => {
			clearInterval(interval);
		});
	}, []);

	const toDate = (date: string) => {
		let splitedDate = date.split('-').map(item => parseInt(item));
		let mydate = new Date(splitedDate[0], splitedDate[1] - 1, splitedDate[2]);
		return (mydate.toDateString());
	}

	const dateDifference = (dueDate: string) => {

		let date1 = new Date(currentDate);
		let date2 = new Date(toDate(dueDate));

		let dif = date2.getTime() - date1.getTime();
		let difDays = Math.floor(dif / (1000 * 3600 * 24));

		return difDays;
	}

	const payment = (state: string, duedDate: string) => {
		let days = dateDifference(duedDate);

		if (state === "paid") {
			return "Uhrazeno"
		} else if (state === "processing") {
			return "Platba se zpracovává"
		} else if (state === "pending") {
			if (days > 0) {
				return `Splatnost za ${days} dní`
			} else if (days < 0) {
				return `Po splatnosti ${Math.abs(days)} dní`
			} else {
				return `Splatno dnes`
			}
		}
	}

	const history = useHistory();
	const handleClick = (route: string) => history.push(`/${route}`);
	const spaceSeparator = (value: number) => {
		if (value % 1 === 0) {
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		} else {
			let dividedValue = value.toString().split(".");
			dividedValue[0] = dividedValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
			return dividedValue.join(".");
		}
	}

	return (
		<div className="table">
			<div className="table__header grid util-fw-700">
				<div>Odběrné místo</div>
				<div>Období</div>
				<div>Typ</div>
				<div>Částka</div>
				<div>Stav</div>
			</div>
			<div className="table__body">
				{
					loaded ?
						hasData ?
							<>
								{apiData.map(
									item => (
										<div className={`table__row grid ${item.state === 'pending' ? 'util-fw-700' : ""}`}>
											<div className="table__data">
												<div className="table__ico">
													{<Icon name="fire" />}
												</div>
												<div>
													<div>
														{item.supplyPoint.name ? item.supplyPoint.name : "-"}
													</div>
													<div>
														{item.supplyPoint.address ? item.supplyPoint.address : "-"}
													</div>
												</div>
											</div>
											<div className="table__data">
												{item.period ? item.period : "-"}
											</div>
											<div className="table__data">
												{
													item.type ?
														item.type === "advance" ? "Záloha"
															: item.type === "invoice" && "Faktura"
														: "-"
												}
											</div>
											<div className="table__data">
												{item.amount ? spaceSeparator(item.amount) : "-"}
												&nbsp;
												{item.currency ? item.currency : "-"}
											</div>
											<div className="table__data">
												<div className="table__ico">
													{
														item.state ?
															item.state === "pending" ? <Icon name="pending" />
																: item.state === "processing" ? <Icon name="clock" />
																	: item.state === "paid" && <Icon name="check" />
															: "-"
													}
												</div>
												{item.state && item.payDueDate ? payment(item.state, item.payDueDate) : '-'}
											</div>
											<div className="table__data util-jc-flex-e">
												{
													item.state === 'pending' ?
														<Button
															title="Zaplatit"
															variant="contained"
															size="small"
															color="primary"
															onClick={() => { handleClick("payment-process"); }} />
														:
														<Button
															title="Více"
															variant="outlined"
															size="small"
															color="secondary"
															onClick={() => { handleClick("contract-detail"); }} />
												}
											</div>
										</div>
									))
								}
							</>
							:
							<p>
								"No data available"
							</p>
						: <Loader />
				}
			</div>
		</div>
	);
}

export default Table
