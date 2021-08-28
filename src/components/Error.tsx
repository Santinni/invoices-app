import Button from './button/Button';
import { useHistory } from 'react-router';
import Card from './card/Card';


const Error = () => {

	const history = useHistory();
	const handleClick = () => history.push('/');

	return (
		<Card title="ERROR 404" class="card--error">
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
		</Card>
	);
}

export default Error;