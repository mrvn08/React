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
            });
        case 'SET_EXPENSE':
            return action.expenses;
        default:
            return state;
    }
};

export default expensesReducer;