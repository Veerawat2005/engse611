console.log("Start of execution");

// Global Execution Context

function firstFunction() {
  console.log("Inside firstFunction");

  secondFunction(); // เรียก secondFunction
}

function secondFunction() {
  console.log("Inside secondFunction");

  thirdFunction(); // เรียก thirdFunction
}

function thirdFunction() {
  console.log("Inside thirdFunction");
}

firstFunction(); // เรียก firstFunction

console.log("End of execution");
