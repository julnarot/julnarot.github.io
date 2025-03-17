import { useState, useEffect } from 'react'
import './App.css'
import Popup from './components/popup'
import { getWorkExperiencesGrouped } from './services/workExperienceService';
import MenuBar from './components/menuBar';
import StatusBar from './components/statusBar';
import Contact from './components/contact';
import AboutPopup from './components/aboutPopup';
import EditWindow from './components/editWindow';
import { findMenuActionBySubItem } from './services/menuBarService';
import { useTranslation } from 'react-i18next';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [workExperience, setWorkExperience] = useState(null);
  const [workExperiences, setWorkExperiences] = useState([]);
  const [subMenuItem, setSubMenuItem] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const workExperiencesGrouped = getWorkExperiencesGrouped();
    setWorkExperiences(workExperiencesGrouped);
  }, []);

  const onContactToggle = () => {
    setIsContactOpen(!isContactOpen)
  }

  const toggle = (workExperience) => {
    setIsOpen((isOpen) => !isOpen);
    setWorkExperience(workExperience);
  }

  const menuSelected = (subItemSelected) => {
    const menuAction = findMenuActionBySubItem(subItemSelected);
    if (menuAction.type === 'POPUP') {
      setSubMenuItem(menuAction)
    } else if (menuAction && menuAction.type === 'LINK') {
      menuAction.component()
    }
  }

  return (

    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Top Menu Bar */}
      <MenuBar onSubMenuSelected={menuSelected} />

      {/* Main Content */}
      <div className="flex-1 relative flex flex-col w-full h-full overflow-hidden">
        <div className="flex-1 bg-blue-600 dark:bg-zinc-900 p-4 text-white flex flex-col md:flex-row w-full h-full gap-2 overflow-auto">

          <div className='basis-1/2 relative h-full'>
            <EditWindow windowTitle="~/main.prev" windowNumber="2">
              <div className='my-4'>
                [<h1 className='cursor-pointer font-bold underline decoration-wavy inline' onClick={onContactToggle}>RAUL JONATAN</h1>] | <h2 className='inline'>Full stack engineering</h2>
              </div>
              <img src="https://avatars.githubusercontent.com/u/2840577?v=4" alt="@Julnarot" className='max-h-40' />
              <p className="my-4">
              {t('greeting')} Soy desarrollador de software con más de 7 años de experiencia en la construcción de plataformas web corporativas para distintos sectores empresariales.
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
            </EditWindow>
          </div>

          <div className="flex-1 text-white flex flex-col w-full gap-2">

            <EditWindow windowTitle="~/work-exp.prev" windowNumber="3">
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
            </EditWindow>

            <EditWindow windowTitle="~/education.prev" windowNumber="4">
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
            </EditWindow>

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
