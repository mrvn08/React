import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//Switch goes into each route, if it finds a match it exits. This prevents the 404 from appearing all the time
ReactDOM.render(<AppRouter />, document.getElementById('app'));

