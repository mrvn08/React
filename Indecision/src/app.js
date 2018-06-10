import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
//Importing css - highly inefficient as it loads the css by loading this js first.
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

