const number = 100;
const number1 = new Number(100); // both are same this is telling js specifically to use number in console it will show [Number:100]

console.log(number.toFixed(2)); // set number of values to show after decimal

//Math is a object containg various methods and values

console.log(Math.ceil(4.2)); // ==> 5// gives ceiling value or round off to higher value

console.log(Math.floor(4.9)); // ==> 4 // gives floor value or round off to lower value

/********************** Math.random() *********************/

console.log(Math.random()); // gives values lying between 0 and 1

console.log(Math.random() * 10); // gives values between 0 and 10

console.log(Math.floor(Math.random() * 10 + 1)); //getting whole number value added 1 to avoid output 0 gives output between 1 to 10(including)

// getting random value between range

const min = 5;
const max = 13;

const randVal = Math.floor(Math.random() * (max - min + 1) + min); //🛑🛑 important if we dont add 1 max value will not be included

console.log(randVal);
