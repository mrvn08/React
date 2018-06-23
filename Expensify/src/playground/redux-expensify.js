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
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

// Sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

// Set start date
const setStartDate = ( startDate = undefined ) => ({
    type: 'SET_START_DATE',
    startDate
});

// Set end date
const setEndDate = ( endDate = undefined ) => ({
    type: 'SET_END_DATE',
    endDate
});

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
            return  state.filter(({id}) => id != action.id );

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
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
}

//Timestamps (Milliseconds)
// January 1st 1970 (unix epoch)
//33400, 10, -203

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.match(RegExp(text, 'i'));

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy == 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy == 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

//Store Creation with combineReducers

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
//Here you can see I'm assigning the reducer to the appropriate state it's going to manage

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

//Calling the actions
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', note: 'It was delicious', amount: 200, createdAt: -1000}));
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 , createdAt: -21000}));

// console.log(expenseOne);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 800 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
console.log("Sort By Amount");
store.dispatch(sortByAmount());

console.log("Sort By Date");
store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());//undefined
// store.dispatch(setEndDate(2000));
// store.dispatch(setEndDate());//undefined
// store.dispatch(setTextFilter('cof'));

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

// const user  = {
//    name: 'Jen',
//    age: 26   
// };

// console.log({
//     ...user,
//     location: 'Philadelphia',
//     age: 27
// });

// //Note that this is acheived with babel plugin transform object rest spread
// //location is added and age is overriden, unless it's put before the spread operator

// console.log({
//     age: 27,
//     ...user,
//     location: 'Philadelphia',
// });
