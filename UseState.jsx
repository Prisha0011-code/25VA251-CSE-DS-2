import React, {UseState} from 'react'

function UseState() {
    const[color,setColor]=UseState('aqua');
    const mouseover=()=>{
       // setColor('purple');
       setColor(color=='aqua'?'purple':green)
    }
    //couter
    const[count,setCount]=UseState(0);
    const increament=()=>{
        setCount(count+1);
    }
    const decreament=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    
  return (
    <>
    <h1>UseState</h1>
    <p style={{color:'green'}} onMouseOver={mouseover}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Voluptates quis quo temporibus voluptatum quidem sint 
         exercitationem in ab, aspernatur veniam ipsa accusantium, at
          quaerat quasi harum consectetur amet deleniti maiores!</p>
          <div>
            <h2>{count}</h2>
            <button onClick={increament}>+</button>
            <button onClick={decreament}>-</button>
            <button>reset</button>
          </div>
    </>
  )
}

export default UseState