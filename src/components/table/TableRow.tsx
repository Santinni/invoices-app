import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import DataTypes from '../../data/types'
import Icon from '../icons';
import Button from '../button/Button';
import paymentDue from '../../helpers/paymentDue';
import { spaceSeparator } from '../../helpers/formaters';

interface TableRowProps {
    data: DataTypes.RootObject[];
    rows?: number
}

const TableRow = ({ data, rows }: TableRowProps) => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const apiData = data;

    useEffect(() => {
        const interval = setInterval(() => { setCurrentDate(new Date()); }, 10000);
        return (() => {
            clearInterval(interval);
        });
    }, []);

    const history = useHistory();
    const handleClick = (route: string, contractData?: any) => history.push({ pathname: `/${route}`, state: contractData });

    return (
        <>
            {apiData.slice(0, rows).map(
                (item, index) => (
                    <div key={index} className={`table__row grid ${item.state === 'pending' ? 'util-fw-700' : ""}`}>
                        <div className="table__data">
                            <div className="table__data__ico">
                                <Icon name="fire" />
                            </div>
                            <div className="table__data__item supplyPoint">
                                <div className="supplyPoint__name">
                                    {item.supplyPoint.name ? item.supplyPoint.name : "-"}
                                </div>
                                <div className="supplyPoint__address">
                                    {item.supplyPoint.address ? item.supplyPoint.address : "-"}
                                </div>
                            </div>
                        </div>
                        <div className="table__data">
                            {item.period ? item.period : "-"}
                        </div>
                        <div className="table__data">
                            {
                                item.type ?
                                    item.type === "advance" ? "Záloha"
                                        : item.type === "invoice" && "Faktura"
                                    : "-"
                            }
                        </div>
                        <div className="table__data">
                            {item.amount ? spaceSeparator(item.amount) : "-"}
                            &nbsp;
                            {item.currency ? item.currency : "-"}
                        </div>
                        <div className="table__data">
                            <div className="table__data__ico">
                                {
                                    item.state ?
                                        item.state === "pending" ? <Icon name="pending" />
                                            : item.state === "processing" ? <Icon name="clock" />
                                                : item.state === "paid" && <Icon name="check" />
                                        : "-"
                                }
                            </div>
                            <div className="table__data__item payDueDate">
                                {item.state && item.payDueDate ? paymentDue(item.state, currentDate, item.payDueDate) : '-'}
                            </div>
                        </div>
                        <div className="table__data util-jc-flex-e">
                            {
                                item.state === 'pending' ?
                                    <Button
                                        title="Zaplatit"
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        onClick={() => { handleClick("payment-process"); }} />
                                    :
                                    <Button
                                        title="Více"
                                        variant="outlined"
                                        size="small"
                                        color="secondary"
                                        onClick={() => { handleClick("contract-detail", item); }} />
                            }
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default TableRow
