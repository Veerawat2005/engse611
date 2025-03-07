// Array Methods Challenge

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Numbers Array:", numbers);

// **1. map()**: ใช้ในการแปลงอาร์เรย์ (เปลี่ยนค่าทุกสมาชิก)
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log("Doubled Numbers:", doubled);

// **2. filter()**: ใช้ในการกรองข้อมูลจากอาร์เรย์ (เลือกข้อมูลตามเงื่อนไข)
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0; // เลือกเฉพาะเลขคู่
});
console.log("Even Numbers:", evenNumbers);

// **3. reduce()**: ใช้ในการรวมข้อมูลในอาร์เรย์ (สะสมค่า)
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue; // รวมค่าทุกตัวในอาร์เรย์
}, 0); // กำหนดค่าตัวเริ่มต้นเป็น 0
console.log("Sum of Numbers:", sum);

// **4. forEach()**: ใช้ในการวนลูปผ่านทุกสมาชิกในอาร์เรย์
console.log("Looping through the array using forEach:");
numbers.forEach(function(number, index) {
    console.log(`Index ${index}: ${number}`);
});

// **5. find()**: ค้นหาค่าตัวแรกที่ตรงตามเงื่อนไข
let firstEvenNumber = numbers.find(function(number) {
    return number % 2 === 0; // หาค่าตัวแรกที่เป็นเลขคู่
});
console.log("First Even Number:", firstEvenNumber);

// **6. indexOf()**: หาตำแหน่งของค่าที่กำหนดในอาร์เรย์
let indexOfFive = numbers.indexOf(5);
console.log("Index of 5:", indexOfFive);

// **7. slice()**: สร้างอาร์เรย์ใหม่จากส่วนหนึ่งของอาร์เรย์
let slicedNumbers = numbers.slice(2, 5); // เลือกข้อมูลจาก index 2 ถึง 4
console.log("Sliced Numbers (from index 2 to 4):", slicedNumbers);

// **8. some()**: ตรวจสอบว่าอาร์เรย์มีค่าที่ตรงตามเงื่อนไขบ้างหรือไม่
let hasNegative = numbers.some(function(number) {
    return number < 0; // ตรวจสอบว่ามีค่าติดลบในอาร์เรย์หรือไม่
});
console.log("Does the array have negative numbers?", hasNegative);

// **9. every()**: ตรวจสอบว่าอาร์เรย์ทั้งหมดตรงตามเงื่อนไขหรือไม่
let allPositive = numbers.every(function(number) {
    return number > 0; // ตรวจสอบว่าอาร์เรย์ทั้งหมดเป็นค่าบวก
});
console.log("Are all numbers positive?", allPositive);

// **10. sort()**: เรียงลำดับข้อมูลในอาร์เรย์
let sortedNumbers = numbers.sort(function(a, b) {
    return a - b; // เรียงจากน้อยไปมาก
});
console.log("Sorted Numbers (ascending):", sortedNumbers);

// **11. reverse()**: พลิกอาร์เรย์
let reversedNumbers = numbers.reverse();
console.log("Reversed Numbers:", reversedNumbers);

// **12. concat()**: รวมอาร์เรย์สองอันเข้าด้วยกัน
let moreNumbers = [11, 12, 13];
let allNumbers = numbers.concat(moreNumbers);
console.log("All Numbers (concatenated):", allNumbers);
