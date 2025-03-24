import { useTranslation } from "react-i18next";
import Button from "../core/button";

export default function PopupLanguageSelector({ onClose, languageChanged}) {
    const { i18n } = useTranslation();
    const languages = [{ value: 'en', name: 'English' }, { value: 'es', name: 'Spanish' }]
    function languagesOnChange({ target }) {
        i18n.changeLanguage(target.value);
        languageChanged()
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 " aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden  bg-gray-400 dark:bg-zinc-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm shadow-[16px_23px_0px_-9px_rgba(0,_0,_0,_1)]">

                        <div className="flex-1  p-1 pt-2 text-white flex flex-col md:flex-row w-full h-full overflow-auto">

                            <div className="border-4 border-double border-white p-2  relative h-full w-full ">
                                <div className="absolute -top-3 left-3 bg-gray-400 dark:bg-zinc-800 px-1 text-sm cursor-pointer" onClick={onClose}> [<span className="text-green-400">&#9632;</span>]</div>
                                <div className="absolute -top-3 left-1/2 bg-gray-400 dark:bg-zinc-800 transform -translate-x-1/2  px-2 text-sm">Language</div>

                                <div className="font-mono px-1 pt-2 text-stone-950 selection:bg-cyan-400 flex flex-col ">

                                    <div className="mb-3 flex flex-col md:flex-row">
                                        <span className=" mr-2 dark:text-white"><span className="text-yellow-400 dark:text-cyan-500">L</span>anguages:</span>
                                        <ul className=" pl-2 text-white bold-text whitespace-nowrap  ">

                                            {languages.map(
                                                (lang, index) =>
                                                    <li key={index} className="inline-block">
                                                        <input type="radio" id={"opc-" + index} name="lang" checked={lang.value === i18n.language ? 'checked' : ''} value={lang.value} onChange={languagesOnChange} className="hidden peer" />
                                                        <label htmlFor={"opc-" + index} className="bg-blue-600 dark:bg-purple-900 after:content-['[_]'] peer-checked:after:content-['[✔]']  cursor-pointer mr-2">
                                                            {lang.name}
                                                        </label>
                                                    </li>
                                            )}

                                        </ul>
                                    </div>
                                    <div className="flex justify-center p-2">
                                        <Button value="Close" onClick={onClose} />
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}