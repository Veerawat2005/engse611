// Example of block scope using let and const
{
    let blockLet = 'I am inside a block scope with let!';
    const blockConst = 'I am inside a block scope with const!';
    
    console.log(blockLet);  // Output: I am inside a block scope with let!
    console.log(blockConst);  // Output: I am inside a block scope with const!
  }
  
  // The following lines will cause errors because blockLet and blockConst are block-scoped
  // console.log(blockLet);  // Error: blockLet is not defined
  // console.log(blockConst);  // Error: blockConst is not defined
  
  // Block scope with loops
  for (let i = 0; i < 3; i++) {
    console.log('Inside loop, i:', i);  // Output: Inside loop, i: 0, Inside loop, i: 1, Inside loop, i: 2
  }
  
  // Uncommenting the following line will result in an error because `i` is scoped to the loop
  // console.log('Outside loop, i:', i);  // Error: i is not defined
  
  // Example of using var (not block-scoped)
  for (var j = 0; j < 3; j++) {
    console.log('Inside loop with var, j:', j);  // Output: Inside loop with var, j: 0, Inside loop with var, j: 1, Inside loop with var, j: 2
  }
  
  console.log('Outside loop with var, j:', j);  // Output: Outside loop with var, j: 3
  
  // Block scope with conditionals
  if (true) {
    let blockLetInIf = 'I am inside an if block with let!';
    console.log(blockLetInIf);  // Output: I am inside an if block with let!
  }
  
  // Uncommenting the following line will result in an error because blockLetInIf is scoped to the if block
  // console.log(blockLetInIf);  // Error: blockLetInIf is not defined
  