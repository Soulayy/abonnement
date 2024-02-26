import React from 'react'

export default function Treecomp() {
  return (
    <div className="h-[95%] w-[95%] flex justify-center items-center flex-col">
            <div className="h-[90%] w-[90%] flex justify-center items-center flex-col">
                <div className="h-[15%] w-[80%] flex flex-col justify-center items-start gap-2">
                    <h1 className="text-5xl text-blue-700">wayawwwwwwwwwwwwwwwwwwwwwwwwww</h1>
                    <p className="text-gray-400">Please make provide your name, email adress, and phone number.</p>
                </div>
                <div className="h-[60%] w-[80%] flex justify-center items-start flex-col gap-5">
                    <p className="text-blue-800 font-bold">Your name is : </p> 
                    <label className="w-[80%] input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Vingt.six" />
                    </label>
                    <p className="text-blue-800 font-bold">Your email is : </p> 
                    <label className="w-[80%] input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="vinght_six@email.com" />
                    </label>
                    <p className="text-blue-800 font-bold">Your phone number is : </p> 
                    <label className="w-[80%] input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="e.g+1 234 567 890" />
                    </label>
                </div>
                <div className="h-[15%] w-[50%] flex justify-end items-end">
              </div>
            </div>
        </div>
  )
}
