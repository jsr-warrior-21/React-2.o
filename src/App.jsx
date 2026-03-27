import React from "react";
import { useContext,createContext } from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./ReactRouter/Home";
import About from "./ReactRouter/About";
import Contact from "./ReactRouter/Contact";
import Navbar from "./ReactRouter/Navbar";
import NoMatch from "./ReactRouter/NoMatch";
import Featured from "./ReactRouter/Featured";
import New from "./ReactRouter/New";
import UserProfile from "./ReactRouter/UserProfile";

// lazy Loading

const LazyContact = React.lazy(()=>import('./ReactRouter/Contact.jsx'))

// creating UserContext

const UserContext = createContext();



// import Prop from "./components/Prop";
// import WholeDomAsProps from "./components/WholeDomAsProps";
// import Button from "./components/Button";
// import MethodAsProps from "./components/MethodAsProps";
// import DataMappingFromJSON from "./components/DataMappingFromJSON";
// import UseStateHookesCounter from "./components/UseStateHookesCounter";
// import UseStateWithObject from "./components/UseStateWithObject";
// import UseStateWIthArray from "./components/UseStateWIthArray";
// import UseEffectHooks from "./components/UseEffectHooks";
// import UseEffectWithCleanUpFunction from "./components/useEffectWithCleanUpFucntion";
// import UseContextHooks from "./components/UseContextHooks";
// import UseRefHook from "./components/UseRefHook";
// import UseMemoHook from "./components/UseMemoHook";
// import UseMemoProblemSolution from "./components/UseMemoProblemSolution";
// import UseCallBackHooks from "./components/UseCallBackHooks";
// import UseReducerHooks from "./components/UseReducerHooks";
// import UseLayoutEffectHooks from "./components/UseLayoutEffectHooks";

// React-Router-Dom


const App = () => {
  return (
    <div className="min-h-screen bg-amber-300 px-4 py-2">


      {/* <Prop name="Propy" /> */}
      {/* <WholeDomAsProps>
        <h1>I am Dom as a Props.</h1>
      </WholeDomAsProps> */}


      {/* <Button/> */}


      {/* <MethodAsProps button={Button}/> */}

      {/* --> passing Button components as a props in the methodAsProp components */}

      {/* <DataMappingFromJSON/>
      <UseStateHookesCounter/>  
      <UseStateWithObject/>
      <UseStateWIthArray/>
      <UseEffectHooks/>
      <UseEffectWithCleanUpFunction/> */}

      {/* wrap parent component by UserContext.Provider  and Passing Props*/}
      {/* UseContext me props hamesha value hona chahiye uske alawa kuchh nahi */}
      


      {/* <UserContext.Provider value="I'm Arvind.">
      <UseContextHooks/>
      </UserContext.Provider>

      <UseRefHook/>
      <UseMemoHook/>
      <UseMemoProblemSolution/>
      <UseCallBackHooks/>
      <UseReducerHooks/>
      <UseLayoutEffectHooks/> */}




{/* React Router Handling starts from here.
    -> You Have to import Routes and for all component of you webapp Route will make here 
    -> Inside the Routes
    -> upper ke jo hai wo bss as learning ke liye component hai wo bhi Routes ke ander hi rahte hai
*/}

{/**
 *  path - kaha prr component ko mount krna hai.
 *  element - kis component ko mount krna hai.
 */}


<Navbar/>
<Routes>

<Route path="/" element={<Home/>}> 
  <Route path='/featured' element={<Featured/>}/>
  <Route path = '/new' element={<New/>}/>
  {/* agar mai child ka path hata krr path='new' ki jagah only index word use krta hu
  to jyo hi mai parent componet ko open karunga ye child apne aap open ho jayega. */}
</Route>

<Route path="/about" element={<About/>}/>


 {/* for lazy loading */}

<Route path="/contact" element={
  <React.Suspense fallback="Loading...">
                <LazyContact/>
              </React.Suspense>
  }/>

 {/* for undefined Route - direct to a page and show error */}

<Route path="*" element={<NoMatch/>} />

{/* Dynamic Routes */}

 <Route path="/user/:userId" element={<UserProfile />} />

</Routes>



















    </div>
  );
};

export {UserContext}; // You Must have to export UserContext also
export default App;
