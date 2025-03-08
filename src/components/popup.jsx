import Button from "./button";
import Input from "./input";
import ShowWindow from "./showWindow";



export default function Popup({ onClose, experience }) {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div className="fixed inset-0 " aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden  bg-gray-400 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg shadow-[16px_23px_0px_-9px_rgba(0,_0,_0,_1)]">


            <div className="flex-1  p-1 pt-2 text-white flex flex-col md:flex-row w-full h-full gap-2 overflow-auto">

              <div className="border-4 border-double border-white p-2  relative h-full w-full ">
                <div className="absolute -top-3 left-3 bg-gray-400 px-1 text-sm"> [<span className="text-green-400">&#9632;</span>]</div>
                <div className="absolute -top-3 left-1/2 bg-gray-400 transform -translate-x-1/2  px-2 text-sm">{experience.proyect}</div>

                <div className="font-mono px-1 pt-2 text-stone-950 selection:bg-cyan-400 flex flex-col">

                  <div className="mb-3 w-full">
                    <Input label="T. Empleo" value={experience.typeEmployment} />
                    <Input label="Modalidad" value={experience.modality} />
                    <Input label="Duración" value={experience.startDateStr + ' - ' + experience.endDateStr + ' (' + experience.duration + ')'} className="w-full" />
                  </div>
                  <div className="flex flex-col md:flex-row">

                    <ShowWindow titleWindow="Actividades">
                      <ul className='list-disc list-inside text-sm text-white'>
                        {experience.activities.map((activity, index) =>
                          <li key={index}>
                            {activity}
                          </li>
                        )}
                      </ul>
                    </ShowWindow>

                    <div className="px-2 w-32 flex-none ">
                      <span className="text-white">Tecnologías</span>
                      <div className="bg-green-100  h-64 overflow-y-auto px-2
                      [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bluen-600 [&::-webkit-scrollbar-thumb]:bg-cyan-500">
                        <ul className='list-none text-sm'>
                          {experience.tecnologies.map((tecno, i) =>
                            <li key={i}>[x] {tecno}</li>
                          )}
                        </ul>
                      </div>
                    </div>





                    <h3>Habilidades: </h3>
                    <ul className="grid w-full md:grid-cols-2">
                      <li>
                        <input type="radio" id="opc-a" name="hosting" value="opc-a" className="hidden peer" required />
                        <label htmlFor="opc-a" className="inline-flex  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-blue-700">
                          <div className="block">
                            <div className="w-full text-lg font-semibold">opc a</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="opc-b" name="hosting" value="opc-b" className="hidden peer" />
                        <label htmlFor="opc-b" className="inline-flex  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-blue-700">
                          <div className="block">
                            <div className="w-full text-lg font-semibold">opc b</div>
                          </div>
                        </label>
                      </li>
                    </ul>










                  </div>

                  <div className="flex justify-center p-2">
                    <Button value="Cerrar" onClick={onClose} />
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