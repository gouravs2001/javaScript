// Array object - collection of multiple items under single variable name ( can store multiple types of variable )
/**
 * Array in js is resizable.
 * If we assign arr1 = arr2 it doesn't create a copy but create an alias referencing same array.
 * JS array copy operations creates shallow copy ( property share same reference point ) rather than deep copy ( creating completely new copy ).
 * Shallow copy - if we change in copied object ( using spread operators, slice method etc. ) the object, in object will change if changed in any
                  of the object
 * To create a deep copy use JSON.parse(JSON.stringify( arr ))
 */

const arr1 = [1, 2, [-1, -1]];

console.log("Original array ", arr1);
// shallow copy
const arr2 = arr1.slice();
arr2[0] = 34;
arr2[2][0] = 69;

//deep copy

const arr3 = JSON.parse(JSON.stringify(arr1));
arr3[2][0] = 99;

console.log(
  "\nShallow copy",
  arr2,
  "\nDeep copy",
  arr3,
  "\nOriginal array after changing shallow copy",
  arr1
);

//*************** Slice vs Splice ************* */
/**
 * slice(start index, not included last index) doesn't affect original array returns a copy.
 * splice (start index, not included last index ) changes original array i.e cut from original array and return that portion.
 */

const sarr = [0, 1, 2, 3, 4, 5];
console.log(
  `
  original array ${sarr}\n array returned after slice ${sarr.slice(0, 3)}\n 
  original array after slice ${sarr}\n
  array returned after splice  ${sarr.splice(0, 3)}\n 
  original array after slice ${sarr}\n
  `
);

console.log(Array.from("ARRAY")); // converts given iterable input to array or creates a shallow copy
console.log(Array.from([1, 2, 3, 4]));
console.log(Array.from({ name: "Will give empty array " }));

console.log(Array.of(1, 2, 3, 4)); // creates array with specific sets of elements
