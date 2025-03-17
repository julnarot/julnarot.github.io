import { useTranslation } from "react-i18next";

export default function Contact({ onClose }) {
    const { t } = useTranslation();
    return (
        <div className="bg-green-300 p-2 text-white ">
            <div className="border-4 border-double text-white  relative w-full ">
                <div className="absolute -top-3 left-3 bg-green-300 px-1 text-sm cursor-pointer" onClick={onClose}> [<span className="text-green-400">&#9632;</span>]</div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-300 px-2 text-sm">{t('contactMe.title')}</div>
                <div className="absolute -top-3 right-11 bg-green-300 px-1 text-sm">1</div>
                <div className="absolute -top-3 right-3 bg-green-300 px-1 text-sm"> [<span className="text-green-400">&#8593;</span>]</div>
                <div className="font-mono p-2 pt-3 text-blue-600 selection:bg-cyan-400 h-full overflow-auto 
  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bluen-600 [&::-webkit-scrollbar-thumb]:bg-cyan-500">
                    <a href='https://linkedin.com/in/julnarot' target='_black' className="flex cursor-pointer font-bold no-underline hover:bg-green-600 hover:text-green-300">(🌏︎) Linkedin</a>
                    <a href='https://github.com/julnarot' target='_black' className="flex cursor-pointer font-bold no-underline hover:bg-green-600 hover:text-green-300">(🌏︎) Github</a>
                    <a href='https://x.com/julnarot' target='_black' className="flex cursor-pointer font-bold no-underline hover:bg-green-600 hover:text-green-300">(🌏︎) Twitter</a>
                    <a href='mailto:rauljhonatan.tola@gmail.com' target='_black' className="flex cursor-pointer font-bold no-underline hover:bg-green-600 hover:text-green-300">(@) Escribeme</a>
                </div>
            </div>
        </div>
    )
}