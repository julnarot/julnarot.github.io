import { useState } from "react";
import Button from "./button";
import Input from "./input";
import ShowWindow from "./showWindow";



export default function Popup({ onClose, experience }) {
  const [skill, setSkill] = useState("");
  const skills = [...new Set([
    ...experience.activities.map(ac => ac.skills).flat(),
    ...experience.tecnologies.map(tec => tec.skills).flat()
  ])]
  function skillsOnChange({ target }) {
    setSkill(target.value)
  }
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div className="fixed inset-0 " aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden  bg-gray-400 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl  shadow-[16px_23px_0px_-9px_rgba(0,_0,_0,_1)]">


            <div className="flex-1  p-1 pt-2 text-white flex flex-col md:flex-row w-full h-full overflow-auto">

              <div className="border-4 border-double border-white p-2  relative h-full w-full ">
                <div className="absolute -top-3 left-3 bg-gray-400 px-1 text-sm cursor-pointer" onClick={onClose}> [<span className="text-green-400">&#9632;</span>]</div>
                <div className="absolute -top-3 left-1/2 bg-gray-400 transform -translate-x-1/2  px-2 text-sm">{experience.proyect}</div>

                <div className="font-mono px-1 pt-2 text-stone-950 selection:bg-cyan-400 flex flex-col ">

                  <div className=" flex  flex-wrap max-md:flex-col">
                    <Input label="Cliente" value={experience.departmentName} />

                    <Input label="T. Empleo" value={experience.typeEmployment} />

                    <Input label="Modalidad" value={experience.modality} />

                    <Input label="Duración" value={experience.startDateStr + ' - ' + experience.endDateStr + ' (' + experience.duration + ')'} className="w-full" />
                  </div>

                  <div className="mb-3 flex flex-col md:flex-row">
                    <span className=" mr-2"><span className="text-yellow-400">H</span>abilidades:</span>
                    <ul className=" bg-blue-600 pl-2 text-white bold-text whitespace-nowrap  overflow overflow-y-hidden
                    [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bluen-600 [&::-webkit-scrollbar-thumb]:bg-cyan-500">
                      <li className="inline-block py-1">
                        <input type="radio" id="opc-all" name="skill" checked={skill == '' ? 'checked' : ''} value="" onChange={skillsOnChange} className="hidden peer" />
                        <label htmlFor="opc-all" className="before:content-['(_)'] peer-checked:before:content-['(x)']  cursor-pointer  mr-2">
                          Todos
                        </label>
                      </li>
                      {skills.map(
                        (sk, index) =>
                          <li key={index} className="inline-block">
                            <input type="radio" id={"opc-" + index} name="skill" value={sk} onChange={skillsOnChange} className="hidden peer" />
                            <label htmlFor={"opc-" + index} className="before:content-['(_)'] peer-checked:before:content-['(x)']  cursor-pointer mr-2">
                              {sk}
                            </label>
                          </li>
                      )}

                    </ul>
                  </div>

                  <div className="flex flex-col md:flex-row">

                    <ShowWindow titleWindow="Actividades">
                      <ul className='list-disc list-inside text-sm text-white'>
                        {[...experience.activities].filter(f => skill ? f.skills.includes(skill) : true).map((activity, index) =>
                          <li key={index}>
                            {activity.name}
                          </li>
                        )}
                      </ul>
                    </ShowWindow>

                    <div className="px-2   ">
                      <span className="text-white">Tecnologías</span>
                      <div className="bg-green-100 h-[90%] overflow-y-auto px-2
                      [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bluen-600 [&::-webkit-scrollbar-thumb]:bg-cyan-500">
                        <ul className='list-none text-sm'>
                          {[...experience.tecnologies].filter(f => skill ? f.skills.includes(skill) : true).map((tec, i) =>
                            <li key={i}>[x] {tec.name}</li>
                          )}
                        </ul>
                      </div>
                    </div>

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