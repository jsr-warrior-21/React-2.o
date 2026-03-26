import React from 'react'

const WholeDomAsProps = (props) => {
  return (
    <div className='bg-red-500 flex'>
        {props.children}
    </div>
  )
}

export default WholeDomAsProps