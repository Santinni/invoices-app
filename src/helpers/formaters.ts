const spaceSeparator = (value: number) => {
    if (value % 1 === 0) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else {
        let dividedValue = value.toString().split(".");
        dividedValue[0] = dividedValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return dividedValue.join(".");
    }
}

export {
    spaceSeparator
}