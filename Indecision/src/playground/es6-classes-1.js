//================================================
//ES6 Classes
//================================================

// Person class

class Person {
    //name defaults to Anonymous if it is not set
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        //return "Hi, my name is " + this.name + "!";
        return `Hi, my name is ${this.name}!`;//ES6 standard
        //these two work the same
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

const me = new Person("Marvin");
console.log(me.sayHello());//calling function

//you can leave arguments blank and will automatically be set to the default if it exists.
const other = new Person();
console.log(other.getDescription());