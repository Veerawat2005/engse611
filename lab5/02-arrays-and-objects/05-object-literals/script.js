// Object Literals

// สร้างออบเจ็กต์ที่ประกอบด้วยข้อมูลของบุคคล
const person = {
    firstName: 'Veerawat',
    lastName: 'supraditpong',
    age: 19,
    email: 'Veerawat@example.com',
    // ฟังก์ชันภายในออบเจ็กต์
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    // คำนวณค่าหลังจากเพิ่มอายุ
    updateAge: function(years) {
        this.age += years;
        return this.age;
    }
};

// เข้าถึงข้อมูลจากออบเจ็กต์
console.log('Full Name:', person.fullName()); 
console.log('Age:', person.age); 

// ใช้ฟังก์ชันที่อยู่ภายในออบเจ็กต์เพื่อเพิ่มอายุ
console.log('Age after 5 years:', person.updateAge(5));

// การเข้าถึงค่าแบบ dot notation
console.log('Email:', person.email); 

// การเข้าถึงค่าแบบ bracket notation
console.log('Last Name:', person['lastName']); 

// การใช้ computed property names
const propertyName = 'email';
console.log('Email (using computed property):', person[propertyName]); 

// สร้างออบเจ็กต์ใหม่ที่มีข้อมูลคล้ายกับออบเจ็กต์เดิม
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    getDetails() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};

console.log('Car Details:', car.getDetails()); // 2020 Toyota Corolla

// การใช้ shorthand properties (การใช้ชื่อของตัวแปรเดียวกันในออบเจ็กต์)
const name = 'Jane';
const age = 28;
const newPerson = { name, age }; // { name: 'Jane', age: 28 }
console.log('New Person:', newPerson); // { name: 'Jane', age: 28 }

// สร้างออบเจ็กต์ที่มี properties และ methods ใหม่
const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    getSummary() {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
};

console.log('Book Summary:', book.getSummary()); // The Great Gatsby by F. Scott Fitzgerald, published in 1925
