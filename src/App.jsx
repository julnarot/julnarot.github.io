import { useState, useEffect } from 'react'
import './App.css'
import Popup from './components/popup'
import { getWorkExperiences } from './services/workExperienceService';
import MenuBar from './components/menuBar';
import StatusBar from './components/statusBar';
import Contact from './components/contact';
import AboutPopup from './components/aboutPopup';
import { SUBMENU_ACTIONS } from './constants/popup';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [workExperience, setWorkExperience] = useState(null);
  const [workExperiences, setWorkExperiences] = useState([]);
  const [subMenuItem, setSubMenuItem] = useState(null);

  useEffect(() => {
    getWorkExperiences().then(data =>

      setWorkExperiences(

        Object.values(data.map(we => {
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
        })
      )

    );
  }, []);

  const onContactToggle = () => {
    setIsContactOpen(!isContactOpen)
  }

  const getDuration = (startDate, endDate) => {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }
    return years > 0 ? `${years} años y ${months} meses` : `${months} meses`;
  };

  function toggle(workExperience) {
    setIsOpen((isOpen) => !isOpen);
    setWorkExperience(workExperience);
  }

  function menuSelected(subItemSelected) {
    const menuAction = SUBMENU_ACTIONS.find(sm => sm.menuTitle === subItemSelected.menu && sm.subMenuTitle === subItemSelected.title)
    if (menuAction.type === 'POPUP') {

      setSubMenuItem(menuAction)
    } else if (menuAction && menuAction.type === 'LINK') {
      menuAction.component()
    }
  }

  return (

    <div className="h-screen w-screen bg-gray-800 flex flex-col overflow-hidden">
      {/* Top Menu Bar */}
      <MenuBar onSubMenuSelected={menuSelected} />

      {/* Main Content */}
      <div className="flex-1 relative flex flex-col w-full h-full overflow-hidden">
        <div className="flex-1 bg-blue-600 p-4 text-white flex flex-col md:flex-row w-full h-full gap-2 overflow-auto">

          <div className="border-4 border-double border-gray-400 p-2 w-50 basis-1/2 relative h-full ">
            <div className="absolute -top-3 left-3 bg-blue-600 px-1 text-sm"> [<span className="text-green-400">&#9632;</span>]</div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 px-2 text-sm">~/main.prev</div>
            <div className="absolute -top-3 right-11 bg-blue-600 px-1 text-sm">2</div>
            <div className="absolute -top-3 right-3 bg-blue-600 px-1 text-sm"> [<span className="text-green-400">&#8593;</span>]</div>
            <div className="font-mono p-2 text-yellow-300 selection:bg-cyan-400 h-full overflow-auto 
            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bluen-600 [&::-webkit-scrollbar-thumb]:bg-cyan-500">
              <div className='my-4'>
                [<h1 className='cursor-pointer font-bold underline decoration-wavy inline' onClick={onContactToggle}>RAUL JONATAN</h1>] | <h2 className='inline'>Full stack engineering</h2>
              </div>
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

          <div className="flex-1 bg-blue-600 text-white flex flex-col w-full h-full gap-2">

            <div className="border-4 border-double border-gray-400 p-2 w-50 basis-1/2 relative  ">
              <div className="absolute -top-3 left-3 bg-blue-600 px-1 text-sm"> [<span className="text-green-400">&#9632;</span>]</div>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 px-2 text-sm">~/work-exp.prev</div>
              <div className="absolute -top-3 right-11 bg-blue-600 px-1 text-sm">3</div>
              <div className="absolute -top-3 right-3 bg-blue-600 px-1 text-sm"> [<span className="text-green-400">&#8593;</span>]</div>
              <div className="font-mono p-2 text-yellow-300 selection:bg-cyan-400 h-full overflow-auto">
                <p className='my-4'>
                  Experiencia Laboral
                </p>
                <ul className='list-disc list-inside '>
                  {workExperiences.map((item, index) => (
                    <li key={index}>
                      Empresa: {item.key} | Proyectos: {item.values.map((exp, iexp) =>
                        <div key={iexp} className=' text-sm inline'>
                          [<a className="cursor-pointer font-bold underline decoration-wavy" onClick={() => toggle(exp)}>
                            {exp.proyect.toUpperCase()}
                          </a>]
                          {iexp < (item.values.length - 1) ? ' ' : ''}
                        </div>
                      )} | Duración: {item.companyDuration}
                    </li>
                  ))}
                </ul>

              </div>
            </div>

            <div className="border-4 border-double border-gray-400 p-2 w-50 basis-1/2 relative ">
              <div className="absolute -top-3 left-3 bg-blue-600 px-1 text-sm"> [<span className="text-green-400">&#9632;</span>]</div>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 px-2 text-sm">~/education.prev</div>
              <div className="absolute -top-3 right-11 bg-blue-600 px-1 text-sm">4</div>
              <div className="absolute -top-3 right-3 bg-blue-600 px-1 text-sm"> [<span className="text-green-400">&#8593;</span>]</div>
              <div className="font-mono p-2 text-yellow-300 selection:bg-cyan-400 h-full overflow-auto">
                <p className='my-4'>
                  Formación académica
                </p>
                <ul className='list-disc list-inside '>
                  <li>
                    Universidad peruana unión (UPeU) - Grado académico de Bachiller en Ingeniería de Sistemas.
                  </li>
                  <li>
                    Centro de Idiomas UPeU - nivel A1 y A2 Aprobados.
                  </li>
                </ul>

              </div>
            </div>

          </div>

        </div>

        {isContactOpen &&
          <Contact onClose={onContactToggle} />
        }

      </div>

      {/* Status Bar */}
      <StatusBar />

      {isOpen && <Popup onClose={toggle} experience={workExperience} />}
      {subMenuItem && subMenuItem.subMenuTitle === 'About' && <AboutPopup onClose={() => setSubMenuItem(null)} />}

    </div>

  )
}

export default App
