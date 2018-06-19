import React from 'react';
import ReactDOM from 'react-dom';
//Routers
import AppRouter from './routers/AppRouter'
//Store
import configureStore from './store/configureStore';
//Actions
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
//Selectors
import getVisibleExpenses from './selectors/expenses';
//Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: "Water bill", amount: 12300, createdAt: 0 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 4560, createdAt: -2000 }));
store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));

console.log(store.getState());

//Switch goes into each route, if it finds a match it exits. This prevents the 404 from appearing all the time
ReactDOM.render(<AppRouter />, document.getElementById('app'));

