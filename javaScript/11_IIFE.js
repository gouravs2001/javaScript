//Immediately Invoked FUnction Expressioin (IIFE)
//There could be the problem because of global scope pollution (global variables,etc.) so to avoid it we use IIFE

(function () {
  console.log("HIIIIII");
})();

//🛑🛑🛑writing two IIFE ALWAYS END IIFE WITH SEMICOLON
// we have to end first IIFE with semicolon because compiler doesn't know where to end it's context

(() => {
  console.log("HIII2");
})();
