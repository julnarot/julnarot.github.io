import { WORK_EXPERIENCE } from "../constants/profile";
import { getDuration } from "../utils/timeUtils";

export const getWorkExperiences = () => {
    return WORK_EXPERIENCE;
};

export const getWorkExperiencesGrouped = () => {
    return Object.values(getWorkExperiences().map(we => {
        const _startDate = new Date(we.startDate);
        const _endDate = new Date(we.endDate);
        we.startDateStr = `${_startDate.getMonth() + 1}/${_startDate.getFullYear()}`;
        we.endDateStr = `${_endDate.getMonth() + 1}/${_endDate.getFullYear()}`;
        we.duration = getDuration(_startDate, _endDate)
        return we
    }).reduce((result, item) => {
        const key = item['companyName'];
        if (!result[key]) {
            result[key] = { key, values: [] };
        }
        result[key].values.push(item);
        return result;
    }, {})).map(grouped => {
        const _startDate = new Date(grouped.values[grouped.values.length - 1].startDate);
        const _endDate = new Date(grouped.values[0].endDate);
        grouped.companyDuration = getDuration(_startDate, _endDate)
        return grouped;
    });

};

