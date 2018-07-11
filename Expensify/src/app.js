import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//Routers, History
import AppRouter, { history } from './routers/AppRouter'
//Store
import configureStore from './store/configureStore';
//Actions
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
//Selectors
import getVisibleExpenses from './selectors/expenses';
//Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
//Firebase
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

// Susbcribing to dummy data calls
// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// Dummy data
// store.dispatch(addExpense({ description: "Water bill", amount: 4500, createdAt: 0 }));
// store.dispatch(addExpense({ description: "Gas bill", amount: 1000, createdAt: -2000 }));
// store.dispatch(addExpense({ description: "Rent", amount: 109500, createdAt: -3000 }));

// setTimeout(() => { store.dispatch(setTextFilter("bill")); }, 3000)

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

//Switch goes into each route, if it finds a match it exits. This prevents the 404 from appearing all the time
firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});