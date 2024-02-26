import React from 'react'

export default function Treecomp(props) {
  return (
    <div className="h-[95%] w-[95%] flex justify-center items-center flex-col">
            <div className="h-[90%] w-[90%] flex justify-center items-center flex-col">
                <div className="h-[15%] w-[80%] flex flex-col justify-center items-start gap-2">
                    <h1 className="text-5xl text-blue-700">Pick add-ons</h1>
                    <p className="text-gray-400">add on help enhance your game gaming experience</p>
                </div>
                <div className="h-[60%] w-[80%] flex justify-center items-start flex-col gap-5">
                    <div className='flex justify-between items-center w-[80%]'>
                      <input type="checkbox" defaultChecked className="checkbox" />
                      <div className='flex justify-start items-start flex-col w-[70%]'>
                        <h1>Online service</h1>
                        <p>Acces to multiplayers games</p>
                      </div>
                      <div>
                        <p>+10/yr</p>
                      </div>
                    </div>
                    <div className='flex justify-between items-center w-[80%]'>
                    <input type="checkbox" defaultChecked className="checkbox" />
                      <div className='flex justify-start items-start flex-col w-[70%]'>
                        <h1>Online service</h1>
                        <p>Acces to multiplayers games</p>
                      </div>
                      <div>
                        <p>+10/yr</p>
                      </div>
                    </div>
                    <div className='flex justify-between items-center w-[80%]'>
                    <input type="checkbox" defaultChecked className="checkbox" />
                      <div className='flex justify-start items-start flex-col w-[70%]'>
                        <h1>Online service</h1>
                        <p>Acces to multiplayers games</p>
                      </div>
                      <div>
                        <p>+10/yr</p>
                      </div>
                    </div>
                </div>

                <div className="h-[15%] w-[80%] flex justify-between items-end font-bold">
                    <button className="text-blue-950 h-11 w-28 rounded-xl border-blue-950" onClick={() => (props.setsecondvalue(true), props.settreevalue(false))}>BACK STEP</button>
                    <button className="text-white h-11 w-28 rounded-xl bg-blue-950" onClick={() => (props.settreevalue(false), props.settreevalue(true))}>NEXT STEP</button>
                </div>
              </div>
            </div>
        
  )
}
