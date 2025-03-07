// IIFE (Immediately Invoked Function Expression)
(function() {
    const message = 'Hello from IIFE!';
    console.log(message);  // Output: Hello from IIFE!
  })();
  
  // หรือใช้ในแบบ Arrow Function
  (() => {
    const message = 'Hello from Arrow IIFE!';
    console.log(message);  // Output: Hello from Arrow IIFE!
  })();
  
  // การใช้ IIFE เพื่อหลีกเลี่ยงการปนเปื้อนตัวแปรใน global scope
  (function() {
    const secret = 'This is a secret';
    console.log('Secret:', secret);  // Output: Secret: This is a secret
  })();
  
  // ตัวแปร user จาก otherscript.js จะสามารถเข้าถึงได้ในที่นี้ด้วยการไม่ปนเปื้อน
  console.log(user);  // Output: Brad
  