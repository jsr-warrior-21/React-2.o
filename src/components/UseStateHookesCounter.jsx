import { useState } from 'react'


// 1. State MEMORY mein store karta hai
// 2. Component re-render trigger karta hai
// 3. Purana value yaad rakhta hai
// React internally:
// ✅ Hook order track karta hai (index 0,1,2...)
// ✅ Component ke beech state save karta hai
// ✅ setState ko queue mein daal deta hai
// ✅ Batching karta hai (multiple updates ek saath)
// ✅ Re-render schedule karta hai

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