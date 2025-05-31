export const getDurationBetweenStrDates = (lng, startStrDate, endStrDate) => {
  const startDate = new Date(startStrDate);
  const endDate = new Date(endStrDate);
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  const getYearLngStr = (lng, year) => {
    if (lng === "es") {
      return `${year} año${year > 1 ? "s" : ""}`;
    }
    return `${year} year${year > 1 ? "s" : ""}`;
  };
  const getMonthLngStr = (lng, month) => {
    if (lng === "es") {
      return `${month} mes${month > 1 ? "es" : ""}`;
    }
    return `${month} month${month > 1 ? "s" : ""}`;
  };
  const getYearMonthLngStr = (lng, year, month) => {
    if (lng === "es") {
      return `${getYearLngStr(lng, year)} y ${getMonthLngStr(lng, month)}`;
    }
    return `${getYearLngStr(lng, year)} and ${getMonthLngStr(lng, month)}`;
  };

  if (months < 0) {
    years--;
    months += 12;
  }
  if (years > 0) {
    if (months > 0) {
      return getYearMonthLngStr(lng, years, months);
    }
    return getYearLngStr(lng, years);
  } else {
    return getMonthLngStr(lng, months);
  }
};

export const strDateToStrMonthYear = (stringDate) => {
  const _date = new Date(stringDate);
  return `${_date.getMonth() + 1}/${_date.getFullYear()}`;
};
