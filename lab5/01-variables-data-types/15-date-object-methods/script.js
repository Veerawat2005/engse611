// Date Object Methods Challenge

// สร้างตัวแปรเพื่อเก็บวันที่ปัจจุบัน
let currentDate = new Date();
console.log("Current Date and Time: " + currentDate);

// ใช้ `getFullYear()` เพื่อดึงปีจากวันที่ปัจจุบัน
let year = currentDate.getFullYear();
console.log("Current Year: " + year);

// ใช้ `getMonth()` เพื่อดึงเดือน (0-11) และเพิ่ม 1 เพื่อให้เป็นเดือนจริง
let month = currentDate.getMonth() + 1; 
console.log("Current Month: " + month);

// ใช้ `getDate()` เพื่อดึงวันในเดือน
let date = currentDate.getDate();
console.log("Current Day of the Month: " + date);

// ใช้ `getDay()` เพื่อดึงวันในสัปดาห์ (0 = Sunday, 1 = Monday, ...)
let dayOfWeek = currentDate.getDay();
console.log("Current Day of the Week: " + dayOfWeek);

// ใช้ `getHours()`, `getMinutes()`, และ `getSeconds()` เพื่อดึงเวลา
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

// ใช้ `setFullYear()` เพื่อปรับเปลี่ยนปี
currentDate.setFullYear(2025);
console.log("Updated Year: " + currentDate.getFullYear());

// ใช้ `setMonth()` เพื่อปรับเปลี่ยนเดือน (0-11)
currentDate.setMonth(11); // ธันวาคม
console.log("Updated Month: " + currentDate.getMonth() + 1);

// ใช้ `setDate()` เพื่อปรับเปลี่ยนวันที่ในเดือน
currentDate.setDate(15);
console.log("Updated Day: " + currentDate.getDate());

// ใช้ `setHours()`, `setMinutes()`, และ `setSeconds()` เพื่อปรับเวลา
currentDate.setHours(14);
currentDate.setMinutes(30);
currentDate.setSeconds(0);
console.log("Updated Time: " + currentDate);

// การแปลงวันที่เป็น ISO String
let isoString = currentDate.toISOString();
console.log("ISO String: " + isoString);

// การแปลงวันที่เป็น String (Day, Month, Year)
let dateString = currentDate.toDateString();
console.log("Date as String: " + dateString);

// การแปลงเวลาเป็น String (Hours:Minutes:Seconds)
let timeString = currentDate.toTimeString();
console.log("Time as String: " + timeString);

// การแปลงวันและเวลาให้เป็นรูปแบบ Locale
let localeString = currentDate.toLocaleString();
console.log("Locale String: " + localeString);
