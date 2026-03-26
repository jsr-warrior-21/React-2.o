// like this you can also use Filter Reduce function for your work purpose

import React from 'react'
import Content from '../assets/users.json'
// in JSON file there is no need to exporting it will be handle in behind
// jbb bhi map use karenge dynamically to curley brace ke ander karenge kyuki wo ek varriable hai at that time
const DataMappingFromJSON = () => {
  return (
    <div>
        {Content.map((user)=>{
            return <div key={user.id} className='w-fit bg-blue-400 text-black border-2 border-black py-4 px-2 m-2 flex flex-1 justify-center items-center flex-col'>
                <h1>{user.name} - {user.email}</h1>
                <span>{user.status}</span>
             </div>
        })}
        
    </div>
  )
}

export default DataMappingFromJSON