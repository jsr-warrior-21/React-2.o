import { useState } from 'react'

const UseStateHookesCounter = () => {
    const [count,setCount] = useState(0);

    const increament = () =>{
        setCount((prev)=>prev+1);
    }

    const decreament = ()=>{
        setCount((prev)=>prev-1);
    }

    const reset = ()=>{
        setCount(0);
    }


  return (
    <div className='bg-amber-50 w-fit border-2 border-b-teal-500 flex flex-col items-center justify-center'>
        <h1 className='font-bold text-xl'>{count}</h1>
        <div className='flex flex-row gap-2 px-2 py-4'>
        <button onClick={()=>increament()}>+</button>
        <button onClick={()=>decreament()}>-</button>
        <button onClick={()=>reset()}>Reset</button>
        </div>
    </div>
  )
}

export default UseStateHookesCounter