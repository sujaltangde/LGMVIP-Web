import {useState} from 'react'
 
import "../component/style.css"

const Calc = () => {

  const [calc,setcalc] = useState("")
  const [result,setResult] = useState("")

  const ops = ['/','*','+','-','.']

  const updateCalc = (value)=>{
    if( (ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1))) ){return ;}
    setcalc(calc+value)
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString()) ;
    }
  }

  const calculate = ()=>{
      setcalc(eval(calc).toString()) ;
    }


  return (
    <>


<div className="container">
        <div>
          {/* <div className="title">Calculator</div> */}
        <div className="dpBox">
            <div className="text">
              {result ? <span>({result})</span> : "" } &nbsp;
              {calc || 0 }
            </div>
             </div>
        <div className="opBox"> 
            <button onClick={()=>{updateCalc("/")}} ><div>/</div></button>
            <button onClick={()=>{updateCalc("*")}} ><div>*</div></button>
            <button onClick={()=>{updateCalc("-")}} ><div>-</div></button>
            <button onClick={()=>{updateCalc("+")}} ><div>+</div></button>
            <button onClick={()=>{setcalc("");setResult("")}} ><div>DEL</div></button>
        </div>

        <div className="calc grid">
           <button onClick={()=>{updateCalc("1")}} > <div>1</div></button>
            <button onClick={()=>{updateCalc("2")}} ><div>2</div></button>
            <button onClick={()=>{updateCalc("3")}} ><div>3</div></button>
            <button onClick={()=>{updateCalc("4")}} ><div>4</div></button>
            <button onClick={()=>{updateCalc("5")}} ><div>5</div></button>
            <button onClick={()=>{updateCalc("6")}} ><div>6</div></button>
            <button onClick={()=>{updateCalc("7")}} ><div>7</div></button>
            <button onClick={()=>{updateCalc("8")}} ><div>8</div></button>
            <button onClick={()=>{updateCalc("9")}} ><div>9</div></button>
            <button onClick={()=>{updateCalc("0")}} ><div>0</div></button>
            <button onClick={()=>{updateCalc(".")}} ><div>.</div></button>
           <button onClick={()=>{calculate()}} > <div>=</div></button>
        </div>
    </div>


    </div>

    
    
    </>
  )
}

export default Calc
