export const getWorkExperiences = async () => {
    const response = await fetch("/data/workExperiences.json");
    return response.json();
};