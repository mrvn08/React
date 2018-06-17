import { createStore } from 'redux';

//==========================================
//Reducers
//==========================================
// - How states are changed inside the store
// 1. Pure functions. Output determined entirely by input. Doesn't rely on any outside variables
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return { 
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return { 
                count: state.count - action.decrementBy
            };
        case 'SET':
            return { 
                count: action.count
            };
        case 'RESET':
            return { 
                count: 0
            };
        default:
            return state;
        //Note how I used state.count + 1 and not ++. Since ++ adds to the previous state.
        //In this one we're taking the prevstate, adding one, then assigning it to the current count
    }      
};

//==========================================
//Store
//==========================================

//Default inside function param;
const store = createStore(countReducer);

//=======================================
//Store Subscribe/Unsubscribe
//=======================================
//Gets called every time the store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//unsubscribe();
//calling this unsubscribes the watched state.

//=======================================
//Actions
//=======================================
//To change state we need to use redux Actions
//Actions - an object that gets sent to the store
//Note how actions are 'CAPITALIZED' this is a convention
// On dispatch, createStore gets called with the object inside as the 2nd argument as 'action'

//Increment
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});
//Increment with dynamic value

//Decrement
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
});

store.dispatch({
    type: 'SET',
    count: 101
});

//---------------------------------------
//Action Generators
//---------------------------------------
//- These are functions that return action objects

const incrementCount = ({ incrementBy = 1 }) => ({
    type: 'INCREMENT',
    incrementBy
});

store.dispatch(incrementCount({ incrementBy: 12 }));
//this makes it so errors are easier to catch, not to mention referencing it like this makes
//things much simpler

//Note how I'm using destructured objects to setup defaults

const decrementCount = ({ decrementBy = 1}) => ({
    type: 'DECREMENT',
    decrementBy
});

store.dispatch(decrementCount({ decrementBy: 100 }));

//Challenge
//--------------------------------------
const resetCount = () => ({
    type: 'RESET'
});

store.dispatch(resetCount());

const setCount = ({ count = store.getState().count }) => ({
    type: 'SET',
    count
});

store.dispatch(setCount({ count: 123 }));
store.dispatch(setCount({}));
