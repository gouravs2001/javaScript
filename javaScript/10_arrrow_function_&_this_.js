/**
 * this refers to current context.
 * In node if we log this in global context is {}.
 * In browser if we log this global context is WINDOW OBJECT.🛑
 * Regular functions (function keyword) have their own this context, which is determined by how they are called. 
   The this value is dynamic and can change based on the function's execution context.
 *Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping".
 * this in function keyword✅ in arrow❌
 */

const user = {
  userName: "XYZ",
  log: function () {
    console.log(this.userName); // we have to use this to use variable of this object(context) in function.
    console.log(this); // gives entire object (context).
  },
};

user.log();

console.log(this); // {} but in browser window object

const one = () => {
  let user = "abc";
  console.log(this); // Regular functions (function keyword) have their own this context,
}; // which is determined by how they are called.
//The this value is dynamic and can change based on the function's execution context
one();

const two = () => {
  console.log(this); // Arrow functions, on the other hand, lexically bind the this value, meaning they inherit this
  //from the surrounding code at the time the function is defined. They do not have their own this context
};

two();
