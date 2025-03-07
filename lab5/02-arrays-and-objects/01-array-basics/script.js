// Array Basics Challenge

// สร้างอาร์เรย์ที่มีข้อมูลต่างๆ
let fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'];
console.log("Fruits Array:", fruits);

// เข้าถึงข้อมูลในอาร์เรย์โดยใช้ index (เริ่มที่ 0)
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// การเพิ่มข้อมูลเข้าไปในอาร์เรย์
fruits.push('Mango');  // เพิ่มที่ท้ายอาร์เรย์
console.log("After pushing Mango:", fruits);

fruits.unshift('Watermelon');  // เพิ่มที่หน้าอาร์เรย์
console.log("After unshifting Watermelon:", fruits);

// การลบข้อมูลออกจากอาร์เรย์
fruits.pop();  // ลบที่ท้ายอาร์เรย์
console.log("After popping last fruit:", fruits);

fruits.shift();  // ลบที่หน้าอาร์เรย์
console.log("After shifting first fruit:", fruits);

// การค้นหาข้อมูลในอาร์เรย์
let index = fruits.indexOf('Banana');
console.log("Index of Banana:", index);

// การตรวจสอบว่ามีข้อมูลในอาร์เรย์หรือไม่
let hasOrange = fruits.includes('Orange');
console.log("Does the array include Orange?", hasOrange);

// การคัดลอกอาร์เรย์
let newFruits = fruits.slice();  // คัดลอกทั้งอาร์เรย์
console.log("New Fruits Array:", newFruits);

// การรวมอาร์เรย์
let tropicalFruits = ['Coconut', 'Papaya', 'Mango'];
let allFruits = fruits.concat(tropicalFruits);
console.log("All Fruits (combined):", allFruits);

// การวนลูปอาร์เรย์
console.log("Loop through the fruits array:");
fruits.forEach(function(fruit, index) {
  console.log(index + ": " + fruit);
});

// การแปลงอาร์เรย์เป็นสตริง
let fruitsString = fruits.join(', ');
console.log("Fruits as a string:", fruitsString);

// การทำงานกับอาร์เรย์แบบสองมิติ
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Matrix:", matrix);

// เข้าถึงข้อมูลในอาร์เรย์สองมิติ
console.log("First row:", matrix[0]);
console.log("Element at row 1, column 2:", matrix[1][2]);

// การอัพเดทค่าในอาร์เรย์
fruits[0] = 'Peach';
console.log("Updated Fruits Array:", fruits);
