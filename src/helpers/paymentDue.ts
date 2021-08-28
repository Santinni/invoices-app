const dayWord = (dayAmount: number) => {
    if (dayAmount > 4) { return "dní" };
    if (dayAmount === 1) { return "den" };
    if (dayAmount > 1 && dayAmount < 5) { return "dny" };
}

const toDate = (date: string) => {
    let splitedDate = date.split('-').map(item => parseInt(item));
    let mydate = new Date(splitedDate[0], splitedDate[1] - 1, splitedDate[2]);
    return (mydate.toDateString());
}

const dateDifference = (currentDate: Date, dueDate: string) => {

    let date1 = new Date(currentDate);
    let date2 = new Date(toDate(dueDate));

    let dif = date2.getTime() - date1.getTime();
    let difDays = Math.floor(dif / (1000 * 3600 * 24));

    return difDays;
}

const paymentDue = (state: string, currentDate: Date, duedDate: string) => {
    let days = dateDifference(currentDate, duedDate);

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

export default paymentDue;