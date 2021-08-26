import Card from './card/Card';


const Pay = () => {

	const buttonProps = {
		title: "Zpět",
		variant: "outlined",
		size: "medium",
		color: "secondary"
	}

	return (
		<Card title="Platební proces" buttonProps={buttonProps}>
			<p>
				Platba
			</p>
		</Card>
	);
}

export default Pay;