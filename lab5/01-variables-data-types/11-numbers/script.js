console.log("===== Basic Arithmetic =====");

let num1 = 10;
let num2 = 5;

// การบวก
console.log(num1 + num2); // 15

// การลบ
console.log(num1 - num2); // 5

// การคูณ
console.log(num1 * num2); // 50

// การหาร
console.log(num1 / num2); // 2

// การหารเศษ
console.log(num1 % num2); // 0

// การยกกำลัง
console.log(Math.pow(num1, 2)); // 100 (10^2)

console.log("===== Mathematical Functions =====");

// การหาค่ารากที่สอง
console.log(Math.sqrt(25)); // 5

// การหาค่าสูงสุด
console.log(Math.max(10, 20, 5, 100)); // 100

// การหาค่าต่ำสุด
console.log(Math.min(10, 20, 5, 100)); // 5

// การทำการปัดเศษ (floor, round, ceil)
let num3 = 7.53;
console.log(Math.floor(num3)); // 7 (ปัดลง)
console.log(Math.round(num3)); // 8 (ปัดเป็นจำนวนเต็มที่ใกล้ที่สุด)
console.log(Math.ceil(num3));  // 8 (ปัดขึ้น)

console.log("===== Random Numbers =====");

// การสุ่มเลข
console.log(Math.random()); // ผลลัพธ์ระหว่าง 0 ถึง 1

// การสุ่มเลขระหว่างช่วง
let min = 1;
let max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // สุ่มเลขระหว่าง 1 ถึง 100

console.log("===== Number Conversion =====");

let str = "45.67";
console.log(Number(str)); // 45.67 (แปลงจาก string เป็น number)
console.log(parseInt(str)); // 45 (แปลงเป็นจำนวนเต็ม)
console.log(parseFloat(str)); // 45.67 (แปลงเป็น float)

console.log("===== Infinity & NaN =====");

// Infinity
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity

// NaN (Not a Number)
console.log(0 / 0); // NaN
console.log(Number("hello")); // NaN
