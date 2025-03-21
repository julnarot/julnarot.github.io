import { WORK_EXPERIENCE } from "../constants/profile";
import { groupBy } from "../utils/ArrayObjectUtils";
import { getDurationBetweenStrDates, strDateToStrMonthYear } from "../utils/timeUtils";

export const getWorkExperiences = () => {
    return WORK_EXPERIENCE.map(we => {
        we.startDateStr = strDateToStrMonthYear(we.startDate);
        we.endDateStr = strDateToStrMonthYear(we.endDate);
        we.duration = getDurationBetweenStrDates(we.startDate, we.endDate)
        return we;
    });
};

export const getWorkExperiencesGrouped = () => {
    return groupBy(
        getWorkExperiences(), 'companyName'
    ).map(grouped => {
        grouped.companyDuration = getDurationBetweenStrDates(
            grouped.values[grouped.values.length - 1].startDate,
            grouped.values[0].endDate
        )
        return grouped;
    });

};

