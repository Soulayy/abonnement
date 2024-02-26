import {useState, useRef} from "react";
import "./Secondcomp.css";


export default function Secondcomp(props) {



    
    const [firstM, setFirstM] = useState(true)

    const checkHandler = () => {
        setFirstM(!firstM)
      }

    return (
        <div className="h-[95%] w-[95%] flex justify-center items-center flex-col">
            <div className="h-[90%] w-[85%] flex justify-center items-center flex-col">
                <div className="h-[15%] w-[80%] flex flex-col justify-center items-start gap-2">
                    <h1 className="text-5xl text-blue-700">Select your plan</h1>
                    <p className="text-gray-400">You have the option of montly or yearly biling</p>
                </div>
                <div className="divhover h-[50%] w-[80%] flex justify-center items-center gap-2">
                    <div className="h-[60%] w-[40%] border-2 flex justify-around items-start flex-col p-3 rounded-xl">
                        <div className="h-[60%]">

                            <img src={props.Arcade} alt="" />
                        </div>
                        <h1>Arcade</h1>
                        <p>{
                            firstM == true ? "$9/mo" : "$90/yr"
                        }</p>
                    </div>
                    <div className="h-[60%] w-[40%] border-2 flex justify-around items-start flex-col p-3 rounded-xl">
                        <div className="h-[60%]">

                            <img src={props.Advanced} alt="" />
                        </div>

                        <h1>Advanced</h1>
                        <p>{
                            firstM == true ? "$12/mo" : "$120/yr"
                        }</p>
                    </div>
                    <div className="h-[60%] w-[40%] border-2 flex justify-around items-start flex-col p-3 rounded-xl">
                        <div className="h-[60%]">
                        
                            <img src={props.Pro} alt="" />

                        </div>

                        <h1>Arcade</h1>
                        <p>{
                            firstM == true ? "$15/mo" : "$150/yr"
                        }</p>
                    </div>
                </div>
                <div className="form-control w-[80%] bg-slate-500">
                    <label className="label cursor-pointer w-[90%] text-blue-950 font-bold">
                        <p>Monthly</p>
                        <input onChange={checkHandler} type="checkbox" className="toggle" value="false"/> 
                        <p>Yearly</p>

                    </label>
                </div>
                <div className="h-[15%] w-[80%] flex justify-between items-end">
                    <button className="text-white h-11 w-28 rounded-xl bg-blue-950" onClick={() => (props.setfirstvalue(true), props.setsecondvalue(false))}>BACK STEP</button>
                    <button className="text-white h-11 w-28 rounded-xl bg-blue-950" onClick={() => (props.setsecondvalue(false), props.settreevalue(true))}>NEXT STEP</button>
                </div>
            </div>
        </div>
    )
}
