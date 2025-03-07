// Function with multiple parameters
function greetPerson(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}!`);
  }
  
  greetPerson('veerawat', 'bright');  // Output: Hello, veerawat bright!
  
  // Function with default parameters
  function createAccount(username, password = 'default123') {
    console.log(`Account created with username: ${username} and password: ${password}`);
  }
  
  createAccount('user1');      // Output: Account created with username: user1 and password: default123
  createAccount('user2', 'myPass');  // Output: Account created with username: user2 and password: myPass
  
  // Function with the "arguments" object
  function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }
  
  console.log(sumAll(1, 2, 3));   // Output: 6
  console.log(sumAll(1, 2, 3, 4, 5));   // Output: 15
  
  // Rest parameters (ES6) - similar to "arguments" but more flexible
  function multiplyAll(...numbers) {
    let result = 1;
    for (let num of numbers) {
      result *= num;
    }
    return result;
  }
  
  console.log(multiplyAll(2, 3, 4));   // Output: 24
  console.log(multiplyAll(1, 5, 6, 7));  // Output: 210
  
  // Function with named parameters (Destructuring)
  function printPersonDetails({ firstName, lastName, age }) {
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
  }
  
  const person = {
    firstName: 'Alice',
    lastName: 'bright',
    age: 19
  };
  
  printPersonDetails(person);  // Output: Name: Alice Johnson, Age: 30
  