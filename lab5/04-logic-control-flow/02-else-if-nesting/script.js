const d = new Date(2022, 9, 30, 6, 0, 0); // เดือนเริ่มต้นจาก 0, ดังนั้น 9 หมายถึงตุลาคม
const hour = d.getHours();

// การตรวจสอบช่วงเวลา
if (hour < 10) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

// Nested If
if (hour < 12) {
  console.log('Good Morning');

  if (hour === 6) {
    console.log('Wake Up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');

  if (hour >= 20) {
    console.log('zzzzzzzz');
  }
}

// ตรวจสอบเวลาทำงาน
if (hour >= 7 && hour < 15) {
  console.log('It is work time!');
}

// การเตือนให้แปรงฟัน
if (hour === 6 || hour === 20) {
  console.log('Brush your teeth!');
}
