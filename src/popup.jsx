export default function Popup({onClose}) {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div className="fixed inset-0 " aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

          <div className="relative transform overflow-hidden  bg-gray-300 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

            <div className="flex-1  p-4 text-white flex flex-col md:flex-row w-full h-full gap-2 overflow-auto">

              <div className="border-4 border-double border-white p-2  relative h-full w-full ">
                <div className="absolute -top-3 left-3 bg-gray-300 px-1 text-sm cursor-pointer" onClick={onClose}> [<span className="text-green-400">&#9632;</span>]</div>
                <div className="absolute -top-3 left-1/2 bg-gray-300 transform -translate-x-1/2  px-2 text-sm">title modal</div>
                
                <div className="font-mono p-2 text-stone-950 selection:bg-cyan-400 h-full overflow-auto">
                  <p className='my-4'>
                    Title
                  </p>
                  content

                </div>
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
  )
}