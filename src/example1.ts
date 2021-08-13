const isLeapYear = (year: number): boolean => {
    let result: boolean;

    if (year % 400 === 0) {
        result = true;
    } else if (year % 4 === 0) {
        if (year % 100 !== 0) {
            result = true;
        } else {
            result = false;
        }
    } else {
        result = false;
    }

    return result;
}
