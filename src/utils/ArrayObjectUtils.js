export const groupBy = (list, property) => {
    return Object.values(
        list.reduce((result, item) => {
        const key = item[property];
        if (!result[key]) {
            result[key] = { key, values: [] };
        }
        result[key].values.push(item);
        return result;
    }, {}))
}