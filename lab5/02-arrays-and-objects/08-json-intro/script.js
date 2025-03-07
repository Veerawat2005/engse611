// JSON data ที่เราได้จากไฟล์ todo.json
const todoData = [
    {
      "id": "1",
      "title": "Take out trash"
    }
  ];
  
  // การแปลง JSON เป็น JavaScript Object (ถ้าเป็น String)
  const jsonString = '[{"id":"1","title":"Take out trash"}]';
  const parsedData = JSON.parse(jsonString); // แปลงจาก JSON string เป็น JavaScript object
  
  console.log(parsedData); // แสดงผลข้อมูลที่แปลงแล้ว
  
  // การแปลง JavaScript Object กลับเป็น JSON string
  const todoObject = {
    id: "1",
    title: "Take out trash"
  };
  const jsonStringified = JSON.stringify(todoObject);
  
  console.log(jsonStringified); // แสดงผล JSON string
  