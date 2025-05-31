export default function ShowWindow({ children, titleWindow }) {
  return (
    <div className="p-1 bg-blue-600 dark:bg-purple-900">
      <div className="border-4 border-double border-white-300 p-2 flex-auto relative h-full w-full">
        {titleWindow && (
          <div className="absolute -top-3 left-1/2 bg-gray-400 dark:bg-zinc-800 transform -translate-x-1/2 text-white-300 px-2 text-sm">
            {titleWindow}
          </div>
        )}
        <div
          className="p-2  selection:bg-blue-400  h-[98%] overflow-y-auto
            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bluen-600 [&::-webkit-scrollbar-thumb]:bg-cyan-500"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
