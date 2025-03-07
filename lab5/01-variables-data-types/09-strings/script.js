console.log("===== String Basics =====");

let str1 = "Hello";
let str2 = 'World';
let str3 = `JavaScript`;

console.log(str1, str2, str3); // Hello World JavaScript
console.log(typeof str1);      // string

console.log("===== String Concatenation =====");

// การต่อ String
console.log(str1 + " " + str2);   // Hello World
console.log(`${str1} ${str2}!`);  // Hello World!

console.log("===== String Length & Indexing =====");

let text = "JavaScript is Awesome!";
console.log(text.length);     // ความยาวของ String
console.log(text[0]);         // ตัวอักษรตัวแรก (J)
console.log(text.charAt(4));  // ตัวอักษรที่ index 4 (S)
console.log(text[text.length - 1]); // ตัวสุดท้าย (!)

console.log("===== String Methods =====");

// แปลงเป็นตัวพิมพ์ใหญ่ & ตัวพิมพ์เล็ก
console.log(text.toUpperCase()); // "JAVASCRIPT IS AWESOME!"
console.log(text.toLowerCase()); // "javascript is awesome!"

// ตัดช่องว่างข้างหน้า-ข้างหลัง
let str4 = "   Hello World!   ";
console.log(str4.trim()); // "Hello World!"

// ค้นหาคำใน String
console.log(text.includes("Awesome")); // true
console.log(text.indexOf("is"));       // 11
console.log(text.startsWith("Java"));  // true
console.log(text.endsWith("!"));       // true

console.log("===== String Slicing & Substring =====");

// ตัด String ตามช่วง index
console.log(text.slice(0, 10)); // "JavaScript"
console.log(text.substring(4, 10)); // "Script"

console.log("===== String Replace =====");

// แทนที่คำใน String
let newText = text.replace("Awesome", "Amazing");
console.log(newText); // "JavaScript is Amazing!"

console.log("===== Split & Join =====");

let sentence = "I love JavaScript!";
let words = sentence.split(" "); // แยกเป็น array
console.log(words); // ["I", "love", "JavaScript!"]

let joinedText = words.join("-"); // เชื่อมกลับเป็น String
console.log(joinedText); // "I-love-JavaScript!"

console.log("===== Repeat & Padding =====");

console.log("Hi!".repeat(3)); // "Hi!Hi!Hi!"
console.log("42".padStart(5, "0")); // "00042"
console.log("42".padEnd(5, "0"));   // "42000"

console.log("===== Escape Characters =====");

console.log("Hello\nWorld");  // ขึ้นบรรทัดใหม่
console.log("Hello\tWorld");  // Tab
console.log("I\'m learning JavaScript"); // ใช้เครื่องหมาย '
console.log("This is a \"quote\"."); // ใช้เครื่องหมาย "

console.log("===== Template Literals (``) =====");

let name = "Bright";
let age = 25;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
