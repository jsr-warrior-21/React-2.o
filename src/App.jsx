import React from "react";
import Prop from "./components/Prop";
import WholeDomAsProps from "./components/WholeDomAsProps";
import Button from "./components/Button";
import MethodAsProps from "./components/MethodAsProps";
import DataMappingFromJSON from "./components/DataMappingFromJSON";
import UseStateHookesCounter from "./components/UseStateHookesCounter";
import UseStateWithObject from "./components/UseStateWithObject";
import UseStateWIthArray from "./components/UseStateWIthArray";
const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
