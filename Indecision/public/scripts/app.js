"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//================================================
//ES6 Classes
//================================================

// Person class

var Person = function () {
    //name defaults to Anonymous if it is not set
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: "sayHello",
        value: function sayHello() {
            //return "Hi, my name is " + this.name + "!";
            return "Hi, my name is " + this.name + "!"; //ES6 standard
            //these two work the same
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            return this.name + " is " + this.age + " years old.";
        }
    }]);

    return Person;
}();

var me = new Person("Marvin");
console.log(me.sayHello()); //calling function

//you can leave arguments blank and will automatically be set to the default if it exists.
var other = new Person();
console.log(other.getDescription());
