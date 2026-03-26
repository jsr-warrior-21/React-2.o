import React from 'react'

const MethodAsProps = (props) => {
  return (
    <div>
        <div>
        <h1 className='bg-yellow-400 pb-3'>There is a button towards bottom side.</h1>
        {props.button()} 
        {/* now you  are getting button as props but always you must have to call because it is coming as a method. */}
        </div>
    </div>
  )
}

export default MethodAsProps