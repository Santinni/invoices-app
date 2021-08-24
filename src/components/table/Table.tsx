import { useEffect, useState } from 'react';
import axios from 'axios';
import './style/Table.scss';
import DataTypes from '../../data/types';
import Loader from '../loader/Loader';
import TableRow from '../TableRow';

//TODO: dostylovat pro bp <+-900 + dlazdicove zobrazeni na mobilu??, poresit placeholder pro table content?, poresit handleclick jako jednu fci pro odkazovaci buttony, poresit filtrovani v tabulce, poresit Axios async error + loader a message pro uzivatele

interface TableProps {
	rowNr?: number;
	fetchUrl: string
};

const Table = ({ rowNr, fetchUrl }: TableProps) => {
	const [apiData, setData] = useState<DataTypes.RootObject[]>([]);
	const [loaded, setLoaded] = useState<boolean>(false);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setData(request.data);
			setLoaded(true);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

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
