import { useEffect, useState } from 'react';
import '../style/Table.scss';
import DataTypes from '../data/types';
import Loader from './Loader';
import TableRow from './TableRow';

//TODO: doresit sklonovani dnu pro payment, dostylovat pro bp <+-900 + dlazdicove zobrazeni na mobilu??, poresit placeholder pro table content?, mozna roztridit scss k jednotlivym komponentam, poresit handleclick jako jednu fci pro odkazovaci buttony

const Table = () => {
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

	console.log(apiData)
	const hasData = apiData && apiData.length > 0 ? true : false;

	return (
		<div className="table">
			<div className="table__header grid util-fw-700">
				<div className="table__header__item">Odběrné místo</div>
				<div className="table__header__item">Období</div>
				<div className="table__header__item">Typ</div>
				<div className="table__header__item">Částka</div>
				<div className="table__header__item">Stav</div>
			</div>
			<div className="table__body">
				{
					loaded ?
						hasData ?
							<TableRow data={apiData} />
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
