import { useHistory } from 'react-router';
import requests from '../data/requests';
import Card from './card/Card';
import Table from './table/Table';


const AllInvoices = () => {

	const history = useHistory();
	const handleClick = () => history.goBack();

	const buttonProps = {
		title: "Zpět",
		variant: "outlined",
		size: "medium",
		color: "secondary"
	}

	return (
		<Card title="Všechny zálohy a faktury" buttonProps={buttonProps} handleClick={handleClick}>
			<Table fetchUrl={requests.fetchInvoices} />
		</Card>
	);
}

export default AllInvoices;