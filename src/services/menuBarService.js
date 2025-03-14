const MENU_DATA = [
    {
        title: 'File', key: 'F', opened: false, subMenuItems: [
            { title: 'New', shortcut: 'F3' },
            { title: 'Open', shortcut: 'F2' }
        ]
    },
    { title: 'Edit', key: 'E', opened: false, subMenuItems: [] },
    { title: 'Help', key: 'H', opened: false, subMenuItems: [{ title: 'About', shortcut: 'F9' }] },
];

const buildMenuDefaultItems = () => {
    return [...MENU_DATA].map(item => ({ ...item, opened: false }));
}
export const getMenuItemsService = () => {
    return [...buildMenuDefaultItems()];
}

export const getMenuItemsBySelectionService = (itemSelected) => {

    return getMenuItemsService().map(item => ({ ...item, opened: itemSelected.title === item.title }))
}
