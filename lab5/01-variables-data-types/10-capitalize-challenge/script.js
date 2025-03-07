// วิธีที่ 1: ใช้ charAt() และ substring()
const myString = "developer";
const myNewString1 = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(myNewString1); // 'Developer'

// วิธีที่ 2: ใช้ string[index] และ slice()
const myNewString2 = myString[0].toUpperCase() + myString.slice(1);
console.log(myNewString2); // 'Developer'

// วิธีที่ 3: ใช้ Template Literal
const myNewString3 = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(myNewString3); // 'Developer'

// วิธีที่ 4: ใช้ replace() แทนตัวแรกเป็นตัวพิมพ์ใหญ่
const myNewString4 = myString.replace(myString[0], myString[0].toUpperCase());
console.log(myNewString4); // 'Developer'

// วิธีที่ 5: ใช้ map() (สำหรับหลายคำ)
const capitalize = (str) => str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
console.log(capitalize("hello world")); // 'Hello World'
