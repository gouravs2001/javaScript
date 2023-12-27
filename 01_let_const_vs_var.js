/* Hoisting = js default behaviour of moving declaration not initialization of 
functions, variables, classes, or imports to  the top of their scope, prior to execution of the code */

//var = function scoped, can be redeclared, hoisting is done
//let and const = block scoped, cannot be redeclared, no hoisting (ReferenceError: a is not defined on accessing before declaration)

/* a = 5  // no hoisting (ReferenceError: a is not defined on accessing before declaration),
 function scoped, can be redeclared there is no declaration though*/

console.log(x); // undefined

var x = 5;

console.group(x); // 5

// console.log(a); // Reference Error
a = 5;

a = "sdsd";

console.log(a);
