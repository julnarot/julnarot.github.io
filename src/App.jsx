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
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [workExperience, setWorkExperience] = useState(null);
  const [workExperiences, setWorkExperiences] = useState([]);
  const [subMenuItem, setSubMenuItem] = useState(null);

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
                {t('main.greeting')}
              </p>
              <p className="my-4">
                {t('main.professionalCareer')}
              </p>
              <p className="my-4">
                {t('main.specialty')}
              </p>
              <p className="my-4">
                {t('main.working')}
              </p>
            </EditWindow>
          </div>

          <div className="flex-1 text-white flex flex-col w-full gap-2">

            <EditWindow windowTitle="~/work-exp.prev" windowNumber="3">
              <p className='my-4'>
                {t('workExperience.title')}
              </p>
              <ul className='list-disc list-inside '>
                {workExperiences.map((item, index) => (
                  <li key={index}>
                    {t('workExperience.expItemCompany')}: {item.key} | {t('workExperience.expItemProjects')}: {item.values.map((exp, iexp) =>
                      <div key={iexp} className=' text-sm inline'>
                        [<a className="cursor-pointer font-bold underline decoration-wavy" onClick={() => toggle(exp)}>
                          {exp.proyect.toUpperCase()}
                        </a>]
                        {iexp < (item.values.length - 1) ? ' ' : ''}
                      </div>
                    )} | {t('workExperience.expItemDuration')}: {item.companyDuration}
                  </li>
                ))}
              </ul>
            </EditWindow>

            <EditWindow windowTitle="~/education.prev" windowNumber="4">
              <p className='my-4'>
                {t('academicTraining.title')}
              </p>
              <ul className='list-disc list-inside '>
                <li>
                  {t('academicTraining.universityName')} - {t('academicTraining.universityGrade')}
                </li>
                <li>
                  {t('academicTraining.languageInstituteName')} - {t('academicTraining.languageInstituteGrade')}
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
