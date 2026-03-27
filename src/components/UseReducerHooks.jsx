import React from 'react'
import { useReducer } from 'react'

const UseReducerHooks = () => {

    const initialState = {count:0}; // this is initial value of state as a object

    // this is reducer function which always take two parameter
    // 1. state -> current state of the state varriable count
    // 2. action -> this is action because in reducer function you can pass action in object which you can access easily using this func

    const reducer = (state,action) =>{
        switch(action.type){
            case 'increase' : {
                return {count : state.count + 1};
            }
            case 'decrease':{
                return {count : state.count - 1};
            }
        }
    }
    // isko hamesha yahi write krna hai
    // useReducer always take reducer(which is function) and initialState of varriable
    // useReducer return two value is an array 1.state 2.dispatch
    const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <div className='m-3'>
        <h1 className='p-10'>{state.count}</h1>
         <button className='p-2 m-1' onClick={()=>dispatch({type:'increase'})}>Inc</button>
         <button className='p-2 m-1' onClick={()=>dispatch({type:'decrease'})}>Disc</button>
         {/* You can also pass more action in dispatch as you want with payload */}
            {/* like this ----> */}
            <br />
            <input type="number" value={state.count}
             onChange={(e)=>dispatch({type:'input',payload:e.target.value})}
            />

    </div>
  )
}

export default UseReducerHooks