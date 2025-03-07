console.log("===== Implicit Type Coercion (การแปลงโดยอัตโนมัติ) =====");

// 🔹 Number + String -> String
console.log(10 + "5");  // "105" (แปลง 10 เป็น string แล้วต่อกัน)

// 🔹 String * Number -> Number
console.log("10" * 2);  // 20 (แปลง "10" เป็น number)

// 🔹 String / Number -> Number
console.log("100" / 10); // 10 (แปลง "100" เป็น number)

// 🔹 Boolean + Number -> Number
console.log(true + 1);   // 2 (true = 1)
console.log(false + 1);  // 1 (false = 0)

// 🔹 Null + Number -> Number
console.log(null + 5);   // 5 (null = 0)

// 🔹 Undefined + Number -> NaN
console.log(undefined + 5); // NaN (undefined ไม่สามารถแปลงเป็นตัวเลข)

// 🔹 Array + String -> String
console.log([1, 2, 3] + " Hello"); // "1,2,3 Hello"

console.log("===== Explicit Type Conversion (การแปลงแบบกำหนดเอง) =====");

// 🔹 String to Number
console.log(Number("123"));    // 123
console.log(Number("123abc")); // NaN
console.log(+"123");           // 123 (เทียบเท่า Number("123"))

// 🔹 Number to String
console.log(String(123));      // "123"
console.log((123).toString()); // "123"

// 🔹 Boolean Conversion
console.log(Boolean(1));   // true
console.log(Boolean(0));   // false
console.log(Boolean(""));  // false (string ว่าง)
console.log(Boolean("Hi")); // true

console.log("===== Special Cases in Type Coercion =====");

// 🔹 == vs === (เช็คความเท่ากันแบบ Type Coercion และแบบเข้มงวด)
console.log(5 == "5");   // true (Type Coercion แปลง "5" เป็น number)
console.log(5 === "5");  // false (ต่างประเภท)

// 🔹 "Falsy" Values (ค่าที่แปลงเป็น false)
let falsyValues = [0, "", null, undefined, NaN, false];
falsyValues.forEach(value => console.log(Boolean(value))); // false ทั้งหมด

// 🔹 "Truthy" Values (ค่าที่แปลงเป็น true)
let truthyValues = [1, "hello", [], {}, -1];
truthyValues.forEach(value => console.log(Boolean(value))); // true ทั้งหมด
