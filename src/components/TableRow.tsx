import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import DataTypes from '../data/types'
import Icon from './icons';
import Button from './button/Button';

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

    const toDate = (date: string) => {
        let splitedDate = date.split('-').map(item => parseInt(item));
        let mydate = new Date(splitedDate[0], splitedDate[1] - 1, splitedDate[2]);
        return (mydate.toDateString());
    }

    const dateDifference = (dueDate: string) => {

        let date1 = new Date(currentDate);
        let date2 = new Date(toDate(dueDate));

        let dif = date2.getTime() - date1.getTime();
        let difDays = Math.floor(dif / (1000 * 3600 * 24));

        return difDays;
    }

    const dayWord = (dayAmount: number) => {
        if (dayAmount > 4) { return "dní" };
        if (dayAmount === 1) { return "den" };
        if (dayAmount > 1 && dayAmount < 5) { return "dny" };
    }

    const payment = (state: string, duedDate: string) => {
        let days = dateDifference(duedDate);

        if (state === "paid") {
            return "Uhrazeno"
        } else if (state === "processing") {
            return "Platba se zpracovává"
        } else if (state === "pending") {
            if (days > 0) {
                return `Splatno za ${days} ${dayWord(days)}`
            } else if (days < 0) {
                return `Po splatnosti ${Math.abs(days)} ${dayWord(Math.abs(days))}`
            } else {
                return "Splatno dnes"
            }
        }
    }

    const history = useHistory();
    const handleClick = (route: string) => history.push(`/${route}`);
    const spaceSeparator = (value: number) => {
        if (value % 1 === 0) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        } else {
            let dividedValue = value.toString().split(".");
            dividedValue[0] = dividedValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            return dividedValue.join(".");
        }
    }

    return (
        <>
            {apiData.slice(0, rows).map(
                (item, index) => (
                    <div key={index} className={`table__row grid ${item.state === 'pending' ? 'util-fw-700' : ""}`}>
                        <div className="table__data">
                            <div className="table__data__ico">
                                {<Icon name="fire" />}
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
                                {item.state && item.payDueDate ? payment(item.state, item.payDueDate) : '-'}
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
                                        onClick={() => { handleClick("contract-detail"); }} />
                            }
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default TableRow
