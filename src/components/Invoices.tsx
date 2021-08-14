import '../style/Invoices.scss';
import Button from './Button';
import { useHistory } from 'react-router-dom';
import Table from './Table';


function Invoices() {

	const history = useHistory();
	const handleClick = () => history.push('/all-invoices');

	return (
		<>
			<div className="card">
				<div className="card__header">
					<h1>
						Zálohy a faktury
					</h1>
					<Button
						title="Zobrazit vše"
						variant="text"
						size="large"
						withIcon
						onClick={handleClick}
					/>
				</div>
				<div className="card__content">
					<Table />
				</div>
			</div>
		</>
	);
}

export default Invoices;