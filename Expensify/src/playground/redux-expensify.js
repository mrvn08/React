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
// Set Text Filter
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
store.dispatch(addExpense({ description: 'Coffee', note: 'It was delicious', amount: 100 }));

console.log(expenseOne);
store.dispatch(removeExpense({ id: expenseOne.expense.id }));


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