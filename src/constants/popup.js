import AboutPopup from "../components/core/aboutPopup";
import PopupLanguageSelector from "../components/features/popupLanguageSelector";
import { trackEvent } from "../services/analytics";

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
        component: (lng) => {
            const fileName = lng && lng === 'es' ? 'Profile_es.pdf' : 'Profile.pdf'
            trackEvent('download_cv', { language: lng && lng === 'es' ? 'es' : 'en' })
            const a = document.createElement("a");
            a.href = `documents/${fileName}`;
            a.target = "_blank";
            a.click();
        }
    },
    {
        menuTitle: 'Preferences',
        subMenuTitle: 'Language',
        type: 'POPUP',
        component: PopupLanguageSelector
    },
];