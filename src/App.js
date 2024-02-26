import { useRef, useState } from 'react';
import './App.css';
import Firstcomp from './Compoments/Firstcomp/Firstcomp';
import Secondcomp from './Compoments/Secondcomp/Secondcomp';
import Treecomp from './Compoments/Treecomp/Treecomp';


import Arcade from "./img/img_form/icon-arcade.svg"
import Advanced from "./img/img_form/icon-advanced.svg"
import Pro from "./img/img_form/icon-pro.svg"


function App() {

  let myfirst = useRef(null);
  let mysecond = useRef(null);
  let mytree = useRef(null);
  let myfour = useRef(null);

  const [firstvalue, setfirstvalue] = useState(true)
  const [secondvalue, setsecondvalue] = useState(false)
  const [treevalue, settreevalue] = useState(false)
  const [fourvalue, setfourvalue] = useState(false)

  return (
    <div className="App h-screen w-screen bg-blue-400 flex justify-center items-center">
      <div className='h-[85%] w-[65%]  flex'>
        <div className="sid h-[100%] w-[30%] rounded-xl">
          <ul className="steps steps-vertical h-[50%] ">
              <li ref={myfirst} className="step step-primary">YOUR INFO </li>
              <li ref={mysecond} className="step">SELECT PLAN</li>
              <li ref={mytree} className="step">ADD-ONS</li>
              <li ref={myfour} className="step">SUMMARY</li>
          </ul>
        </div>
          {
            firstvalue == true ? <div className="h-[100%] w-[70%] bg-white rounded-xl flex justify-center items-center flex-col">
            <Firstcomp setfirstvalue={setfirstvalue} setsecondvalue={setsecondvalue}></Firstcomp> </div> :""
          }
          {
            secondvalue == true ?  <div className="h-[100%] w-[70%] bg-white rounded-xl flex justify-center items-center flex-col"> <Secondcomp Arcade={Arcade} Pro={Pro} Advanced={Advanced} setsecondvalue={setsecondvalue} setfirstvalue={setfirstvalue} settreevalue={settreevalue}></Secondcomp> </div> : ""
          }
          {
            treevalue == true ? <div className="h-[100%] w-[70%] bg-white rounded-xl flex justify-center items-center flex-col"> <Treecomp setsecondvalue={setsecondvalue} setfirstvalue={setfirstvalue} settreevalue={settreevalue}></Treecomp> </div>: ""
          }
        </div>
      </div>
    
  );
}

export default App;
