// Global Execution Context

console.log("Start of execution");

function firstFunction() {
  console.log("Inside firstFunction");
  secondFunction();
}

function secondFunction() {
  console.log("Inside secondFunction");
  thirdFunction();
}

function thirdFunction() {
  console.log("Inside thirdFunction");
}

firstFunction();

console.log("End of execution");
