import { useState } from "react";
import {
  getMenuItemsService,
  getMenuItemsBySelectionService,
} from "../services/menuBarService";


export default function MenuBar({ onSubMenuSelected }) {
  const [subMenuItem, setSubMenuItem] = useState(null);


  const [menuItems, setMenuItems] = useState(getMenuItemsService());

  const onMenuSelectItem = (itemSelected) => {
    setMenuItems(getMenuItemsBySelectionService(itemSelected))
  }

  const onSubMenuClick = () => {
    onSubMenuSelected(subMenuItem);
    setMenuItems(getMenuItemsService)
  }

  return (<div className="flex items-center gap-1 px-2 py-1 bg-gray-300 border-b-2 border-gray-400 w-full">
    {menuItems.map((item, index) => (
      <div key={index}>

        <button
          onClick={() => onMenuSelectItem(item)} disabled={!item.active}
          className="px-2 enabled:hover:bg-blue-600 enabled:hover:text-white focus:outline-none disabled:opacity-50"
        >
          <span dangerouslySetInnerHTML={{__html: item.title}}></span>

        </button>
        {item.opened && item.subMenuItems.length > 0 && (
          <div className="absolute top-7 w-48 bg-gray-200 border-2 border-gray-400 shadow-lg z-50">
            {item.subMenuItems.map((subItem, index) => (
              <div
                key={index}
                className="px-4 py-1 hover:bg-blue-600 hover:text-white cursor-pointer flex justify-between" onMouseEnter={() => setSubMenuItem(subItem.title)} onClick={onSubMenuClick}
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