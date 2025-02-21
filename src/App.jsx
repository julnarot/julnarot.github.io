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
      <div className="border border-gray-400 p-2">I specialize in Node.js, utilizing Express for backend APIs and React for frontend UI.PostgreSQL and MongoDB are my go-to SQL and NoSQL databases, but I'm open to exploring others as well. I’m always keen on learning new technologies and falling in love with the process of mastering them.
        When I'm not coding, I love Surfing YouTube, always looking for content on gaming, PC building, and system customization. I also enjoy solving Rubik's cubes and sometimes tackling Sudoku.
        </div>
        <div className="border border-gray-400 p-2">I specialize in Node.js, utilizing Express for backend APIs and React for frontend UI.PostgreSQL and MongoDB are my go-to SQL and NoSQL databases, but I'm open to exploring others as well. I’m always keen on learning new technologies and falling in love with the process of mastering them.
        When I'm not coding, I love Surfing YouTube, always looking for content on gaming, PC building, and system customization. I also enjoy solving Rubik's cubes and sometimes tackling Sudoku.
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
