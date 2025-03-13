import { useState } from "react";

export default function MenuBar() {
  const [showFileMenu, setShowFileMenu] = useState(false);

  const MENU_ITEMS = [
    {
      title: 'File', key: 'F', opened: false, subMenuItems: [
        { title: 'New', shortcut: 'F3' },
        { title: 'Open...', shortcut: 'F2' }
      ]
    },
    { title: 'Edit', key: 'E', opened: false, subMenuItems: [] },
    { title: 'Search', key: 'S', opened: false, subMenuItems: [] },
    { title: 'Help', key: 'H', opened: false, subMenuItems: [{ title: 'About', shortcut: 'F9' }] },
  ];
  const [menuItems, setmenuItems] = useState(MENU_ITEMS);


  const fileMenuItems = [
    { title: 'New', shortcut: 'F3' },
    { title: 'Open...', shortcut: 'F2' }
  ];

  const onMenuSelectItem = (itemSelected) => {
    setmenuItems([...MENU_ITEMS].map(mi => {
      mi.opened = itemSelected.title === mi.title;
      return mi;
    }))
  }

  return (<div className="flex items-center gap-1 px-2 py-1 bg-gray-300 border-b-2 border-gray-400 w-full">
    {menuItems.map((item, index) => (
      <div key={index}>

        <button

          onClick={() => onMenuSelectItem(item)}
          className="px-2 hover:bg-blue-600 hover:text-white focus:outline-none"
        >
          <span className="text-red-600">{item.key}</span>
          {item.title.slice(1)}




        </button>
        {item.opened && item.subMenuItems.length > 0 && (
          <div className="absolute top-7 w-48 bg-gray-200 border-2 border-gray-400 shadow-lg z-50">
            {item.subMenuItems.map((subItem, index) => (
              <div
                key={index}
                className="px-4 py-1 hover:bg-blue-600 hover:text-white cursor-pointer flex justify-between"
              >
                <span>
                  {subItem.title.split('').map((char, i) =>
                    char.toLowerCase() === 'n' || char.toLowerCase() === 'o' ||
                      char.toLowerCase() === 's' || char.toLowerCase() === 'c' ||
                      char.toLowerCase() === 'p' || char.toLowerCase() === 'd' ||
                      char.toLowerCase() === 'q' ?
                      <span key={i} className="text-red-600">{char}</span> : char
                  )}
                </span>
                {subItem.shortcut && (
                  <span className="ml-4 text-gray-600">{subItem.shortcut}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    ))}


  </div>


  )
}