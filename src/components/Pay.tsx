import '../style/Invoices.scss';
import Button from './Button';
import { useHistory } from 'react-router';


function Pay() {

	const history = useHistory();
	const handleClick = () => history.goBack();

	return (
		<>
			<div className="card">
				<div className="card__header">
					<h1>
						Platební proces
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
						Platba
					</p>
				</div>
			</div>
		</>
	);
}

export default Pay;