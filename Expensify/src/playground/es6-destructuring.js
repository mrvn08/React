//ES6 Destructuring allows you to pull apart object attributes into it's own variables

//========================================
//Object Destructuring
//========================================
const person = {
    name: 'Marvin',
    age: 26,
    location: {
        city: 'Edgware',
        temperature: '15'
    }
};

//Usual Way of Doing It
//----------------------------------------
//const name = person.name;
//const age = person.age;
//Not scalable as you need to do this with each attribute inside the object;

//Object Destructuring Method
//----------------------------------------
const {name, age} = person
// this line creates 2 variables

console.log(`${name} is ${age}.`);

//destructuring the nested object
const {city, temperature: temp} = person.location;
if(city && temp){
    console.log(`It's ${temp} degrees celsius here in ${city}`);
}
//we can rename variables too
//this code is more readable

//Setting Up Defaults
//----------------------------------------
const { name: newName = "Anonymous" , profession = 'Programmer'} = person;
console.log(`${newName} is a ${profession}`);

//Challenge
//----------------------------------------

const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-published'} = book.publisher;

console.log(publisherName); //default name should be Self Published
//========================================

//========================================
//Array Destructuring
//========================================

const address = ["1299 S Juniper St.", "Philadelphia", "Pennsylvania", "19147"];

const [ street, city2, state, zip ] = address;
//use brackets for array destructuring instead
//matches by index, but you don't have to match each one
//you can do this too
//const [ , city2, state] = address;

console.log(`You are in ${city2}, ${state}.`);

//Setting up defaults
const address2 = [];
const [ , , state2 = "New York" ] = address2;
console.log(`You are in ${state}.`);

//Challenge
//-----------------------------------------

const item = [ 'Coffee (hot)', '$2.00', '$2.50', '$2.75' ];

const [ menu_item, , price_medium] = item;
console.log(`A medium ${menu_item} costs ${price_medium}`);