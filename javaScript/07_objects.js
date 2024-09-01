// objects are singleton when declared through constructor Object.create()
// object is not singleton when we declare it through object literals

const mySymbol = Symbol("mysymbol");
const user = {
  name: "ab kya he batau",
  "full name": "naam nahi hai kono hamara",

  //using symbol in objects syntax
  [mySymbol]: "symbol",
};

//logging symbol syntax
console.log(user.name);
console.log(user["name"]);
//squarebracket syntax for accessing object is better because we can access key with space and symbols used in object

console.log(user["full name"]);
console.log(user[mySymbol]);

// Object.freeze(objectName) after using it any changes in object will not propagate 🔴 there will be no error

user["name"] = "Thakur with do haath";

Object.freeze(user);

user["name"] = "Ye haath mujhe de de thakur ";

console.log(user); // still Thakur with do haath cause thakur refused to give hands

console.log(Object.keys(user)); // return iterable keys

console.log(Object.values(user)); // return iterable values

// ************** Object Destructuring **************************

const { name } = user;

console.log(name);
