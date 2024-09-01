// IN switch case if break is not used all case are executed after match EXCEPT DEFAULT
let num = "2";
switch (num) {
  case "1":
    console.log("ONE");
  // break;
  case "2":
    console.log("2");
  // break;
  case "3":
    console.log("3");
  // break;
  case "4":
    console.log("4");
    break;
  default:
    console.log("LOL");
}

//Falsy values

// "",0,NaN,false,null,undefined,-0, BigInt 0n  other than these all are truthy value..
// truthy value = "0",{},[],"false"," ",function(){}

//Nullish Coalesing Operator -

let val1 = 5 ?? 10;
console.log(val1); // 5

let val2 = null ?? 10;

console.log(val2); //  10

let val3 = undefined ?? 23;
console.log(val3); // 23

let val4 = null ?? undefined; //undefined
let val5 = undefined ?? null; //null
let val6 = undefined ?? 10 ?? 20; // 10
