import { useEffect, useState } from 'react';
import './style/Table.scss';
import DataTypes from '../../data/types';
import Loader from '../loader/Loader';
import TableRow from '../TableRow';

//TODO: dostylovat pro bp <+-900 + dlazdicove zobrazeni na mobilu??, poresit placeholder pro table content?, poresit handleclick jako jednu fci pro odkazovaci buttony, poresit filtrovani v tabulce, vyuzit axios

interface TableProps {
	rowNr?: number
};

const Table = ({ rowNr }: TableProps) => {
	const [apiData, setData] = useState<DataTypes.RootObject[]>([]);
	const [loaded, setLoaded] = useState<boolean>(false);

	const getData = () => {
		fetch('https://mocki.io/v1/f1627b88-04dc-4ef4-a5ce-66ed3f81e005'
			// fetch('https://mocki.io/v1/d3f6aae8-b7aa-4f41-8cac-9b7c996b75bf'
			, {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}
		)
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setData(myJson);
				setLoaded(true);
			});
	}
	useEffect(() => {
		getData()
	}, [])

	const hasData = apiData && apiData.length > 0 ? true : false;

	return (
		<div className="table">
			<div className="table__header grid util-fw-700">
				<div className="table__header__item">Odběrné místo</div>
				<div className="table__header__item">Období</div>
				<div className="table__header__item">Typ</div>
				<div className="table__header__item">Částka</div>
				<div className="table__header__item">Stav</div>
			</div>
			<div className="table__body">
				{
					loaded ?
						hasData ?
							<TableRow data={apiData} rows={rowNr} />
							:
							<p>
								"No data available"
							</p>
						: <Loader />
				}
			</div>
		</div>
	);
}

export default Table
