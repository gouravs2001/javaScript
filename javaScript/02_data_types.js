/**
 * - JS is dynamically typed language
 * Javascript have two types of data types divided based on how data is stored in memory and accessed :-
 * 1.Primitive (Stored in Stack memory) - The predefined data types provided by javascript.
 *  1. number
 *  2. bigint
 *  3. boolean
 *  4. string
 *  5. undefined - variable which is not initialized is type of undefined
 *  6. null - special datatype that defines empty 🛑 typeof(null) = object
 *  7. symbol - symbol is a unique data type which is used for assigning unique keys to objects
 *
 * 2.Non-Primitive (stored in Heap memory) - Data types which are user defined such as - objects, Arrays, Function, Dates
 */

let x;
console.log(typeof x); // undefined
x = 3;
console.log(typeof x); //number

console.log(typeof undefined); // 🛑undefined

console.log(typeof null); // 🛑type of null is object

/********************* Stack vs Heap *********************************************
- Stack memory stores primitive datatype .
- data stored in stack if assigned to another variable a new copy of that variable.
 e.g let a = 5;
     let b = a;
     b = 4;
     now b = 4 but a = 5.

- In Heap memory non-primitive(reference) datatypes are stored and they are passed by reference there is only 1 copy 
  and any change in one would appear in another
 
  e.g.
  let a = {
    num : 34,
  }

  let b = a;

  b.num = 0;

  now a.num and b.num = 0

*/
