import '../style/Invoices.scss';
import Button from './Button';
import { useHistory } from 'react-router';


function ContractDetail() {

	const history = useHistory();
	const handleClick = () => history.goBack();

	return (
		<>
			<div className="card">
				<div className="card__header">
					<h1>
						Detail kontraktu
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
					<p>
						Detail
					</p>
				</div>
			</div>
		</>
	);
}

export default ContractDetail;