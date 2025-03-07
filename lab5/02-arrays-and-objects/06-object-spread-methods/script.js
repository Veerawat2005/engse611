// ใช้ Spread Operator ในการคัดลอกข้อมูลจากออบเจ็กต์
const person = {
    firstName: 'Veerawat',
    lastName: 'supraditpong',
    age: 19
};

// การใช้ Spread Operator เพื่อคัดลอกออบเจ็กต์และแก้ไขบางค่า
const updatedPerson = {
    ...person,
    age: 20, // เปลี่ยนอายุเป็น 20
    email: 'Veerawat@example.com' // เพิ่มฟิลด์ใหม่
};

console.log('Original Person:', person);
console.log('Updated Person:', updatedPerson);

// การใช้ Spread Operator เพื่อรวมออบเจ็กต์หลายตัว
const address = {
    street: '123 Main St',
    city: 'New York',
    zipCode: '10001'
};

const fullPerson = {
    ...person,
    ...address // ผสมออบเจ็กต์ 'address' ลงใน 'fullPerson'
};

console.log('Full Person:', fullPerson);

// การใช้ Object.assign() เพื่อคัดลอกออบเจ็กต์
const anotherPerson = Object.assign({}, person, { age: 32 });

console.log('Another Person:', anotherPerson);

// การใช้ Spread Operator กับฟังก์ชันในออบเจ็กต์
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
    getDetails() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};

// เพิ่มฟังก์ชันใหม่โดยใช้ Spread Operator
const extendedCar = {
    ...car,
    getExtendedDetails() {
        return `${this.getDetails()} with an extended warranty.`;
    }
};

console.log('Car Details:', car.getDetails());
console.log('Extended Car Details:', extendedCar.getExtendedDetails());

// การคัดลอกออบเจ็กต์และฟังก์ชันในลักษณะเดียวกัน
const personCopy = { ...person };
console.log('Person Copy:', personCopy);

// การรวมออบเจ็กต์สองตัวโดยใช้ Spread Operator
const newPerson = {
    ...person,
    phone: '555-1234'
};

console.log('New Person:', newPerson);
