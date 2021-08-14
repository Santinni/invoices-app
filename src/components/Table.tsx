import { useEffect, useState } from 'react';
import '../style/Table.scss';

function Table() {
	const [data, setData] = useState<any[]>([]);
	const getData = () => {
		fetch('https://mocki.io/v1/d3f6aae8-b7aa-4f41-8cac-9b7c996b75bf'
			, {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}
		)
			.then(function (response) {
				console.log(response)
				return response.json();
			})
			.then(function (myJson) {
				console.log(myJson);
				setData(myJson)
			});
	}
	useEffect(() => {
		getData()
	}, [])

	const hasData = data && data.length > 0 ? true : false;

	return (
		<div className="table">
			<div className="tableHeader">
				Table header
			</div>
			<div className="tableBody">
				<p>
					{
						hasData ? "We have data"
							:
							"No data available"
					}
				</p>
			</div>
		</div>
	);
}

export default Table
