import React from "react";
import { useContext,createContext } from "react";

// creating UserContext

const UserContext = createContext();



import Prop from "./components/Prop";
import WholeDomAsProps from "./components/WholeDomAsProps";
import Button from "./components/Button";
import MethodAsProps from "./components/MethodAsProps";
import DataMappingFromJSON from "./components/DataMappingFromJSON";
import UseStateHookesCounter from "./components/UseStateHookesCounter";
import UseStateWithObject from "./components/UseStateWithObject";
import UseStateWIthArray from "./components/UseStateWIthArray";
import UseEffectHooks from "./components/UseEffectHooks";
import UseEffectWithCleanUpFunction from "./components/useEffectWithCleanUpFucntion";
import UseContextHooks from "./components/UseContextHooks";
import UseRefHook from "./components/UseRefHook";
import UseMemoHook from "./components/UseMemoHook";
import UseMemoProblemSolution from "./components/UseMemoProblemSolution";
import UseCallBackHooks from "./components/UseCallBackHooks";
import UseReducerHooks from "./components/UseReducerHooks";


const App = () => {
  return (
    <div className="m-10">
      <Prop name="Propy" />
      <WholeDomAsProps>
        <h1>I am Dom as a Props.</h1>
      </WholeDomAsProps>
      {/* <Button/> */}
      <MethodAsProps button={Button}/>
      {/* --> passing Button components as a props in the methodAsProp components */}
      <DataMappingFromJSON/>
      <UseStateHookesCounter/>  
      <UseStateWithObject/>
      <UseStateWIthArray/>
      <UseEffectHooks/>
      <UseEffectWithCleanUpFunction/>

      {/* wrap parent component by UserContext.Provider  and Passing Props*/}
      {/* UseContext me props hamesha value hona chahiye uske alawa kuchh nahi */}
      <UserContext.Provider value="I'm Arvind.">
      <UseContextHooks/>
      </UserContext.Provider>

      <UseRefHook/>
      <UseMemoHook/>
      <UseMemoProblemSolution/>
      <UseCallBackHooks/>

      <UseReducerHooks/>

    </div>
  );
};

export {UserContext}; // You Must have to export UserContext also
export default App;
