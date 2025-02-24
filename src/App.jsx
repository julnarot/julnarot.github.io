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
      <div className="flex-1 relative flex flex-col w-full h-full">
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


        <div className="flex-1 bg-blue-600 p-4 text-white flex flex-col w-full h-full gap-2 ">
          <div className="border-4 border-double border-gray-400 p-2 w-50 flex-auto relative  w-1/2">
            <div className="absolute -top-3 left-3 bg-blue-600 px-1 text-sm"> [<span className="text-green-400">&#9632;</span>]</div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 px-2 text-sm">main.txt</div>
            <div className="absolute -top-3 right-11 bg-blue-600 px-1 text-sm"> 4</div>
            <div className="absolute -top-3 right-3 bg-blue-600 px-1 text-sm"> [<span className="text-green-400">&#8593;</span>]</div>

            <div className="font-mono p-2 text-yellow-300 selection:bg-cyan-400">

              RAUL JONATAN | Full stack engineering
              <p className="my-4">
                Bienvenido a esta seccion de la web, aqui voy a compartir una parte  de mi en el plano tec
                en el que encontraras información acerca de mi, trabajos, experiencias, pasatiempos
                y cosas que tengo en comun con un coder al que le encanta explorar crear, unir componentes para dar vida a herramientas digitales como si de unir bloques de lego se trataran .
                <br />
                <br />Suelo enfocar mi atención en materializar ideas que puedan ayudar o simplificar alguna necesidad,<br />
                Busco, defino y planteo alternativas de mejora las veces que se requiera despues de todo siempre hay algo que hacer mejor cada día 
                <br />
                creo que soy bueno en la música especialmente cuando enciendo el Sintetizador e imagino que soy el gran: Carlos Trilha mientras intento modular frecuencias del modo que suene algo audible, disfruto la buena comida sin olvidar que lo 'bueno' es subjetivo y los paseos al aire libre  a pie o en bici me relajan y recargan como no te lo puedes imaginar!! ^_^</p>


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
