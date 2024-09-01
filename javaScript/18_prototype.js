/**
 * Javascript support oops burt it is not really a OO language
 * Js Object are key value pair object literals.
 * Prototype-based programming is a style of object-oriented programming where objects are the primary means 
   of structure and inheritance is performed through cloning existing objects that serve as prototypes. 

 */
/**
 * Almost everything in JS is inheriting "Object".
 * JS try to find data or method in prototype then parent prototype until null is not recieved.
 * Object returns null as it is the parent oof almost every object like Array, String, function can also behave like object.
 */

//----------------------------------------------------------------------------------------------------------------------------------------------

// Adding method/properties in prototype
function createUser(user, age) {
  this.user = user;
  this.age = age;
}

createUser.prototype.show = function () {
  console.log(this);
};

let user1 = new createUser("Ani", 23);
user1.show();

// let user1 = ("Ani", 23);
// user1.show(); // Type Error user1.show is not a function we have to use new keyword while initializing objects

// What new is doing ?
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and 
"this" is bound to the newly created object. If no explicit return value is specified from the constructor, 
JavaScript assumes "this", the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
//----------------------------------------------------******---------------------------------------------------------------------------------------
// We can add properties in Object.prototype and it will be available everywhere.
// If we add properties in Array or String they are only available in Array and String.

Object.prototype.sayMyName = function () {
  console.log("Heisenberg");
};

Array.sayMyName();
String.sayMyName();
Function.sayMyName();

//_____________________Prototype Inheritance________________________________________________

const User = {
  name: "Mai nahi bataunga",
};

const Hehe = {
  sayHi: "Hi",
  nameBatao: function () {
    console.log(this.name);
  },
};

// Object.setPrototypeOf(User, Hehe); // User inherited and Hehe prototype and can use it's methods
User.__proto__ = Hehe; // We can also use this, it's older syntax do the same thing but less clean syntax
User.nameBatao();
console.log(User.sayHi);
