import { useState } from 'react'
import './App.css'
import Popup from './popup'

function App() {
  const [showFileMenu, setShowFileMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }



  const menuItems = [
    { title: 'About', key: 'A' },
    { title: 'Experience', key: 'E' },
    { title: 'Contact', key: 'C' }
  ];

  const fileMenuItems = [
    { title: 'New', shortcut: 'F3' },
    { title: 'Open...', shortcut: 'F2' }
  ];



  const WORk_EXPERIENCE = [
    {
      companyName: 'NTT DATA',
      departmentName: 'DGTIC - Generalitat Valenciana',
      proyect: 'DESIGHA',
      activities: [
        'Desarrollé nuevas funcionalidades para el software de recaudación de impuestos en colaboración con un equipo de ingenieros.',
        'Apliqué buenas prácticas de código limpio, asegurando que fuera legible, mantenible, escalable y testeable.',
        'Documenté manuales de uso para cada requerimiento entregado.'
      ],
      tecnologies: [
        'Spring Framework',
        'JPA',
        'Oracle SQL Developer',
        'JUnit',
        'Thymeleaf',
        'jQuery',
      ]
    }, {
      companyName: 'NTT DATA',
      departmentName: 'DGTIC - Generalitat Valenciana',
      proyect: 'IGUALDAD',
      activities: [
        'Trabajé con ingenieros, analistas y testers en la migración de funcionalidades a una nueva tecnología para la gestión de expedientes de Dependencia.',
        'Apliqué principios de desarrollo de software enfocados en la mantenibilidad y testabilidad del código.',
        'Analicé y diseñé un módulo de formularios dinámicos para automatizar la creación, visualización y recopilación de información en cada fase del proceso de solicitud.',
        'Implementé una prueba de concepto para la configuración y visualización dinámica de formularios de solicitud.'
      ],
      tecnologies: [
        'ZK',
        'Spring Framework',
        'JPA',
        'Oracle SQL Developer',
        'JUnit',
      ]
    }, {
      companyName: 'NTT DATA',
      departmentName: 'YPF',
      proyect: 'Célula Unify - Fase 2',
      activities: [
        'Desarrollé e implementé nuevas funcionalidades priorizadas por el negocio en un software cliente basado en DecisionSpace® Integration Server (DSIS).',
        'Trabajé en la integración y sincronización de nuevos orígenes de datos en una plataforma de procesamiento de datos para Upstream.',
      ],
      tecnologies: [
        'Angular', 'Jasmine', 'Jest', 'Node JS', 'DecisionSpace® Integration Server', 'Apache Solr', 'Azure DevOps',
      ]
    }, {
      companyName: 'NTT DATA',
      departmentName: 'YPF',
      proyect: 'Sistema Integra',
      activities: [
        'Colaboré con un equipo de ingenieros, analistas, y testers para crear un sistema de gestión y configuración de recursos de sistema de control de productos fitosanitarios.',
        'Integré tecnologías de autenticación y geolocalización para mejorar la seguridad y funcionalidad de la plataforma.',
        'Diseñé y desarrollé una interfaz web para la visualización de información pública como manuales, guías y documentos importantes para el sistema.'
      ],
      tecnologies: [
        'Angular', 'Jest', 'Azure DevOps', 'SAML', 'Maps JavaScript API'
      ]
    }, {
      companyName: 'Universidad Peruana Unión',
      departmentName: 'Departamento general de tecnologías de la información',
      proyect: 'Área de desarrollo de software',
      activities: [
        'Colaboré con múltiples equipos de especialistas tecnológicos en la construcción del ERP institucional con enfoque financiero y educativo. Analicé, diseñé e implementé funcionalidades en módulos backend y frontend aplicando buenas prácticas de desarrollo y optimización de arquitectura de software en cada módulo del sistema',
        'Participé en la identificación, definición y organización de los componentes clave del ecosistema de aplicaciones.',
        'Brindé soporte y mantenimiento a una aplicación cliente-servidor para la gestión de eventos, habilitándola en un entorno local, resolviendo dependencias y agregando funcionalidades faltantes antes de prepararla para su despliegue en CI/CD.',
        'Apoyé en el proceso de onboarding de nuevos colaboradores, facilitando su integración en tecnologías, metodologías y dinámicas del equipo.',
      ],
      tecnologies: [
        'Angular', 'Laravel', 'Oracle Database', 'Eloquent', 'PostgreSQL', 'OAuth', 'Angular Material', 'Nebular UI', 'Jenkins', 'DjangoRestFramework', 'Angular JS'
      ]
    }, {
      companyName: 'Universidad Peruana Unión',
      departmentName: 'Vicerrectorado académico',
      proyect: 'ERP institucional',
      activities: [
        'Desarrollé funcionalidades para el ERP Académico y CRM institucional, colaborando con analistas y desarrolladores en aplicaciones backend y frontend.',
        'Implementé reportes estadísticos según requerimientos utilizando herramientas de visualización de datos, gráficos y optimización de consultas SQL.',
        'Optimizé y automatizé procesos de minificación para la generación de artefactos de software en módulos frontend.',
        'Participé en el upgrade tecnológico de aplicaciones, migrando funcionalidades de AngularJS a Angular, asegurando la continuidad operativa y escalabilidad.',
      ],
      tecnologies: [
        'Angular JS',
        'Angular JS Material',
        'DjangoRestFramework',
        'Angular',
        'Angular Material',
        'Oracle Database',
      ]
    }, {
      companyName: 'Universidad Peruana Unión - FJ',
      departmentName: 'Dirección general de sistemas',
      proyect: 'Área de desarrollo de software',
      activities: [
        'Contribuí en el analisis y desarrollo de un sistema para la gestión de acuerdos académicos, facilitando la autoevaluación y cumplimiento de estándares del Modelo de Gestión Educativa.',
        'Instalé y configuré servicios web para aplicaciones backend y frontend.',
        'Implementé mecanismos de integración y despliegue en entornos de pruebas y desarrollo para aplicaciones backend y frontend.',
        'Brindé soporte y mantenimiento a una aplicación móvil informativa para programas y conferencias, agregando nuevas secciones y vistas con contenido actualizado acorde al evento, integrando de forma embebida la transmisión en vivo y generando los APKs para su despliegue en Google Play Store.',
      ],
      tecnologies: [
        'Angular JS', 'Angular JS Material', 'Django', 'Django REST framework', 'MySQL', 'Ionic Framework', 'Nginx', 'Trello',
      ]
    }

  ]
  return (

    <div className="h-screen w-screen bg-gray-800 flex flex-col overflow-hidden">
      {/* Top Menu Bar */}
      <div className="flex items-center gap-1 px-2 py-1 bg-gray-300 border-b-2 border-gray-400 w-full">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => item.title === 'About' && setShowFileMenu(!showFileMenu)}
            className="px-2 hover:bg-blue-600 hover:text-white focus:outline-none"
          >
            <span className="text-red-600">{item.key}</span>
            {item.title.slice(1)}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 relative flex flex-col w-full h-full overflow-hidden">
        {showFileMenu && (
          <div className="absolute left-2 top-0 w-48 bg-gray-200 border-2 border-gray-400 shadow-lg z-50">
            {fileMenuItems.map((item, index) => (
              <div
                key={index}
                className="px-4 py-1 hover:bg-blue-600 hover:text-white cursor-pointer flex justify-between"
              >
                <span>
                  {item.title.split('').map((char, i) =>
                    char.toLowerCase() === 'n' || char.toLowerCase() === 'o' ||
                      char.toLowerCase() === 's' || char.toLowerCase() === 'c' ||
                      char.toLowerCase() === 'p' || char.toLowerCase() === 'd' ||
                      char.toLowerCase() === 'q' ?
                      <span key={i} className="text-red-600">{char}</span> : char
                  )}
                </span>
                {item.shortcut && (
                  <span className="ml-4 text-gray-600">{item.shortcut}</span>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="flex-1 bg-blue-600 p-4 text-white flex flex-col md:flex-row w-full h-full gap-2 overflow-auto">


          <div className="border-4 border-double border-gray-400 p-2 w-50 basis-1/2 relative h-full ">
            <div className="absolute -top-3 left-3 bg-blue-600 px-1 text-sm"> [<span className="text-green-400">&#9632;</span>]</div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 px-2 text-sm">github.julnarot/main.prev</div>
            <div className="absolute -top-3 right-11 bg-blue-600 px-1 text-sm"> 4</div>
            <div className="absolute -top-3 right-3 bg-blue-600 px-1 text-sm"> [<span className="text-green-400">&#8593;</span>]</div>
            <div className="font-mono p-2 text-yellow-300 selection:bg-cyan-400 h-full overflow-auto">
              <p className='my-4'>
                RAUL JONATAN | Full stack engineering
              </p>
              <img src="https://avatars.githubusercontent.com/u/2840577?v=4" alt="@Julnarot" className='max-h-40' />
              <p className="my-4">
                ¡Hola! Soy desarrollador de software con más de 7 años de experiencia en la construcción de plataformas web corporativas para distintos sectores empresariales.
              </p>
              <p className="my-4">
                A lo largo de mi trayectoria, he tenido la oportunidad de asumir roles clave en el análisis, diseño e implementación de soluciones tecnológicas, gracias a la confianza de mis empleadores y mi compromiso con el aprendizaje continuo.
              </p>
              <p className="my-4">
                Me especializo en desarrollo Full Stack, un campo que encuentro desafiante y emocionante, ya que me permite reinventarme constantemente, explorar tecnologías emergentes y abordar la resolución de problemas con creatividad.
              </p>
              <p className="my-4">
                Creo en el trabajo en equipo y la colaboración como pilares fundamentales para el éxito de cualquier proyecto. Mi objetivo es aportar valor en cada desarrollo, buscando siempre soluciones eficientes, escalables y de alta calidad.
              </p>
            </div>
          </div>

          <div className="border-4 border-double border-gray-400 p-2 w-50 basis-1/2 relative h-full ">
            <div className="absolute -top-3 left-3 bg-blue-600 px-1 text-sm"> [<span className="text-green-400">&#9632;</span>]</div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 px-2 text-sm">github.julnarot/work-exp.prev</div>
            <div className="absolute -top-3 right-11 bg-blue-600 px-1 text-sm"> 4</div>
            <div className="absolute -top-3 right-3 bg-blue-600 px-1 text-sm"> [<span className="text-green-400">&#8593;</span>]</div>
            <div className="font-mono p-2 text-yellow-300 selection:bg-cyan-400 h-full overflow-auto">
              <p className='my-4'>
                Experiencia Laboral
              </p>
              <ul className='list-disc list-inside'>
                <li>
                  NTT DATA
                  <div className='ml-5 mt-2' onClick={toggle}>
                    DESIGHA | DGTIC - Generalitat Valenciana
                    <ul className='list-disc list-inside'>
                      <li>Desarrollé nuevas funcionalidades para el software de recaudación de impuestos en colaboración con un equipo de ingenieros. </li>
                      <li>Apliqué buenas prácticas de código limpio, asegurando que fuera legible, mantenible, escalable y testeable.</li>
                      <li>Documenté manuales de uso para cada requerimiento entregado.</li>
                    </ul>
                  </div>
                  <div className='ml-5 mt-2'>
                    IGUALDAD | DGTIC - Generalitat Valenciana
                    <ul className='list-disc list-inside'>
                      <li>Trabajé con ingenieros, analistas y testers en la migración de funcionalidades a una nueva tecnología para la gestión de expedientes de Dependencia.</li>
                      <li>Apliqué principios de desarrollo de software enfocados en la mantenibilidad y testabilidad del código.</li>
                      <li>Analicé y diseñé un módulo de formularios dinámicos para automatizar la creación, visualización y recopilación de información en cada fase del proceso de solicitud.</li>
                      <li>Implementé una prueba de concepto para la configuración y visualización dinámica de formularios de solicitud. </li>

                    </ul>
                  </div>
                  <div className='ml-5 mt-2'>
                    Célula Unify - Fase 2 | YPF
                    <ul className='list-disc list-inside'>
                      <li>Desarrollé e implementé nuevas funcionalidades priorizadas por el negocio en un software cliente basado en DecisionSpace® Integration Server (DSIS). </li>
                      <li>Trabajé en la integración y sincronización de nuevos orígenes de datos en una plataforma de procesamiento de dattos para Upstream. </li>
                    </ul>
                  </div>
                  <div className='ml-5 mb-2'>
                    Sistema Integra | YPF
                    <ul className='list-disc list-inside'>
                      <li>Colaboré con un equipo de ingenieros, analistas, y testers para crear un sistema de gestión y configuración de recursos de sistema de control de productos fitosanitarios.</li>
                      <li>Integré tecnologías de autenticación y geolocalización para mejorar la seguridad y funcionalidad de la plataforma.</li>
                      <li>Diseñé y desarrollé una interfaz web para la visualización de información pública como manuales, guías y documentos importantes para el sistema</li>
                    </ul>
                  </div>
                </li>

                <li>
                  Universidad Peruana Unión
                  <div className='ml-5'>
                    Departamento general de tecnologías de la información
                    <ul className='list-disc list-inside'>
                      <li>Colaboré con múltiples equipos de especialistas tecnológicos en la construcción del ERP institucional con enfoque financiero y educativo. Analicé, diseñé e implementé funcionalidades en módulos backend y frontend aplicando buenas prácticas de desarrollo y optimización de arquitectura de software en cada módulo del sistema</li>
                      <li>Participé en la identificación, definición y organización de los componentes clave del ecosistema de aplicaciones.</li>
                      <li>Apoyé en el proceso de onboarding de nuevos colaboradores, facilitando su integración en tecnologías, metodologías y dinámicas del equipo.</li>

                    </ul>
                  </div>
                  <div className='ml-5'>
                    Vicerrectorado académico
                    <ul className='list-disc list-inside'>
                      <li>Desarrollé funcionalidades para el ERP Académico y CRM institucional, colaborando con analistas y desarrolladores en aplicaciones backend y frontend.</li>
                      <li>Implementé reportes estadísticos según requerimientos utilizando herramientas de visualización de datos, gráficos y optimización de consultas SQL.</li>
                      <li>Optimizé y automatizé procesos de minificación para la generación de artefactos de software en módulos frontend.</li>
                      <li>Participé en el upgrade tecnológico de aplicaciones, migrando funcionalidades de AngularJS a Angular, asegurando la continuidad operativa y escalabilidad.</li>
                    </ul>
                  </div>
                  <div className='ml-5'>
                    Dirección general de sistemas - Sede Juliaca
                    <ul className='list-disc list-inside'>
                      <li>Contribuí en el analisis y desarrollo de un sistema para la gestión de acuerdos académicos, facilitando la autoevaluación y cumplimiento de estándares del Modelo de Gestión Educativa.</li>
                      <li>Instalé y configuré servicios web para aplicaciones backend y frontend.</li>
                      <li>Implementé mecanismos de integración y despliegue en entornos de pruebas y desarrollo para aplicaciones backend y frontend.</li>
                    </ul>
                  </div>
                </li>
              </ul>
              |


            </div>
          </div>

        </div>

      </div>

      {/* Status Bar */}
      <div className="bg-gray-300 px-2 py-1 border-t-2 border-gray-400 flex justify-between text-sm w-full">
        <div>1:1</div>
        <div>F1 Help | Create a new file in a new Edit window</div>
      </div>

      {isOpen && <Popup onClose={toggle} />}

    </div>



  )
}

export default App


