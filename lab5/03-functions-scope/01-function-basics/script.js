// Function declaration
function greet(name) {
    console.log('Hello, ' + name + '!');
  }
  
  // Function call
  greet('bright');  // Output: Hello, John!
  
  // Function with return value
  function add(a, b) {
    return a + b;
  }
  
  // Function call and store result
  const sum = add(5, 3);
  console.log('Sum:', sum);  // Output: Sum: 8
  
  // Function expression (Anonymous function)
  const multiply = function(x, y) {
    return x * y;
  };
  
  console.log('Multiplication Result:', multiply(4, 6));  // Output: Multiplication Result: 24
  
  // Arrow function (ES6)
  const subtract = (x, y) => x - y;
  
  console.log('Subtraction Result:', subtract(10, 4));  // Output: Subtraction Result: 6
  
  // Function with default parameters
  function greetPerson(name = 'Guest') {
    console.log('Hello, ' + name + '!');
  }
  
  greetPerson();           // Output: Hello, Guest!
  greetPerson('Alice');    // Output: Hello, Alice!
  