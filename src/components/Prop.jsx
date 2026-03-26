import React from 'react'
// you can also pass function as props
const Prop = (props) => {
  const {name} =  props; // like this you can also destructure the props  if you didn't want to use props.name during the rendering then you also do this
  return (
    // yaha prr maine props.name iss liye likha kyuki maine waha prr name pass kiya 
    // agar props bss pas karoge to wo ek object get hoga not is readalbe form
    <div className=' bg-gray-500 flex'>
        {/* single  chunks props you can pass many as key and value*/}
        <h1 className='text-white font-bold font-sans p-10'>My name is {props.name}.I am comming from where you have render me.</h1>
        <h1 className='text-white font-bold font-sans p-10'>My name is {name}.I am comming from where you have render me.</h1>

    </div>
  )
}

export default Prop;