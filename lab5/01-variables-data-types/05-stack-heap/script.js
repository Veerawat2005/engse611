// 🔹 Stack Memory (Primitive Types ใช้ Stack)
let a = 10;
let b = a; // ค่าถูกคัดลอกไปยัง b (ไม่ส่งผลต่อกัน)
b = 20;

console.log("a:", a); // 10
console.log("b:", b); // 20

// 🔹 Heap Memory (Reference Types ใช้ Heap)
let obj1 = { name: "Bright" };
let obj2 = obj1; // obj2 อ้างอิงถึง obj1 (เปลี่ยนค่าจะส่งผลทั้งสอง)

obj2.name = "John"; 

console.log("obj1:", obj1); // { name: "John" }
console.log("obj2:", obj2); // { name: "John" }

// 🔹 ทดสอบกับ Array (Heap)
let arr1 = [1, 2, 3];
let arr2 = arr1; // อ้างอิงไปที่ arr1

arr2.push(4); 

console.log("arr1:", arr1); // [1, 2, 3, 4]
console.log("arr2:", arr2); // [1, 2, 3, 4]

// 🔹 วิธีการ Copy ค่าใน Heap แบบไม่กระทบต้นฉบับ
let obj3 = { age: 25 };
let obj4 = { ...obj3 }; // ใช้ Spread Operator เพื่อสร้าง Object ใหม่
obj4.age = 30;

console.log("obj3:", obj3); // { age: 25 }
console.log("obj4:", obj4); // { age: 30 }

// 🔹 วิธี Copy Array แบบไม่กระทบกัน
let arr3 = [5, 6, 7];
let arr4 = [...arr3]; // ใช้ Spread Operator เพื่อคัดลอกข้อมูล

arr4.push(8);

console.log("arr3:", arr3); // [5, 6, 7]
console.log("arr4:", arr4); // [5, 6, 7, 8]
