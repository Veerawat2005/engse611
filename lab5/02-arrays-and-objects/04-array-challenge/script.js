// Array Challenge

// **1. สร้างอาร์เรย์ของตัวเลขจาก 1 ถึง 10**
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Numbers Array:", numbers);

// **2. หาค่าผลรวมของตัวเลขในอาร์เรย์**
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers Array:", sum);

// **3. คัดเลือกตัวเลขที่เป็นเลขคี่จากอาร์เรย์**
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers Array:", oddNumbers);

// **4. คัดเลือกตัวเลขที่เป็นเลขคู่จากอาร์เรย์**
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers Array:", evenNumbers);

// **5. ใช้ map() เพื่อเพิ่มค่าทุกตัวในอาร์เรย์**
let incrementedNumbers = numbers.map(num => num + 1);
console.log("Incremented Numbers Array:", incrementedNumbers);

// **6. แปลงตัวเลขในอาร์เรย์เป็นสตริง**
let stringNumbers = numbers.map(num => num.toString());
console.log("String Numbers Array:", stringNumbers);

// **7. ค้นหาค่าตัวเลขที่เป็นเลขมากที่สุดในอาร์เรย์**
let maxNumber = Math.max(...numbers);
console.log("Max Number in Array:", maxNumber);

// **8. ค้นหาค่าตัวเลขที่เป็นเลขน้อยที่สุดในอาร์เรย์**
let minNumber = Math.min(...numbers);
console.log("Min Number in Array:", minNumber);

// **9. ตรวจสอบว่าเลข 5 อยู่ในอาร์เรย์หรือไม่**
let containsFive = numbers.includes(5);
console.log("Does the array contain 5?", containsFive);

// **10. สลับตำแหน่งของตัวเลขในอาร์เรย์ (Reverse)**
let reversedArray = numbers.reverse();
console.log("Reversed Numbers Array:", reversedArray);

// **11. สร้างอาร์เรย์ที่มีค่าซ้ำจากอาร์เรย์เดิม**
let duplicatedArray = [...numbers, ...numbers];
console.log("Duplicated Numbers Array:", duplicatedArray);

// **12. ลบค่าซ้ำจากอาร์เรย์ (Remove duplicates)**
let uniqueArray = [...new Set(duplicatedArray)];
console.log("Unique Numbers Array:", uniqueArray);
