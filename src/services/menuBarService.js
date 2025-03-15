import { MENU_DATA } from "../constants/menu";
import { SUBMENU_ACTIONS } from "../constants/popup";

const buildMenuDefaultItems = () => {
    const generateTitleInnerHTML = (title, positionKey) => {
        return title.split("").map((w, i) => {
            return i === positionKey ? `<span class='text-red-600'>${w}</span>` : w
        }).join("")
    }
    return [...MENU_DATA].map(item => {
        const positionKey = 0;
        return {
            ...item,
            opened: false,
            active: item.subMenuItems.length > 0,
            title: generateTitleInnerHTML(item.title, positionKey),
            subMenuItems: item.subMenuItems
                .map(subItem => ({
                    ...subItem,
                    titleInnerHTML: generateTitleInnerHTML(subItem.title, 0),
                    active: SUBMENU_ACTIONS.findIndex(sa => sa.menuTitle === item.title && sa.subMenuTitle === subItem.title) >= 0
                }))
        }
    });
}
export const getMenuItemsService = () => {
    return [...buildMenuDefaultItems()];
}

export const getMenuItemsBySelectionService = (itemSelected) => {
    return getMenuItemsService().map(item => ({ ...item, opened: itemSelected.title === item.title && itemSelected.opened===false }))
}
