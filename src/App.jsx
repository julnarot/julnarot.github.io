import { useState } from 'react'
import './App.css'

function App() {
  const [showFileMenu, setShowFileMenu] = useState(false);

  const menuItems = [
    { title: 'About', key: 'A' },
    { title: 'Experience', key: 'E' },
    { title: 'Contact', key: 'C' }
  ];

  const fileMenuItems = [
    { title: 'New', shortcut: 'F3' },
    { title: 'Open...', shortcut: 'F2' }
  ];
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
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 px-2 text-sm">github.julnarot/skills.prev</div>
            <div className="absolute -top-3 right-11 bg-blue-600 px-1 text-sm"> 4</div>
            <div className="absolute -top-3 right-3 bg-blue-600 px-1 text-sm"> [<span className="text-green-400">&#8593;</span>]</div>
            <div className="font-mono p-2 text-yellow-300 selection:bg-cyan-400 h-full overflow-auto">
              <p className='my-4'>
                Tecnologías y habilidades:
              </p>
              <ul className='list-disc list-inside'>
                <li>JavaScript (ES6+), TypeScript</li>
                <li>React, Next.js</li>
                <li>Node.js, Express.js</li>
                <li>SQL, NoSQL (MongoDB, PostgreSQL)</li>
                <li>Docker, Kubernetes</li>
                <li>CI/CD con Azure DevOps</li>
              </ul>
            </div>
          </div>

        </div>

      </div>

      {/* Status Bar */}
      <div className="bg-gray-300 px-2 py-1 border-t-2 border-gray-400 flex justify-between text-sm w-full">
        <div>1:1</div>
        <div>F1 Help | Create a new file in a new Edit window</div>
      </div>
    </div>
  )
}

export default App
