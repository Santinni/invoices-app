import './invoices/style/Invoices.scss';
import Button from './button/Button';
import { useHistory } from 'react-router';
import Table from './table/Table';


function AllInvoices() {

	const history = useHistory();
	const handleClick = () => history.goBack();

	return (
		<>
			<div className="card">
				<div className="card__header">
					<h1>
						Všechny zálohy a faktury
					</h1>
					<Button
						title="Zpět"
						variant="outlined"
						size="medium"
						onClick={handleClick}
						color="secondary"
					/>
				</div>
				<div className="card__content">
					<Table />
				</div>
			</div>
		</>
	);
}

export default AllInvoices;