import React, { useCallback, useState } from 'react'
import UseCallBackHelperFunction from './UseCallBackHelperFunction';

const UseCallBackHooks = () => {
    const [count,setCount] = useState(0);
    // const newFunc = () =>{}; // it cause re-rendering

    const newFunc = useCallback(()=>{},[]) // I have passed the function in useCallback --> read deeply in bottom comments


  return (
    <div>
        {/* Here I rendered the functional Component. -> UseCallBackHelperFunction
            which is re-render each time when when count is updating
            which is not good mounting of a function component on each re-rendering again and again
            that's why we use UseCallback hooks to prevent this.
        */}


            {/**
              isko sahi krne ke liye hai iss helper component ke ander jaa krr
              export ko "React.memo()" se wrap krr denge to ye dubara re-render hone prr
              iska re-rendering nahi hoga.
             */}

             {/**
               lets suppose mai iss mounted function me ek function as a prop
               pass krr raha hu tbb kya hoga.
               -> tbb again re-rendering start ho jayega 
               kyu-> kyuki jbb jbb re-rendering hoga tbb tbb newFunc banega
                aur tbb tbb prop pass hoga to component ka re-render to hoga hi.
                abb kya karu-> kuchh nahi jo function ko banaye ho usko useCallback
                ke ander daal do wo kya karega baar baar new function nahi banayega
                wo pahli baar bane function ko cache me store krr lega aur usee hi 
                on each render prr use karega. that's it.
              */}

        <UseCallBackHelperFunction newFunc={newFunc}/> 
        <h1>{count}</h1>
        <button onClick={()=>setCount((prev)=>prev+1)}>
            click here
        </button>
    </div>
  )
}

export default UseCallBackHooks