export default function EditWindow({ children, windowTitle, windowNumber }) {
    return (
        <div className="border-4 border-double border-gray-400 dark:border-cyan-500 p-2 w-full h-full relative">
            <div className="absolute -top-3 left-3 bg-blue-600 dark:bg-zinc-900 px-1 text-sm dark:text-cyan-500"> [<span className="text-green-400">&#9632;</span>]</div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-zinc-900 px-2 text-sm text-yellow-300">{windowTitle}</div>
            <div className="absolute -top-3 right-11 bg-blue-600 dark:bg-zinc-900 px-1 text-sm dark:text-cyan-500">{windowNumber}</div>
            <div className="absolute -top-3 right-3 bg-blue-600 dark:bg-zinc-900 px-1 text-sm dark:text-cyan-500"> [<span className="text-green-400">&#8593;</span>]</div>
            <div className="p-2 text-yellow-300 selection:bg-cyan-400 h-full overflow-auto 
            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bluen-600 [&::-webkit-scrollbar-thumb]:bg-cyan-500">
                {children}
            </div>
        </div>
    );
}