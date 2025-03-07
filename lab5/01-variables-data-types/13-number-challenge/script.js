// Number Challenge

// สุ่มเลขระหว่าง 1 ถึง 100
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(`Random Number: ${randomNum}`);

// เช็คว่าเลขที่สุ่มได้เป็นเลขคู่หรือเลขคี่
if (randomNum % 2 === 0) {
  console.log(`${randomNum} is an even number.`);
} else {
  console.log(`${randomNum} is an odd number.`);
}

// หาค่ารากที่สองของเลขสุ่ม
let sqrtNum = Math.sqrt(randomNum);
console.log(`Square root of ${randomNum}: ${sqrtNum}`);

// หาค่ากำลังสองของเลขสุ่ม
let powerNum = Math.pow(randomNum, 2);
console.log(`Square of ${randomNum}: ${powerNum}`);

// หาค่าของ 10 เท่าของเลขสุ่ม
let tenTimesNum = randomNum * 10;
console.log(`10 times ${randomNum}: ${tenTimesNum}`);

// เปลี่ยนเลขสุ่มให้เป็นสตริง
let numToString = randomNum.toString();
console.log(`Number as string: ${numToString}`);

// สุ่มเลขทศนิยมระหว่าง 0 ถึง 1 แล้วคูณกับเลขสุ่ม
let randomDecimal = Math.random() * randomNum;
console.log(`Random decimal between 0 and ${randomNum}: ${randomDecimal}`);
