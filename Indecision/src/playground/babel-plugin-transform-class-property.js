class OldSyntax {
    
    constructor(){
        this.name = 'Mike'
        this.getGreeting = this.getGreeting.bind(this); 
        //3) to fix this we needed to bind the function to itself.
    }

    getGreeting(){
        return `Hi, my name is ${this.name}.`;
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());
//1) this works but if we do this:
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());
//2) it doesn't because the this binding for the name broke.

//4) using new stage 2 babel transform class properties
class NewSyntax {
    //5) Syntax is much cleaner
    name = "Andrew";
    getGreeting = () => {
        return `Hi, my name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
console.log(newSyntax);
const newGetGreeting = newSyntax.getGreeting;
//6) This binding clearly not broken
console.log(newGetGreeting());