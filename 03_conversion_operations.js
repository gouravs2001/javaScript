let x = "33abc";

let numberX = Number(x);

console.log(typeof numberX, numberX);

// 33abc after converting into number = NaN (not a number)
// 🛑 typeof NaN = number

let bool = " ";

console.log(Boolean(bool));

// "" => false
//🛑 " " (there is space) => true
// -1 => true
// 0 => false
// 1 => true

//<---------------------conversion-------------------------->

console.log("1" + 2); //=> 12

console.log(1 + "2"); //=> 12

console.log("1" + 2 + 2); //=> 122

console.log(1 + 2 + "2"); // => 32
