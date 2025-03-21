export const getDurationBetweenStrDates = (startStrDate, endStrDate) => {
    const startDate = new Date(startStrDate);
    const endDate = new Date(endStrDate);
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }
    return years > 0 ? `${years} años y ${months} meses` : `${months} meses`;
};

export const strDateToStrMonthYear = (stringDate) => {
    const _date = new Date(stringDate);
    return `${_date.getMonth() + 1}/${_date.getFullYear()}`;
}