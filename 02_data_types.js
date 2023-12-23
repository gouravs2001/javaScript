/**
 * Javascript have two types of data types :-
 * 1.Primitive - The predefined data types provided by javascript.
 *  1. number
 *  2. bigint
 *  3. boolean
 *  4. string
 *  5. undefined - variable which is not initialized is type of undefined
 *  6. null - special datatype that defines empty 🛑 typeof(null) = object
 *  7. symbol - symbol is a unique data type which is used for assigning unique keys to objects
 *
 * 2.Non-Primitive - Data types which are user defined such as - objects, Arrays, Function, Dates
 */

let x;
console.log(typeof x); // undefined
x = 3;
console.log(typeof x); //number

console.log(typeof undefined); // 🛑undefined

console.log(typeof null); // 🛑type of null is object
