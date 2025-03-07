// Step 1: สร้าง Array ของ Object ชื่อ 'library'
const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      status: {
        own: true,
        reading: false,
        read: true,
      },
    },
  ];
  
  // Step 2: ปรับค่า 'read' ให้เป็น true สำหรับทุกๆ หนังสือ
  library[0].status.read = true;
  library[1].status.read = true;
  library[2].status.read = true;
  
  // Step 3: Destructure ค่า 'title' จากหนังสือแรกและเปลี่ยนชื่อเป็น 'firstBook'
  const { title: firstBook } = library[0];
  console.log('First Book:', firstBook);
  
  // Step 4: แปลง 'library' object เป็น JSON string
  const libraryJSON = JSON.stringify(library);
  console.log('Library as JSON:', libraryJSON);
  