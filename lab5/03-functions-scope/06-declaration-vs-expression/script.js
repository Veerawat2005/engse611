// Function Declaration
function greetDeclaration(name) {
    return `Hello, ${name}!`;
  }
  
  // Function Expression (Anonymous Function Expression)
  const greetExpression = function(name) {
    return `Hi, ${name}!`;
  };
  
  // Function Expression with Arrow Function (ES6)
  const greetArrow = (name) => {
    return `Hey, ${name}!`;
  };
  
  // Testing the functions
  
  console.log(greetDeclaration('Alice'));   // Output: Hello, Alice!
  console.log(greetExpression('Bob'));      // Output: Hi, Bob!
  console.log(greetArrow('Charlie'));      // Output: Hey, Charlie!
  
  // Function Declarations are hoisted
  console.log(greetDeclaration('David'));  // Output: Hello, David!
  /* The following line would cause an error because function expressions are NOT hoisted */
  console.log(greetExpression('Eve'));     // Error: greetExpression is not a function
  
  