import React from 'react'
import { useState,useEffect,useRef } from 'react'
const UseRefHook = () => {

    const [count,setCount] = useState(0);
    const curRef = useRef(0);
    const inpElem = useRef();

    // you already know the using useEffect.

    useEffect(()=>{
        curRef.current = curRef.current+1;
    });

    // useRef For selecting Dom Elem
    const btnH = () =>{
        // inpElem.current give me that dom element where useRef is currecntly atached using ref={}
        // so now you have dom Element you can apply any thing like css what your wish
        inpElem.current.style.background = "green";
    }


  return (
    <div>
        <button onClick={()=>(setCount((prev)=>prev-1))}>-</button>
        <h1>{count}</h1>
        <button onClick={()=>(setCount((prev)=>prev+1))}>+</button>
        <h1>Render Times : {curRef.current} </h1>


        <input className='border-black border-2' type="text" ref={inpElem} />
        <button onClick={btnH}>Click Here</button>

    </div>
  )
}

export default UseRefHook