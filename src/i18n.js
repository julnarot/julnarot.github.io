import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      main: {
        // "greeting": "Hello! I'm a software developer with over 7 years of experience building corporate web platforms for various business sectors.",
        professionalCareer:
          "Hi! I'm a software developer with over 7 years of experience in creating web solutions for various industries. Throughout my career, I have worked in all stages of the development life cycle, from analysis and design to implementation and support. My focus has always been on developing tools that deliver tangible value by improving software quality, automating processes effectively, and enhancing operational efficiency.",
        specialty:
          "I specialize in Full Stack development. While I enjoy tackling abstract challenges related to data integration and management on the backend, I’m also passionate about shaping clear, practical, and user-friendly interfaces on the frontend. I work with various programming languages, frameworks, and technologies, always striving to apply best practices effectively according to each project’s needs. I’m a perseverant and patient professional who enjoys analyzing problems from different perspectives and finding solutions, even in complex or challenging situations.",
        working:
          "I understand the importance of aligning with the team’s goals and pace, as I believe that shared organization is the foundation of collective success. I collaborate proactively and with commitment on the team’s assigned tasks, and when we face challenges or blockers, I analyze the situation and suggest possible solutions when needed. I strive to communicate information and ideas clearly and accurately to help the team move forward and progress toward our shared goals.",
      },
      workExperience: {
        title: "Work Experience",
        expItemCompany: "Company",
        expItemProjects: "Projects",
        expItemDuration: "Duration",
        project: {
          labelCustomer: "Customer",
          labelTypeEmployment: "T. Employment",
          labelEmploymentModality: "Modality",
          labelDuration: "Duration",
          skills: {
            labelAll: "All",
          },
          windowTitleActivities: "Activities",
          sectionTitleTecnologies: "Tecnologies",
          btnCloseName: "Close",
        },
      },
      academicTraining: {
        title: "Academic training",
        universityName: "Universidad peruana unión (UPeU)",
        universityGrade: "Bachelor's degree in Systems Engineering",
        languageInstituteName: "Centro de Idiomas UPeU",
        languageInstituteGrade: "Level A1/A2 and B1/B2 Passed.",
      },
      contactMe: {
        title: "Contact me",
      },
    },
  },
  es: {
    translation: {
      main: {
        // "greeting": "¡Hola! Soy desarrollador de software con más de 7 años de experiencia en la construcción de plataformas web corporativas para distintos sectores empresariales.",
        professionalCareer:
          "¡Hola! Soy desarrollador de software con más de 7 años de experiencia en la creación de soluciones web para diversos sectores. A lo largo de mi carrera, He trabajado en todas las fases del ciclo de vida del desarrollo: desde el análisis y diseño, hasta la implementación y soporte., siempre con el compromiso de crear herramientas de valor tangible que mejoren la calidad del software, la automatización efectiva de procesos y la eficiencia operativa.",
        specialty:
          "Me especializo en el desarrollo Full Stack. Si bien disfruto abordar los retos abstractos relacionados con la integración y gestión de información en el backend, también me apasiona dar forma visual, práctica y clara a la capa de presentación frontend. Trabajo con distintos lenguajes, frameworks y tecnologías, procurando siempre incorporar las mejores prácticas de cada una para aplicarlas de manera efectiva según las necesidades de cada proyecto. Soy una persona perseverante y paciente ante los desafíos; disfruto analizar los problemas desde distintos enfoques y encontrar soluciones incluso en escenarios complejos o desafiantes.",
        working:
          "Entiendo la importancia de alinearme con los objetivos y ritmos del equipo, porque creo que el orden compartido es la base del éxito colectivo. Colaboro de manera proactiva y comprometida con las tareas asignadas al equipo y, cuando enfrentamos desafíos o bloqueos, analizo la situación y propongo alternativas de solución cuando es necesario. Procuro gestionar la información y las ideas de forma clara y precisa, para contribuir al avance del equipo y favorecer el avance hacia nuestras metas.",
      },
      workExperience: {
        title: "Experiencia Laboral",
        expItemCompany: "Empresa",
        expItemProjects: "Proyectos",
        expItemDuration: "Duración",
        project: {
          labelCustomer: "Cliente",
          labelTypeEmployment: "T. Empleo",
          labelEmploymentModality: "Modalidad",
          labelDuration: "Duración",
          skills: {
            labelAll: "Todos",
          },
          windowTitleActivities: "Actividades",
          sectionTitleTecnologies: "Tecnologías",
          btnCloseName: "Cerrar",
        },
      },
      academicTraining: {
        title: "Formación académica",
        universityName: "Universidad peruana unión (UPeU)",
        universityGrade:
          "Grado académico de Bachiller en Ingeniería de Sistemas",
        languageInstituteName: "Centro de Idiomas UPeU",
        languageInstituteGrade: "Nivel A1/A2 y B1/B2 Aprobados.",
      },
      contactMe: {
        title: "Contáctame",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

// ¡Hola! Soy desarrollador de software con más de 7 años de experiencia en la creación de soluciones web para diversos sectores. A lo largo de mi carrera, he asumido roles clave en el análisis, diseño, desarrollo, implementación y soporte de plataformas tecnológicas, siempre con el compromiso de crear herramientas de valor tangible que mejoren la eficiencia operativa mediante la optimización y automatización de procesos.
// Me especializo en el desarrollo Full Stack. Si bien disfruto abordar los retos relacionados con la integración y gestión de información en el backend, también me apasiona dar forma visual, útil y clara a las interfaces en la capa de presentación. Trabajo con distintos lenguajes, frameworks y tecnologías emergentes, procurando siempre incorporar las mejores prácticas de cada una para aplicarlas de manera efectiva según las necesidades de cada proyecto. Además, me considero una persona perseverante y paciente ante los desafíos; disfruto analizar los problemas desde distintos enfoques y encontrar soluciones incluso en escenarios complejos o con limitaciones de tiempo.
// Me alineo con los objetivos y ritmos del equipo porque creo que el orden compartido es la base del éxito colectivo. Participo activamente, ayudo donde sea necesario y, cuando detecto un bloqueo —técnico o de flujo— analizo alternativas y las comparto de manera clara, siempre que así se requiera

// // por revisar SUPUESTAMENTE SIN REDUNDACNIA:

// [

// ¡Hola! Soy desarrollador de software con más de 7 años de experiencia creando soluciones web para diversos sectores. He asumido roles clave en el análisis, diseño, desarrollo e implementación de plataformas tecnológicas, siempre con el compromiso de generar herramientas de valor que optimicen y automaticen procesos para mejorar la eficiencia operativa.

// Me especializo en desarrollo Full Stack. Disfruto abordar los retos del backend, integrando y gestionando información, al mismo tiempo que diseño interfaces claras y útiles en el frontend. Trabajo con distintos lenguajes, frameworks y tecnologías emergentes, incorporando las mejores prácticas de cada una según las necesidades del proyecto. Soy perseverante y paciente ante los desafíos, disfrutando analizar problemas desde distintos enfoques y encontrar soluciones incluso en escenarios complejos o con limitaciones de tiempo.

// Me alineo con los objetivos y ritmos del equipo, consciente de que el orden compartido es la base del éxito colectivo. Colaboro activamente, apoyo donde se requiere y, cuando detecto un bloqueo —técnico o de flujo— analizo alternativas y las comparto de manera clara, siempre que sea necesario.

// ]
