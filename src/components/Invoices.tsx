import { useHistory } from 'react-router-dom';
import requests from '../data/requests';
import Card from './card/Card';
import Table from './table/Table';


const Invoices = () => {

	const history = useHistory();
	const handleClick = () => history.push('/all-invoices');

	const buttonProps = {
		title: "Zobrazit vše",
		variant: "text",
		size: "large",
		withIcon: true,
		customClass: "util-mg-l"
	}

	return (
		<Card title="Zálohy a faktury" buttonProps={buttonProps} handleClick={handleClick}>
			<Table rowNr={4} fetchUrl={requests.fetchInvoices} />
		</Card>
	);
}

export default Invoices;