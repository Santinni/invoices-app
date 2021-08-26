import { useState, useEffect } from 'react';
import { useHistory, RouteComponentProps } from 'react-router';
import Card from '../card/Card';

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

	return (
		<Card title={supplyPoint && supplyPoint.name} buttonProps={buttonProps} handleClick={handleClick}>
			<>
				<p>
					{contract && contract.period}
				</p>
				<p>
					{contract && contract.type}
				</p>
				<p>
					{contract && contract.amount}
				</p>
				<p>
					{contract && contract.currency}
				</p>
				<p>
					{contract && contract.state}
				</p>
				<p>
					{contract && contract.payDueDate}
				</p>
			</>
		</Card>
	);
}

export default ContractDetail;