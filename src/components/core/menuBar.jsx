import { useState } from "react";
import {
  getMenuItemsService,
  getMenuItemsBySelectionService,
} from "../../services/menuBarService";


export default function MenuBar({ onSubMenuSelected }) {
  const [subMenuItem, setSubMenuItem] = useState(null);


  const [menuItems, setMenuItems] = useState(getMenuItemsService());

  const onMenuSelectItem = (itemSelected) => {
    setMenuItems(getMenuItemsBySelectionService(itemSelected))
  }

  const onSubMenuClick = () => {
    onSubMenuSelected(subMenuItem);
    setMenuItems(getMenuItemsService);
  }

  return (<div className="flex items-center gap-1 px-2 py-1 bg-gray-300 dark:bg-blue-600 dark:text-yellow-400 border-b-2 border-gray-400 w-full">
    {menuItems.map((item, index) => (
      <div key={index}>

        <button
          onClick={() => onMenuSelectItem(item)} disabled={!item.active}
          className="px-2 enabled:hover:bg-blue-600 dark:enabled:hover:bg-purple-900 enabled:hover:text-white focus:outline-none disabled:opacity-50"
        >
          <span dangerouslySetInnerHTML={{ __html: item.title }}></span>

        </button>
        {item.opened && item.subMenuItems.length > 0 && (
          <div className="absolute top-7 w-48 bg-gray-200 dark:bg-blue-600 border-2 border-gray-400 shadow-lg z-50">
            {item.subMenuItems.map((subItem, index) => (
              <button
                key={index}
                disabled={!subItem.active}
                className="px-4 py-1 w-full active:hover:bg-blue-600 enabled:hover:text-white enabled:hover:bg-blue-600 dark:enabled:hover:bg-purple-900 flex justify-between disabled:opacity-50"
                onMouseEnter={() => setSubMenuItem(subItem)} onTouchStart={() => setSubMenuItem(subItem)} onClick={onSubMenuClick}>
                <span dangerouslySetInnerHTML={{ __html: subItem.titleInnerHTML }} />
                {subItem.shortcut && (
                  <span className="ml-4 text-gray-600 dark:text-yellow-400">{subItem.shortcut}</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    ))}

  </div>

  )
}