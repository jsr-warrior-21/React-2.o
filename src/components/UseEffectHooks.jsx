{/*
useEffect lets you handle tasks outside React's normal render cycle, like fetching data or setting up timers, without breaking your app's performance.
Core Problem It Solves
React components re-render often when state/props change,
but side effects (API calls, subscriptions) shouldn't run during rendering—
they cause bugs or infinite loops. useEffect delays them until after the screen updates safely
*/}
import React from 'react'
import { useEffect,useState } from 'react'
const UseEffectHooks = () => {

    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `You have clicked ${count} Times.`
    },[count]) // now kahi bhi change or page re-render ho lekin iske ander ka code tabhi chalega jbb count update hogi

    const onclickHandler = () =>{
        setCount((prev)=>prev+1);
    }
  return (
    <div>
        <h1>
            {count}
        </h1>
        <hr />
        <button onClick={()=>onclickHandler()}>
            +
        </button>
    </div>
  )
}

export default UseEffectHooks