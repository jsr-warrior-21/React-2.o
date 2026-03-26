import { useState, useEffect } from "react";

const useEffectWithCleanUpFucntion = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mouseHandlerFunction = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseHandlerFunction);
    return () => {
      window.removeEventListener("mousemove", mouseHandlerFunction);
    };
  }, []); // will run only once only on first rendering

  return (
    <div>
      X :- {x}
      <hr />Y :- {y}
    </div>
  );
};

export default useEffectWithCleanUpFucntion;
