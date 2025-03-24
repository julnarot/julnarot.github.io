import { WORK_EXPERIENCE, WORK_EXPERIENCE_ES } from "../constants/profile";
import { groupBy } from "../utils/ArrayObjectUtils";
import { getDurationBetweenStrDates, strDateToStrMonthYear } from "../utils/timeUtils";

const getWorkExperiencesByLng = (lng) => {
    let workExperiences = WORK_EXPERIENCE;
    if (lng === 'es') {
        workExperiences = WORK_EXPERIENCE_ES
    }
    return workExperiences.map(we => {
        we.startDateStr = strDateToStrMonthYear(we.startDate);
        we.endDateStr = strDateToStrMonthYear(we.endDate);
        we.duration = getDurationBetweenStrDates(we.startDate, we.endDate)
        return we;
    });
};

export const getWorkExperiencesGrouped = (lng) => {
    return groupBy(
        getWorkExperiencesByLng(lng), 'companyName'
    ).map(grouped => {
        grouped.companyDuration = getDurationBetweenStrDates(
            grouped.values[grouped.values.length - 1].startDate,
            grouped.values[0].endDate
        )
        return grouped;
    });

};

