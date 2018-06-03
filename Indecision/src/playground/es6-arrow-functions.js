//=================================
//ES5
//=================================
const square = function (x) {
    return x*x;
};
console.log(square(3));

//OR

function square2(x) {
    return x*x;
};

console.log(square2(5));

//=================================
//ES6
//=================================
const squareArrow = (x) => {
    return x*x;
};
console.log(squareArrow(7));

// It can't be named unless assigned to a variable unlike ES5
// But can it do this?!

const squareArrow2 = (x) => x*x;
//this expression and the one above are the one and the same
console.log(squareArrow2(9));

//=================================
//Challenge
//=================================

const user = {
    name: 'Moises Limson',
    age: 29,
    location: 'Narnia'
};

//regular arrow funciton
const getFirstName = (userInfo) => {
    const firstName = (userInfo && userInfo.name.split(' ')[0]);
    return firstName;
};

console.log(getFirstName(user))

//shorthand syntax
const getFirstNameAsWell = (userInfo) => (userInfo && userInfo.name.split(' ')[0]);
console.log(getFirstNameAsWell(user));