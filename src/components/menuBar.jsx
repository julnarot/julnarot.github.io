import { useState } from "react";

export default function MenuBar () {
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
  </div>)
}