import React from 'react';
import '../style/Invoices.scss';
import Button from './Button';


function Invoices() {
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
						size="small"
						withIcon
					/>
				</div>
				<div className="card__content">

				</div>
			</div>
		</>
	);
}

export default Invoices;