//=====================================
//Arguments Object - no longer bound with arrow functions
//=====================================

const add = function (a, b){
    console.log(arguments);//Javascript function - arguments are still accessible
    return a+b;
};
console.log(add(55,1));

const add2 = (a, b) => {
    //console.log(arguments); //arguments will be undefined. They are no longer accesible in arrow functions
    return a+b;
};
console.log(add2(55,1));


//=====================================
//'this' keyword - no longer bound with arrow functions
//=====================================

const user = {
    name: "Marvin Limson",
    cities: ["Barnet", "Manila", "Xiamen"],
    printPlacesLived: function(){
        const that = this;
        //3. This const 'that' is a possible workaround to this problem
        console.log(this.name);
        console.log(this.cities);
        //1. arguments are accesible here through the 'this' keyword 
        //which is local to this object
        this.cities.forEach(function(city){
            console.log(that.name + " has lived in " +city);
            //2. but over here the 'this' keyword is not accesible by this
            //anonymous function
            //4. Note that I replaced 'this' with 'that'
        });
    }
};

user.printPlacesLived();

const user2 = {
    name: "Marvin Limson",
    cities: ["Chuan Zhou", "Binondo", "Edgware"],
    printPlacesLived: function(){
        //5. When switched to an arrow function using the work around above is no
        //longer required as functions in ES6 no longer bind their own 'this' keyword
        //but use the 'this' in the context they were created in.
        this.cities.forEach((city)=>{
            console.log(this.name + " has lived in " +city);
        });
    }
};

user2.printPlacesLived();

const user3 = {
    name: "Michelle Gan",
    cities: ["Tokyo", "Kyoto", "Manila"],
    // 6. However there are instances where you don't want to use arrow function
    // for that same reason. For instance, this method below will cause an error.
    // The method below is not bound to the 'user3' object but one step higher,
    // the global scope.
    // printPlacesLived: () => {
    //     this.cities.forEach((city)=>{
    //         console.log(this.name + " has lived in " +city);
    //     });
    // }
};

// user3.printPlacesLived();

//=====================================
// Method Definition Syntax in ES6
//=====================================

const user4 = {
    name: "Michelle Gan",
    cities: ["Tokyo", "Kyoto", "Manila"],
    printPlacesLived(){
        const cityMessages = this.cities.map((city)=>{
            //return city + "!";
            //this will return the same array but with an "!" at the end of each city

            return this.name + ' has lived in ' + city;
            //takes in the name, concatenates it with ' has lived in ' and ends it with
            //a city 
        });
        // .map allows you to get each item in the array and transform it entirely
        // and get a new array.

        this.cities.forEach((city)=>{
            console.log(this.name + " has lived in " +city);
        });
        //.forEach allows you to use each item in the array and simply 
        // do something with it

        return cityMessages;
    }
};

console.log(user4.printPlacesLived());

//One way of simplifying it
const user5 = {
    name: "Michelle Gan",
    cities: ["Tokyo", "Kyoto", "Manila"],
    printPlacesLived(){
        return this.cities.map((city)=>{
            return this.name + ' has lived in ' + city;
        });
    }
};

console.log(user5.printPlacesLived());

//Simplify it even further! Use the shorthand syntax;
const user6 = {
    name: "Michelle Gan",
    cities: ["Tokyo", "Kyoto", "Manila"],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user6.printPlacesLived());

//Challenge Area
const multiplier = {
    numbers: [1,2,3,4,5,6],
    multiplicand: 4,
    multiplyArray(){
        return this.numbers.map((num) => num*this.multiplicand);
    }
}

console.log(multiplier.multiplyArray())