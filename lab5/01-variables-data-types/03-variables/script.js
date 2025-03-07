// ประกาศตัวแปร
let name;
let surname;

let cats = ["cherry", "EHuen"];

let mySchoolName;
let myName;

// กำหนดค่าให้ตัวแปร
myName = "veerawat";
console.log("myName:", myName, "Type:", typeof myName);

// ทดสอบประเภทข้อมูล
let a = 1;
let b = 2;
let c = 1.3;

console.log("a:", a, "Type:", typeof a);
console.log("b:", b, "Type:", typeof b);
console.log("c:", c, "Type:", typeof c);

// ตัวเลขขนาดใหญ่ (BigInt)
let bigNumber = 10000000n;
console.log("bigNumber:", bigNumber, "Type:", typeof bigNumber);

// ทดสอบกับอาร์เรย์
console.log("cats:", cats, "Type:", typeof cats);

// ตรวจสอบประเภทตัวแปร string
console.log("myName:", myName, "Type:", typeof myName);

// Boolean
let isDeleted = false;
console.log("isDeleted:", isDeleted, "Type:", typeof isDeleted);

// การเปลี่ยนประเภทของตัวแปร (Type Coercion)
a = 1;
console.log("a (number):", a, "Type:", typeof a);

a = "1"; // เปลี่ยนเป็น string
console.log("a (string):", a, "Type:", typeof a);

a = a + 2; // string + number -> string
console.log("a (string + number):", a, "Type:", typeof a);

b = 2;
console.log("b:", b, "Type:", typeof b);

// ทดสอบการทำงานของ Array
const arr = [10, 20, 30, 40];
console.log("arr:", arr);

arr.push(50);
console.log("arr (after push):", arr);

arr.pop();
console.log("arr (after pop):", arr);

// ทดสอบการทำงานของ Object
const person = {
    name: "veerawat",
    email: "veerawat@gmail.com"
};
console.log("person (before update):", person);

person.name = "veerawat1";
person.email = "veerawat1@gmail.com";
console.log("person (after update):", person);
