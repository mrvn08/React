//=================================
//JavaScript
//=================================
// var nameVar = 'Andrew';
// var nameVar = "Mike"; //redefine is valid
// console.log('nameVar', nameVar);
/* this works which is why you do not want to use var, can cause some serious trouble on 
   large applications where there are a ton of variables used.*/

//=================================
//ES6
//=================================
// let nameLet = 'Jen';
// let nameLet = 'Julie'; //redefine is invalid
// console.log ('nameLet', nameLet);
// this on the other hand will not work!

// const nameConst = 'Frank';
// const nameConst = 'Gunther'; //redefine is invalid
// console.log ('nameConst', nameConst);
// this won't either!

// const nameConst = 'Frank';
// nameConst = 'Gunther'; //redefine is invalid
// console.log ('nameConst', nameConst);
// // neither does this

// function getPetName() {
//     var petName = 'Hal';
//     //let and const are also function scoped variables
//     return petName;
// }

// getPetName();
// console.log(petName); 
//doesn't work as petName is only available locally inside the function.

//---------------------------------
//Block Scoping
//---------------------------------

const fullName = 'Marvin Limson';
let first_name;
if(fullName) {
    //var first_name = fullName.split(' ')[0]; //not block scoped
    //let first_name = fullName.split(' ')[0]; //block scoped
    //const first_name = fullName.split(' ')[0]; //block scoped
    first_name = fullName.split(' ')[0]; //block scoped
    console.log('First Name:', first_name);
}

console.log(first_name); 