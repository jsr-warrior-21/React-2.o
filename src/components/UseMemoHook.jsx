import React from 'react'
import { useState } from 'react'
const UseMemoHook = () => {
    const [cube,SetCube] = useState(0);
    const [count,setCount] = useState(0);
      // ye function hrr ek re-render prr wapas chal rha hai aur cube calculate krr raha hai
      // issi problem ko hatane ke liye hum useMemo ka use krte hai.
    const cubeHandler = (val) =>{
      console.log("CubeCalculator.")
        SetCube(Math.pow(val,3));
    }
    
  return (
    <div className='m-5'>
        <h1>The Cube Of The Num : {cube}</h1>
        <hr />
        <input 
        type="number"
        className='border-2 border-red-500'
        onChange={(e)=>cubeHandler(Number(e.target.value))} />
        <hr />
        <h2>{count}</h2>
        <button onClick={()=>setCount((prev)=>prev+1)}>+</button>

    </div>
  )
}

export default UseMemoHook