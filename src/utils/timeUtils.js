export const getDurationBetweenStrDates = (startStrDate, endStrDate) => {
    const startDate = new Date(startStrDate);
    const endDate = new Date(endStrDate);
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }
    if (years > 0) {
        if (months > 0) {
            return `${years} años y ${months} meses`;
        }
        return `${years} años`;
    } else {
        return `${months} meses`;
    }
};

export const strDateToStrMonthYear = (stringDate) => {
    const _date = new Date(stringDate);
    return `${_date.getMonth() + 1}/${_date.getFullYear()}`;
}