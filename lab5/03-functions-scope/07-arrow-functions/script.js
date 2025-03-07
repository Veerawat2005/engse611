// Arrow Function แบบพื้นฐาน
const greet = (name) => {
    return `Hello, ${name}!`;
  };
  
  console.log(greet("Alice"));  // Output: Hello, Alice!
  
  // Arrow Function แบบย่อ (Implicit Return)
  const add = (a, b) => a + b;
  
  console.log(add(5, 3));  // Output: 8
  
  // Arrow Function ที่ไม่มีพารามิเตอร์
  const greetWorld = () => "Hello, World!";
  
  console.log(greetWorld());  // Output: Hello, World!
  
  // Arrow Function กับการใช้ this
  const person = {
    name: 'John',
    greet: function() {
      setTimeout(() => {
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    }
  };
  
  person.greet();  // Output: Hello, John! (ภายใน 1 วินาที)
  
  // Arrow Function ที่ใช้ใน Array methods
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = numbers.map(num => num * num);
  
  console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]
  