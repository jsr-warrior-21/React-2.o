import React, { useState } from 'react';

const UseStateWIthArray = () => {
  const [num, setNum] = useState([]);
  
  const addHandler = (e) => {
    setNum([...num, e.target.value]);  
  };
  
  return (
    <div>
      <h1>[{num.join(', ')}]</h1>   
      <input 
        className='bg-amber-100 border-2 border-gray-500' 
        type="number" 
        onChange={addHandler} 
      />
    </div>
  );
};

export default UseStateWIthArray;