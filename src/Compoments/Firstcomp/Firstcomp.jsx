import { useState } from "react";
import "./Firstcomp.css";

export default function Firstcomp(props) {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const nameChange = (event) => { 
        // 👇 Récupère la valeur d'entrée de "event" 
        setName(event.target.value); 
    }
    const emailChange = (event) => { 
        // 👇 Récupère la valeur d'entrée de "event" 
        setEmail(event.target.value); 
    }
    const phoneChange = (event) => { 
        // 👇 Récupère la valeur d'entrée de "event" 
        setPhone(event.target.value); 
    }
    return (
        <div className="h-[95%] w-[95%] flex justify-center items-center flex-col">
            <div className="h-[90%] w-[90%] flex justify-center items-center flex-col">
                <div className="h-[15%] w-[80%] flex flex-col justify-center items-start gap-2">
                    <h1 className="text-5xl text-blue-700">Personal info</h1>
                    <p className="text-gray-400">Please make provide your name, email adress, and phone number.</p>
                </div>
                <div className="h-[60%] w-[80%] flex justify-center items-start flex-col gap-5">
                    <p className="text-blue-800 font-bold">Your name is : {name}</p> 
                    <label className="w-[80%] input input-bordered flex items-center gap-2">
                        <input onChange={nameChange} type="text" className="grow" placeholder="Vingt.six" />
                    </label>
                    <p className="text-blue-800 font-bold">Your email is : {email}</p> 
                    <label className="w-[80%] input input-bordered flex items-center gap-2">
                    <input onChange={emailChange} type="text" className="grow" placeholder="vinght_six@email.com" />
                    </label>
                    <p className="text-blue-800 font-bold">Your phone number is : {phone}</p> 
                    <label className="w-[80%] input input-bordered flex items-center gap-2">
                        <input onChange={phoneChange} type="text" className="grow" placeholder="e.g+1 234 567 890" />
                    </label>
                </div>
                <div className="h-[15%] w-[50%] flex justify-end items-end">
                    <button className="text-white h-11 w-28 rounded-xl bg-blue-950" onClick={() => (props.setfirstvalue(false), props.setsecondvalue(true))}>NEXT STEP</button>
                </div>
            </div>
        </div>
    )
    }
