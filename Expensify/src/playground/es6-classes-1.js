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

class Student extends Person{
    //no longer need to configure defaults or assign properties
    constructor(name, age, major){
        super(name, age); //You need to call parent constructor and pass needed arguments
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
        //returns true if it exists, false if it's empty or unassigned.
    }

    //Overriden function
    getDescription(){
        let description = super.getDescription(); //calls get description from parent class
        
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

const me = new Person("Marvin", 27);
console.log(me.sayHello());//calling function
console.log(me.getDescription());

//you can leave arguments blank and will automatically be set to the default if it exists.
const other = new Person();
console.log(other.getDescription());

//sub-class
const student = new Student('Marvin Limson', 27, 'Computer Science');
console.log(student.hasMajor());

const student2 = new Student('Moises Limson', 29, 'Multimedia Arts');
console.log(student2.getDescription());

// Challenge
class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation
    }

    sayHello(){
        let greeting = super.sayHello();

        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const traveller = new Traveller('Marvin Limson', 16, 'Philippines');
console.log(traveller.sayHello());

const traveller2 = new Traveller('Marvin Limson', 16);
console.log(traveller2.sayHello());