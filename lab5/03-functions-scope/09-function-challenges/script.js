// Challenge 1: Function to convert Fahrenheit to Celsius
const getCelsius = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return Math.round(celsius);
  };
  
  console.log(`The temperature is ${getCelsius(32)} \xB0C`);  // Expected Output: The temperature is 0 °C
  
  
  // Challenge 2: Function to find min and max in an array
  const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return {
      min,
      max
    };
  };
  
  console.log(minMax([1, 2, 3, 4, 5]));  // Expected Output: { min: 1, max: 5 }
  
  
  // Challenge 3: IIFE to calculate the area of a rectangle
  ((length, width) => {
    const area = length * width;
  
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
  
    console.log(output);
  })(10, 5);  // Expected Output: The area of a rectangle with a length of 10 and a width of 5 is 50.
  