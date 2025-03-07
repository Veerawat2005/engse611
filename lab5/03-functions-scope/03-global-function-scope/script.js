// Global scope example
let globalVar = 'I am a global variable!';

function showGlobalVar() {
  console.log(globalVar);  // Accessing global variable inside the function
}

showGlobalVar();  // Output: I am a global variable!

// Function scope example
function functionScopeExample() {
  let localVar = 'I am a local variable inside a function!';
  console.log(localVar);  // Accessing local variable inside the function
}

functionScopeExample();  // Output: I am a local variable inside a function!

// Uncommenting the following line will result in an error because localVar is out of scope
// console.log(localVar);  // Error: localVar is not defined

// Block scope with let and const
{
  let blockVar = 'I am inside a block scope!';
  const blockConst = 'I am a constant in block scope!';
  console.log(blockVar);  // Output: I am inside a block scope!
  console.log(blockConst);  // Output: I am a constant in block scope!
}

// Uncommenting the following lines will result in errors because blockVar and blockConst are block-scoped
// console.log(blockVar);  // Error: blockVar is not defined
// console.log(blockConst);  // Error: blockConst is not defined

// Function that demonstrates global scope variable modification
let num = 5;

function modifyGlobalVar() {
  num = 10;  // Modifying global variable
  console.log('Modified global num:', num);  // Output: Modified global num: 10
}

modifyGlobalVar();
console.log('Global num after function call:', num);  // Output: Global num after function call: 10
