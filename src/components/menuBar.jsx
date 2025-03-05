import { useState } from "react";

export default function MenuBar() {
  const [showFileMenu, setShowFileMenu] = useState(false);

  const menuItems = [
    { title: 'File', key: 'F' },
    { title: 'Edit', key: 'E' },
    { title: 'Search', key: 'S' }
  ];

  const fileMenuItems = [
    { title: 'New', shortcut: 'F3' },
    { title: 'Open...', shortcut: 'F2' }
  ];

  return (<div className="flex items-center gap-1 px-2 py-1 bg-gray-300 border-b-2 border-gray-400 w-full">
    {menuItems.map((item, index) => (
      <button
        key={index}
        onClick={() => item.title === 'File' && setShowFileMenu(!showFileMenu)}
        className="px-2 hover:bg-blue-600 hover:text-white focus:outline-none"
      >
        <span className="text-red-600">{item.key}</span>
        {item.title.slice(1)}
      </button>
    ))}

    {showFileMenu && (
      <div className="absolute left-2 top-7 w-48 bg-gray-200 border-2 border-gray-400 shadow-lg z-50">
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
  </div>


  )
}