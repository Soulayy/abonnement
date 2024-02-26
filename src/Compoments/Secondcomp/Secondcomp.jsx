import {useState, useRef} from "react";
import "./Secondcomp.css";


export default function Secondcomp(props) {

    
    const [firstM, setFirstM] = useState(true)

    const [vfirst, setvfirst] = useState(9)
    const [v2first, setv2first] = useState(90)
    const [vsecond, setvsecondt] = useState(12)
    const [v2second, setv2second] = useState(120)
    const [vtree, setvtree] = useState(15)
    const [v2tree, setv2tree] = useState(150)
    


    const checkHandler = () => {
        setFirstM(!firstM)
        if (firstM) {
            if (vfirst == 9) {
                props.setmonny(9)
            } else if (vsecond == 12) {
                props.setmonny(12)
            } else if (vtree == 15) {
                props.setmonny(15)
            }
        } else if (!firstM) {
            if (v2first == 90) {
                props.setmonny(90)
            } else if (v2second == 120) {
                props.setmonny(120)
            } else if (v2tree == 150) {
                props.setmonny(150)
            }
        }
        
      }

    // function firststep() {
    //     if (firstM) {
    //         props.setmonny(9)
    //     } else if (firstM == false) {
    //         props.setmonny(90)
    //     }
    // }
      

    return (
        <div className="h-[95%] w-[95%] flex justify-center items-center flex-col">
            <div className="h-[90%] w-[85%] flex justify-center items-center flex-col">
                <div className="h-[15%] w-[80%] flex flex-col justify-center items-start gap-2">
                    <h1 className="text-5xl text-blue-700">Select your plan</h1>
                    <p className="text-gray-400">You have the option of montly or yearly biling</p>
                </div>
                <div className="divhover h-[50%] w-[80%] flex justify-center items-center gap-2">
                    <div onClick={() => (checkHandler, console.log(props.monny))} className="h-[60%] w-[40%] border-2 flex justify-around items-start flex-col p-3 rounded-xl">
                        <div className="h-[60%]">

                            <img src={props.Arcade} alt="" />
                        </div>
                        <h1>Arcade</h1>
                        <p>{
                            firstM == true ? `$${vfirst}/mo` : `$${v2first}/yr`
                        }</p>
                    </div>
                    <div onClick={() => (checkHandler, console.log(props.monny))} className="h-[60%] w-[40%] border-2 flex justify-around items-start flex-col p-3 rounded-xl">
                        <div className="h-[60%]">

                            <img src={props.Advanced} alt="" />
                        </div>

                        <h1>Advanced</h1>
                        <p>{
                            firstM == true ? `$${vsecond}/mo` : `$${v2second}/yr`
                        }</p>
                    </div>
                    <div onClick={() => (checkHandler, console.log(props.monny))} className="h-[60%] w-[40%] border-2 flex justify-around items-start flex-col p-3 rounded-xl">
                        <div className="h-[60%]">
                        
                            <img src={props.Pro} alt="" />

                        </div>

                        <h1>Arcade</h1>
                        <p>{
                            firstM == true ? `$${vtree}/mo` : `$${v2tree}/yr`
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
                <div className="h-[15%] w-[80%] flex justify-between items-end font-bold">
                    <button className="text-blue-950 h-11 w-28 rounded-xl border-blue-950" onClick={() => (props.setfirstvalue(true), props.setsecondvalue(false))}>BACK STEP</button>
                    <button className="text-white h-11 w-28 rounded-xl bg-blue-950" onClick={() => (props.setsecondvalue(false), props.settreevalue(true))}>NEXT STEP</button>
                </div>
            </div>
        </div>
    )
}
