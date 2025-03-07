// Nested Scopes Example

// Outer function
function outerFunction() {
    let outerVar = 'I am the outer variable';
  
    // Inner function
    function innerFunction() {
      let innerVar = 'I am the inner variable';
      console.log(outerVar); // Accessing outer variable inside the inner function
      console.log(innerVar); // Accessing inner variable inside the inner function
    }
  
    innerFunction();  // Call the inner function
  
    // Trying to access innerVar here would result in an error
    // console.log(innerVar);  // Error: innerVar is not defined
  }
  
  outerFunction(); // Call the outer function
  
  // Block scope inside a nested block
  {
    let blockVar = 'I am inside a block scope';
    {
      let nestedBlockVar = 'I am inside a nested block scope';
      console.log(blockVar); // Accessing block scoped variable in the nested block
      console.log(nestedBlockVar); // Accessing nested block scoped variable
    }
    // Trying to access nestedBlockVar here will cause an error
    // console.log(nestedBlockVar);  // Error: nestedBlockVar is not defined
  }
  
  // Variables defined in the global scope
  let globalVar = 'I am a global variable';
  
  function accessGlobalVar() {
    console.log(globalVar); // Accessing global variable inside a function
  }
  
  accessGlobalVar(); // Output: I am a global variable
  
  // A variable declared in the function scope cannot be accessed from outside
  // console.log(outerVar);  // Error: outerVar is not defined
  