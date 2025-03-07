// 🔹 String (ข้อความ)
let text = "Hello, JavaScript!";
console.log("text:", text, "Type:", typeof text);

// 🔹 Number (ตัวเลข)
let num = 42;
let floatNum = 3.14;
console.log("num:", num, "Type:", typeof num);
console.log("floatNum:", floatNum, "Type:", typeof floatNum);

// 🔹 Boolean (ค่า true/false)
let isAvailable = true;
console.log("isAvailable:", isAvailable, "Type:", typeof isAvailable);

// 🔹 Undefined (ยังไม่ได้กำหนดค่า)
let notAssigned;
console.log("notAssigned:", notAssigned, "Type:", typeof notAssigned);

// 🔹 Null (ไม่มีค่า)
let emptyValue = null;
console.log("emptyValue:", emptyValue, "Type:", typeof emptyValue);

// 🔹 BigInt (ตัวเลขขนาดใหญ่)
let bigNumber = 12345678901234567890n;
console.log("bigNumber:", bigNumber, "Type:", typeof bigNumber);

// 🔹 Symbol (ค่าที่ไม่ซ้ำกัน)
let uniqueId = Symbol("id");
console.log("uniqueId:", uniqueId, "Type:", typeof uniqueId);

// 🔹 Object (กลุ่มข้อมูล)
let person = {
  name: "Bright",
  age: 25,
  isStudent: false
};
console.log("person:", person, "Type:", typeof person);

// 🔹 Array (อาร์เรย์ - ชุดของค่าหลายตัว)
let colors = ["red", "green", "blue"];
console.log("colors:", colors, "Type:", typeof colors);

// 🔹 Function (ฟังก์ชัน)
function greet() {
  return "Hello!";
}
console.log("greet:", greet, "Type:", typeof greet);
