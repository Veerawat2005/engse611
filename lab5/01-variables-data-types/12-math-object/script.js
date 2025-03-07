console.log("===== Basic Math Object Functions =====");

// Math.PI (ค่าพาย)
console.log(Math.PI); // 3.141592653589793

// Math.E (ค่าของ e, ฐานของลอการิธึม)
console.log(Math.E); // 2.718281828459045

// Math.abs() (ค่าสัมบูรณ์)
console.log(Math.abs(-10)); // 10
console.log(Math.abs(5));   // 5

// Math.round() (ปัดเศษให้ใกล้ที่สุด)
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.3)); // 4

// Math.ceil() (ปัดขึ้น)
console.log(Math.ceil(4.1)); // 5

// Math.floor() (ปัดลง)
console.log(Math.floor(4.9)); // 4

// Math.sqrt() (หาค่ารากที่สอง)
console.log(Math.sqrt(16)); // 4

// Math.pow() (ยกกำลัง)
console.log(Math.pow(2, 3)); // 8 (2^3)

// Math.min() และ Math.max() (หาค่าต่ำสุดและค่าสูงสุด)
console.log(Math.min(10, 5, 100, -5)); // -5 (ค่าน้อยที่สุด)
console.log(Math.max(10, 5, 100, -5)); // 100 (ค่ามากที่สุด)

console.log("===== Random Number =====");

// Math.random() (สุ่มเลขระหว่าง 0 ถึง 1)
console.log(Math.random()); // ผลลัพธ์ระหว่าง 0 ถึง 1

// Math.random() สำหรับสุ่มในช่วงที่กำหนด
let min = 1;
let max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // สุ่มเลขระหว่าง 1 ถึง 100

console.log("===== Trigonometric Functions =====");

// Math.sin() (ฟังก์ชัน sine)
console.log(Math.sin(Math.PI / 2)); // 1

// Math.cos() (ฟังก์ชัน cosine)
console.log(Math.cos(Math.PI)); // -1

// Math.tan() (ฟังก์ชัน tangent)
console.log(Math.tan(Math.PI / 4)); // 1

console.log("===== Logarithmic Functions =====");

// Math.log() (ลอการิธึมฐาน e)
console.log(Math.log(1));   // 0
console.log(Math.log(Math.E)); // 1

// Math.log10() (ลอการิธึมฐาน 10)
console.log(Math.log10(100)); // 2

// Math.log2() (ลอการิธึมฐาน 2)
console.log(Math.log2(8));  // 3

console.log("===== Absolute and Sign Functions =====");

// Math.sign() (เช็คสัญลักษณ์ของจำนวน)
console.log(Math.sign(-5)); // -1 (ค่าลบ)
console.log(Math.sign(0));  // 0  (ค่า 0)
console.log(Math.sign(5));  // 1  (ค่าบวก)
