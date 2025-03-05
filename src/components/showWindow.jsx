export default function ShowWindow({ children, titleWindow }) {
    return (
        <div className="border-4 border-double border-yellow-300 p-2 flex-auto relative h-full w-full  ">
            <div className="absolute -top-3 left-1/2 bg-gray-400 transform -translate-x-1/2 text-yellow-300 px-2 text-sm">{titleWindow}</div>
            <div className="font-mono p-2 text-stone-950 text-gray-500 selection:bg-cyan-400 h-64 max-h-full md:max-h-screen overflow-auto
            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bluen-600 [&::-webkit-scrollbar-thumb]:bg-gray-200">
                {children}
            </div>
        </div>
    )
}