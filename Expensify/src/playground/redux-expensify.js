import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Add Expense
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt 
    }
})

// Remove Expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Edit Expense
const editExpense = ( id = "", updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// Set Text Filter
const setTextFilter = ( text = "" ) => ({
    type: 'SET_TEXT',
    text
});
// Sort by date
// Sort by amount
// Set start date
// Set end date

//Expenses Reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            //return state.concat(action.expense);
            //Notice how we didnt alter the state. 
            //Again, concat returns a new array with the new value pushed. 
            //We could also use the spread operator like so
            return [...state, action.expense];
            //Or we can put it in the back 
            //return [action.expense, ...state];
        case 'REMOVE_EXPENSE':
            return  state.filter((singleExpense) => singleExpense.id != action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
}

//Store Creation with combineReducers

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

//Here you can see I'm assigning the reducer to the appropriate state it's going to manage
store.subscribe(() => {
    console.log(store.getState());
});

//Calling the actions
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', note: 'It was delicious', amount: 100 }));

console.log(expenseOne);
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense( expenseTwo.expense.id, { amount: 800 }));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());



const demoState = {
    expenses: [{
        id: 'asdadqwqsdasdqwdqsd',
        description: 'January Rent',
        note: 'Final Payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent', //search description with the text
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

//In this scenario it is best to split the reducers and use Combine Reducers

const user  = {
   name: 'Jen',
   age: 26   
};

console.log({
    ...user,
    location: 'Philadelphia',
    age: 27
});

//Note that this is acheived with babel plugin transform object rest spread
//location is added and age is overriden, unless it's put before the spread operator

console.log({
    age: 27,
    ...user,
    location: 'Philadelphia',
});
