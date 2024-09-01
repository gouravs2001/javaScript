let a = 5;

function b() {
  const c = 7;
  console.log(a);
}
b();
// console.log(c); // reference error c is not defined

hoisting();

function hoisting() {
  console.log("Hoisting hoti hai is function declaration me");
}

// notHoisting(); RefeerenceError: cannot access notHoisting

const notHoisting = () => {
  console.log("Hoisting nahi hoti is Declaration me");
};

notHoisting();

// notHoisting2(); //ReferenceError : cannot access notHoisting2

const notHoisting2 = function () {
  console.log("Hoisting nahi hoti is declaration me bhi");
};

notHoisting2();
