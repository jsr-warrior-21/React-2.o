import React from 'react'
import { useState } from 'react'
const Button = () => {
    const [name,setName] = useState('Unclicked !!');

    const onClickHandler = ()=>{
        setName((name==="Unclicked !!"?"Clicked !!":"Unclicked !!"));
    }

  return (
    <div>
        <button 
        className='bg-green-400 border-2 rounded-full m-2 p-2'
         onClick={onClickHandler}>
         {name}
         </button>
    </div>
  )
}

export default Button