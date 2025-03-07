const age = 17;

// Using an if statement
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

// Assigning a conditional value to a variable
const canVote = age >= 18;  // No need to use ternary to return true/false
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote);
console.log(canVote2);

// Multiple statements
const auth = true;

// Shorter ternary version
const redirect = auth
  ? '/dashboard'
  : '/login';

// Instead of alert in ternary, it's better to handle alert separately for clarity
if (auth) {
  alert('Welcome to the dashboard');
} else {
  alert('Access Denied');
}

console.log(redirect);

// Ternary with no else
auth ? console.log('Welcome to the dashboard') : null;

// Shorthand for ternary with no else
auth && console.log('Welcome to the dashboard');
