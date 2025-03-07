// กำหนดตัวแปร
let temperature = 30;

// ใช้ If Statement เพื่อตรวจสอบค่า
if (temperature > 25) {
    console.log("It's a hot day!"); // หากค่า temperature มากกว่า 25
} else {
    console.log("It's not that hot."); // หากค่า temperature น้อยกว่าหรือเท่ากับ 25
}

// อีกตัวอย่าง
let isRaining = true;

if (isRaining) {
    console.log("Don't forget your umbrella!");
} else {
    console.log("No rain today, enjoy the sunshine!");
}

// ตัวอย่างการใช้ If-Else If-Else
let timeOfDay = 14; // 2 PM

if (timeOfDay < 12) {
    console.log("Good morning!");
} else if (timeOfDay < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
