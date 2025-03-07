// สร้างออบเจ็กต์ตัวอย่าง
const person = {
    firstName: 'Veerawat',
    lastName: 'supraditpong',
    age: 19,
    email: 'Veerawat@example.com'
};

// การใช้ Destructuring พร้อมกับการตั้งชื่อใหม่ (Renaming)
const { firstName: fName, lastName: lName, age, email } = person;

console.log(fName);  
console.log(lName);  
console.log(age);    
console.log(email);  

// การใช้ Destructuring กับฟังก์ชัน
function displayPerson({ firstName, lastName }) {
    console.log(`Full Name: ${firstName} ${lastName}`);
}

displayPerson(person);  

// ตัวอย่างการตั้งชื่อใหม่กับค่าในออบเจ็กต์
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
};

// การใช้ Destructuring กับชื่อใหม่ในออบเจ็กต์
const { make: carMake, model: carModel, year: carYear } = car;

console.log(carMake);  // Toyota
console.log(carModel); // Corolla
console.log(carYear);  // 2021
