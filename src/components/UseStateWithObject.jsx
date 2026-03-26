import React from "react";
import { useState } from "react";
const UseStateWithObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleFirstName = (e) => {
    setName({ ...name, firstName: e.target.value });
  };
    const handleLastName = (e) => {
    setName({ ...name, lastName: e.target.value });
  };
  return (
    <div className="m-5 bg-gray-400">
      <h1>Your FirstName : {name.firstName}</h1>
      <h1>Your LastName : {name.lastName}</h1>
      <input className="border-zinc-950 border-2" type="text" name="firstName" onChange={handleFirstName} />
      <input className="border-zinc-950 border-2" type="text" name="lastName" onChange={handleLastName} />
    </div>
  );
};

export default UseStateWithObject;
