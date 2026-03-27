import React from "react";
import { useEffect, useLayoutEffect } from "react";

const UseLayoutEffectHooks = () => {
  useEffect(() => {
    console.log("I am useEffect.");
  }, []); // for running only once

  useLayoutEffect(() => {
    console.log("I am useLayoutEffect.");
  }, []); // for running only once

  // I have write both state in which first one is useEffect then uselayoutEffect
  // what do you think - which one will run first ? - useEffect ---> No
  // here uselayoutEffect will run first then after running dom elem means (hi) then useEffect will run
  // uselayoutEffect - before mount
  // useEffect - after mount

  return (
    <div>
      <h1>Hii</h1>
    </div>
  );
};

export default UseLayoutEffectHooks;
