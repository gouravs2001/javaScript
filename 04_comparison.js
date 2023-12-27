// comparison works differently in case of ==, ==== and >, < >=, <=.

console.log(null == 0); // false because null is not converted to number

console.log(null >= 0); // true because null is converted into 0

console.log(null > 0); // false

console.log(null < 0); // false

console.log(null <= 0); // true because null is converted into 0

// === vs ==

console.log("2" == 2); // true because there is no data type check

console.log("2" === 2); // false because there is data type check
