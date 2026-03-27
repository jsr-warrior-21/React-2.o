import React, { useMemo, useState } from "react";

const UseMemoProblemSolution = () => {
  const [cube, SetCube] = useState(0);
  const [count, setCount] = useState(0);


  const cubeHandler = (val) => { 
    console.log("Run.")
    return Math.pow(val, 3);
  };
    // abb cubeHanlder function tbb run hoga jbb cube value change hogi nahi to nahi hoga 
    // useMemo function return a memoized value.
    // but when on mount it will run first time because of strict mode in main.jsx useMemo bhi run karega.
  const result = useMemo(() => cubeHandler(cube), [cube]);

  return (
    <div className="m-5">
      <h1>The Cube Of The Num : {result}</h1>
      <hr />
      <input
        type="number"
        value={cube}
        //value={cube} → Input mein HAMESHA cube state ki value dikhegi
        // User type kare → setCube() → cube update → input update!
        className="border-2 border-red-500"
        onChange={(e) => SetCube(e.target.value)}
      />
      <hr />
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default UseMemoProblemSolution;
