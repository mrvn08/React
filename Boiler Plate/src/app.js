import React from 'react';
import ReactDOM from 'react-dom';
//Importing normalize css so css is rendered more consistently across different browsers
import 'normalize.css/normalize.css';
//Importing css - highly inefficient as it loads the css by loading this js first.
import './styles/styles.scss';

ReactDOM.render(<h1>This is a boilerplate</h1>, document.getElementById('app'));

