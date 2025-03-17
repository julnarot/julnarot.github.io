import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "main": {
                "greeting": "Hello! I'm a software developer with over 7 years of experience building corporate web platforms for various business sectors.",
                "professionalCareer": "Throughout my career, I've had the opportunity to take on key roles in the analysis, design, and implementation of technological solutions, thanks to the trust of my employers and my commitment to continuous learning.",
                "specialty": "I specialize in Full Stack development, a field I find challenging and exciting as it allows me to constantly reinvent myself, explore emerging technologies, and approach problem-solving creatively.",
                "working": "I believe in teamwork and collaboration as fundamental pillars for the success of any project. My goal is to add value to every development, always seeking efficient, scalable, and high-quality solutions."
            },
            "workExperience": {
                "title": "Work Experience",
                "expItemCompany": "Company",
                "expItemProjects": "Projects",
                "expItemDuration": "Duration",
                "project": {
                    "labelCustomer": "Customer",
                    "labelTypeEmployment": "T. Employment",
                    "labelEmploymentModality": "Modality",
                    "labelDuration": "Duration",
                    "skills": {
                        "labelAll": "All"
                    },
                    "windowTitleActivities": "Activities",
                    "sectionTitleTecnologies": "Tecnologies",
                    "btnCloseName": "Close"
                },

            },
            "academicTraining": {
                "title": "Academic training",
                "universityName": "Universidad peruana unión (UPeU)",
                "universityGrade": "Bachelor's degree in Systems Engineering",
                "languageInstituteName": "Centro de Idiomas UPeU",
                "languageInstituteGrade": "Level A1 and A2 Passed.",
            },
            "contactMe": {
                "title": "Contact me"
            }
        }
    },
    es: {
        translation: {
            "main": {
                "greeting": "¡Hola! Soy desarrollador de software con más de 7 años de experiencia en la construcción de plataformas web corporativas para distintos sectores empresariales.",
                "professionalCareer": "A lo largo de mi trayectoria, he tenido la oportunidad de asumir roles clave en el análisis, diseño e implementación de soluciones tecnológicas, gracias a la confianza de mis empleadores y mi compromiso con el aprendizaje continuo.",
                "specialty": "Me especializo en desarrollo Full Stack, un campo que encuentro desafiante y emocionante, ya que me permite reinventarme constantemente, explorar tecnologías emergentes y abordar la resolución de problemas con creatividad.",
                "working": "Creo en el trabajo en equipo y la colaboración como pilares fundamentales para el éxito de cualquier proyecto. Mi objetivo es aportar valor en cada desarrollo, buscando siempre soluciones eficientes, escalables y de alta calidad."
            },
            "workExperience": {
                "title": "Experiencia Laboral",
                "expItemCompany": "Empresa",
                "expItemProjects": "Proyectos",
                "expItemDuration": "Duración",
                "project": {
                    "labelCustomer": "Cliente",
                    "labelTypeEmployment": "T. Empleo",
                    "labelEmploymentModality": "Modalidad",
                    "labelDuration": "Duración",
                    "skills": {
                        "labelAll": "Todos"
                    },
                    "windowTitleActivities": "Actividades",
                    "sectionTitleTecnologies": "Tecnologías",
                    "btnCloseName": "Cerrar"
                },

            },
            "academicTraining": {
                "title": "Formación académica",
                "universityName": "Universidad peruana unión (UPeU)",
                "universityGrade": "Grado académico de Bachiller en Ingeniería de Sistemas",
                "languageInstituteName": "Centro de Idiomas UPeU",
                "languageInstituteGrade": "Nivel A1 y A2 Aprobados.",
            },
            "contactMe": {
                "title": "Contáctame"
            }
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;