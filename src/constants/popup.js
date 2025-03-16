import AboutPopup from "../components/aboutPopup";

export const SUBMENU_ACTIONS = [
    {
        menuTitle: 'Help',
        subMenuTitle: 'About',
        type: 'POPUP',
        component: AboutPopup
    },
    {
        menuTitle: 'File',
        subMenuTitle: 'Print',
        type: 'LINK',
        component: () => {
            const a = document.createElement("a");
            a.href = "documents/Profile.pdf";
            a.target = "_blank";
            a.click();
        }
    }
];