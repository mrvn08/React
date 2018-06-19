import { createStore, combineReducers } from 'redux';
//Reducers
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    )

    return store;
};
