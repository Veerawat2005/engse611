// Dates & Times Challenge

// สร้างตัวแปรเพื่อเก็บวันที่ปัจจุบัน
let currentDate = new Date();
console.log("Current Date and Time: " + currentDate);

// ดึงวันที่, เดือน, และปีจากวันที่ปัจจุบัน
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1; // เดือนเริ่มจาก 0 (มกราคม = 0)
let currentYear = currentDate.getFullYear();
console.log(`Today is: ${currentDay}/${currentMonth}/${currentYear}`);

// ดึงเวลา (ชั่วโมง, นาที, วินาที)
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let currentSeconds = currentDate.getSeconds();
console.log(`Current Time: ${currentHours}:${currentMinutes}:${currentSeconds}`);

// การเพิ่มเวลา (เช่น เพิ่ม 1 วัน)
currentDate.setDate(currentDate.getDate() + 1); // เพิ่ม 1 วัน
console.log("Tomorrow's Date: " + currentDate);

// การสร้างวันที่ใหม่
let specificDate = new Date(2025, 2, 3); // ปี, เดือน (เริ่มจาก 0), วันที่
console.log("Specific Date: " + specificDate);

// การแปลงวันที่ให้เป็นสตริง
let dateString = currentDate.toDateString();
console.log("Date as String: " + dateString);

// การแปลงเวลาให้เป็นสตริง
let timeString = currentDate.toTimeString();
console.log("Time as String: " + timeString);

// การแปลงวันที่เป็น ISO String
let isoString = currentDate.toISOString();
console.log("ISO Date: " + isoString);

// การหาค่าความแตกต่างระหว่างวันที่ (เช่น จำนวนวันระหว่างวันที่สอง)
let pastDate = new Date(2024, 8, 1);
let timeDifference = currentDate - pastDate; // ความแตกต่างในมิลลิวินาที
let daysDifference = timeDifference / (1000 * 3600 * 24); // แปลงมิลลิวินาทีเป็นวัน
console.log(`Difference in days: ${Math.floor(daysDifference)} days`);
