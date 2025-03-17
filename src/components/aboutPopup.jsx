import Button from "./button";

export default function AboutPopup({ onClose }) {
    const version = '1.2.0'
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 " aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden  bg-gray-400 dark:bg-zinc-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md  shadow-[16px_23px_0px_-9px_rgba(0,_0,_0,_1)]">
                        <div className="flex-1  p-1 pt-2  flex flex-col md:flex-row ">
                            <div className="border-4 border-double border-white p-2  relative h-full w-full ">
                                <div className="absolute -top-3 left-1/2 bg-gray-400 dark:bg-zinc-800 transform -translate-x-1/2  px-2 text-sm text-white">About</div>
                                <div className="p-4 md:p-5 text-center  dark:text-white">
                                    <h3 className="mb-3 text-lg font-normal ">Borland prev++</h3>
                                    <p className="mb-1">Version {version}</p>
                                    <p className="mb-1">Copyright (c) {new Date().getFullYear()} by</p>
                                    <p className="mb-3">@Julnarot</p>

                                    <Button value="Ok" onClick={onClose} />
                                </div>





                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}