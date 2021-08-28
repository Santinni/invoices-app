import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Card from './card/Card';
import Button from './button/Button';
import Icon from './icons';
import { spaceSeparator } from '../helpers/formaters';
import paymentDue from '../helpers/paymentDue';
import '../style/ContractDetail.scss';

//TODO types
//import { RouteComponentProps } from 'react-router';
//import DataTypes from '../../data/types';

// interface ContractDetailProps {
// 	props: DataTypes.RootObject[]
// }

// type TParams = { id: number };



const ContractDetail = (props: any) => {

	const history = useHistory();
	const handleClick = () => { history.goBack() };
	const [contract, setContract] = useState<any>([]);

	useEffect(() => {
		setContract(props.location.state);
	}, [props.location.state])

	const supplyPoint = contract.supplyPoint;
	const buttonProps = {
		title: "Zpět",
		variant: "outlined",
		size: "medium",
		color: "secondary"
	}

	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => { setCurrentDate(new Date()); }, 10000);
		return (() => {
			clearInterval(interval);
		});
	}, []);

	const goPay = (route: string, contractData?: any) => history.push({ pathname: `/${route}`, state: contractData });

	console.log(contract);

	return (
		<Card title={supplyPoint && supplyPoint.name} buttonProps={buttonProps} handleClick={handleClick}>
			<div className="contractDetail">
				<div className="contractDetail__item">
					<span className="contractDetail__name">
						Adresa:
					</span>
					<span className="contractDetail__data">
						{supplyPoint && supplyPoint.address ? supplyPoint.address : "-"}
					</span>
				</div>
				<div className="contractDetail__item">
					<span className="contractDetail__name">
						Období:
					</span>
					<span className="contractDetail__data">
						{contract.period ? contract.period : "-"}
					</span>
				</div>
				<div className="contractDetail__item">
					<span className="contractDetail__name">
						Datum splatnosti:
					</span>
					<span className="contractDetail__data">
						{contract.payDueDate ? contract.payDueDate.replaceAll("-", "/") : "-"}
					</span>
				</div>
				<div className="contractDetail__item">
					<span className="contractDetail__name">
						Typ:
					</span>
					<span className="contractDetail__data">
						{
							contract.type ?
								contract.type === "advance" ? "Záloha"
									: contract.type === "invoice" && "Faktura"
								: "-"
						}
					</span>
				</div>
				<div className="contractDetail__item">
					<span className="contractDetail__name">
						Částka:
					</span>
					<span className="contractDetail__data">
						{contract.amount ? spaceSeparator(contract.amount) : "-"}
						&nbsp;
						{contract.currency ? contract.currency : "-"}
					</span>
				</div>
				<div className="contractDetail__item">
					<span className="contractDetail__name">
						Stav:
					</span>
					<div className={`contractDetail__data ${contract.state === 'pending' ? 'util-fw-700' : ""}`}>
						{
							contract.state ?
								contract.state === "pending" ? <Icon name="pending" />
									: contract.state === "processing" ? <Icon name="clock" />
										: contract.state === "paid" && <Icon name="check" />
								: "-"
						}
						{contract.state && contract.payDueDate ? paymentDue(contract.state, currentDate, contract.payDueDate) : '-'}
					</div>
				</div>
				{
					contract && contract.state === 'pending' &&
					<div className="contractDetail__data util-jc-flex-e">
						<Button
							title="Zaplatit"
							variant="contained"
							size="small"
							color="primary"
							onClick={() => { goPay("payment-process"); }} />
					</div>
				}
			</div>
		</Card>
	);
}

export default ContractDetail;