//2 Types of Exporting in Webpack
//======================================
//Named exports
//======================================
// export const square = (x) => x * x;
// export const add = (a,b) => a + b;
//-----------------OR-------------------
// const square = (x) => x * x;
// const add = (a,b) => a + b;
// export { square, add };

//======================================
//Default export
//======================================
// const square = (x) => x * x;
// const add = (a,b) => a + b;
// const subtract = (a,b) => a - b;
// export { square, add, subtract as default };
//-----------------OR-------------------
// export const square = (x) => x * x;
// export const add = (a,b) => a + b;

// const subtract = (a,b) => a - b;
// export default subtract;
//-----------------OR-------------------
// export const square = (x) => x * x;
// export const add = (a,b) => a + b;

// export default (a,b) => a - b;
//You can only have one default export
//=====================================================================================
//Importing in webpack. (This is usually in another file)
//====================================================
// Importing basics
//====================================================
// import './utils.js'; //imports the js, executes it but doesnt grant access to anything
// import subtract, { square, add } from './utils.js'; //this on the other hand imports functions as well
// Note how subtract is imported because it was a default export
// Since subtract is default, it can be named anything you want as shown below
// import anythingIWant, { square, add } from './utils.js';
// console.log('app.js is running!!');

// console.log(square(4));
// console.log(add(4, 5));
// console.log(anythingIWant (2, 1));

//Challenge
// import isSenior, { isAdult, canDrink } from './person.js';

// console.log(canDrink(19));
// console.log(isAdult(18));
// console.log(isSenior(70));

//====================================================
//Importing Other Modules
//====================================================
// import validator from 'validator';
// console.log(validator.isEmail('test@gmail.com'));

//====================================================
//Importing React
//====================================================
// import React from 'react';
// import ReactDOM from 'react-dom';
