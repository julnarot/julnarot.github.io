import { useTranslation } from "react-i18next";

export default function Contact({ onClose }) {
    const { t } = useTranslation();
    return (
        <div className="bg-cyan-900 p-2 text-white dark:bg-purple-900 ">
            <div className="border-4 border-double text-white  relative w-full ">
                <div className="absolute -top-3 left-3 bg-cyan-400 dark:bg-purple-900 px-1 text-sm cursor-pointer" onClick={onClose}> [<span className="text-green-400">&#9632;</span>]</div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-400 dark:bg-purple-900 px-2 text-sm">{t('contactMe.title')}</div>
                <div className="absolute -top-3 right-11 bg-cyan-400 dark:bg-purple-900 px-1 text-sm">1</div>
                <div className="absolute -top-3 right-3 bg-cyan-400 dark:bg-purple-900 px-1 text-sm"> [<span className="text-green-400">&#8593;</span>]</div>
                <div className="p-2 pt-3 text-blue-600 dark:text-white selection:bg-cyan-600 h-full overflow-auto 
  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bluen-600 [&::-webkit-scrollbar-thumb]:bg-cyan-500">
                    <a href='https://linkedin.com/in/julnarot' target='_black' className="flex cursor-pointer font-bold no-underline hover:bg-lime-500  hover:text-white">(🌏︎) Linkedin</a>
                    <a href='https://github.com/julnarot' target='_black' className="flex cursor-pointer font-bold no-underline hover:bg-lime-500 hover:text-white">(🌏︎) Github</a>
                    <a href='https://x.com/julnarot' target='_black' className="flex cursor-pointer font-bold no-underline hover:bg-lime-500 hover:text-white">(🌏︎) Twitter</a>
                    <a href='mailto:rauljhonatan.tola@gmail.com' target='_black' className="flex cursor-pointer font-bold no-underline hover:bg-lime-500 hover:text-white">(@) Write me</a>
                </div>
            </div>
        </div>
    )
}