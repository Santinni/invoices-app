import '../style/Invoices.scss';
import Button from './Button';
import { useHistory } from 'react-router';


function Error() {

	const history = useHistory();
	const handleClick = () => history.push('/');

	return (
		<>
			<div className="card card--error">
				<div className="card__header">
					<h1>
						ERROR 404
					</h1>
				</div>
				<div className="card__content">
					<p>
						Je nám líto, ale požadovaná stránka nebyla nalezena.
					</p>
					<Button
						title="Přejděte na zálohy a faktury"
						variant="text"
						withIcon
						size="medium"
						onClick={handleClick}
						color="primary"
					/>
				</div>
			</div>
		</>
	);
}

export default Error;