// Array Nesting, Concat & Spread

// **1. Array Nesting**: การใส่อาร์เรย์ไว้ในอาร์เรย์
let nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original Nested Array:", nestedArray);

// เข้าถึงค่าในอาร์เรย์ซ้อน
let firstArray = nestedArray[0];
console.log("First Nested Array:", firstArray);

// เข้าถึงค่าในอาร์เรย์ซ้อน (ค่า 5 ในอาร์เรย์ที่ 2)
let specificValue = nestedArray[1][1];
console.log("Specific Value (5):", specificValue);


// **2. Using Concat()**: การรวมอาร์เรย์หลายอันเข้าด้วยกัน
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let concatenatedArray = array1.concat(array2, array3);
console.log("Concatenated Array:", concatenatedArray);


// **3. Using Spread Operator**: ใช้ในการแยกสมาชิกของอาร์เรย์หรือรวมอาร์เรย์หลายอัน
let spreadArray = [...array1, ...array2, ...array3];
console.log("Spread Operator Array:", spreadArray);


// **4. Nested Arrays with Spread**: ใช้ Spread Operator กับอาร์เรย์ซ้อน
let nestedSpreadArray = [...nestedArray[0], ...nestedArray[1], ...nestedArray[2]];
console.log("Nested Arrays with Spread:", nestedSpreadArray);


// **5. Adding New Elements using Spread Operator**
let extendedArray = [...array1, 10, 11, 12];
console.log("Extended Array with New Elements:", extendedArray);


// **6. Using Spread in Function Arguments**: ส่งอาร์เรย์เข้าไปในฟังก์ชัน
function sumNumbers(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

let sumResult = sumNumbers(...array1, ...array2);
console.log("Sum of Array1 and Array2:", sumResult);
