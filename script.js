// Завдання №2
// console.log("Yaroslav");

//-----------------------------------------------------

// Завдання №3
// let age = 20;
// let surname = "Yarynych";
// alert(age);
// alert(surname);
// age = surname;
// alert(age);
// alert(surname);
//-----------------------------------------------------

// Завдання №4
// let data = {
//   surname: "Yarynych",
//   age: 20,
//   student: true,
//   knowledge: null,
//   elseData: undefined,
// };
// console.log(data);
//-----------------------------------------------------

// Завдання №5
// let isAdult = confirm("Are you 18+?");
// console.log(isAdult);
//-----------------------------------------------------

// Завдання №6
// let myName = "Yaroslav";
// let surname = "Yarynych";
// let group = "ua-1019.JS Fundamentals";
// let yearOfBirh = 2002;
// let isMarried = false;
// let knowledge = null;
// let anotherData = undefined;
// console.log(typeof yearOfBirh + ` ${yearOfBirh}`);
// console.log(typeof isMarried + ` ${isMarried}`);
// console.log(typeof myName + ` ${myName}`);
// console.log(typeof surname + ` ${surname}`);
// console.log(typeof group + ` ${group}`);
// console.log(typeof knowledge + ` ${knowledge}`);
// console.log(typeof anotherData + ` ${anotherData}`);
//-----------------------------------------------------

// Завдання №7
// let login = prompt("Write your login");
// let email = prompt("Write your email");
// let password = prompt("Write your password");
// alert(`Dear ${login}, your email is ${email}, your password is ${password}`);
//-----------------------------------------------------

// Завдання №8
// let minSec = 3600;
// let day = 24;
// let month = 30;
// let askAnHour = prompt("Write an hour");
// let resHour = askAnHour * minSec;
// alert(resHour);
// let askDay = prompt("Write a day");
// let resDay = askDay * day * minSec;
// alert(resDay);
// let askMonth = prompt("Write a month");
// let resMonth = askMonth * month * day * minSec;
// alert(resMonth);

// console.log(`Changing hours into seconds: ${askAnHour}: ${resHour},
// Changing days into seconds:  ${askDay}: ${resDay},
// Changing months into seconds:  ${askMonth}: ${resMonth},
// `);
//-----------------------------------------------------

// Завдання №9 -> Додаткове
// let number = prompt("Write a number of your ticket");
// let coupleNumber;
// let upperType = "Верхня полиця";
// let bottomType = "Нижня полиця";
// let sideType = "Бічне місце";
// if (number == 0) {
//   alert("Введіть правильне число");
// } else if (number <= 4 && number % 2 == 0) {
//   alert(`У вас ${(coupleNumber = 1)} купе, ${upperType}`);
// } else if (number <= 4 && number % 2 != 0) {
//   alert(`У вас ${(coupleNumber = 1)} купе, ${bottomType}`);
// } else if (number <= 8 && number % 2 == 0) {
//   alert(`У вас ${(coupleNumber = 2)} купе, ${upperType}`);
// } else if (number <= 8 && number % 2 != 0) {
//   alert(`У вас ${(coupleNumber = 2)} купе,  ${bottomType}`);
// } else if (number <= 12 && number % 2 == 0) {
//   alert(`У вас ${(coupleNumber = 3)} купе, ${upperType}`);
// } else if (number <= 12 && number % 2 != 0) {
//   alert(`У вас ${(coupleNumber = 3)} купе,  ${bottomType}`);
// } else if (number <= 16 && number % 2 == 0) {
//   alert(`У вас ${(coupleNumber = 4)} купе, ${upperType}`);
// } else if (number <= 16 && number % 2 != 0) {
//   alert(`У вас ${(coupleNumber = 4)} купе,  ${bottomType}`);
// } else if (number <= 20 && number % 2 == 0) {
//   alert(`У вас ${(coupleNumber = 5)} купе, ${upperType}`);
// } else if (number <= 20 && number % 2 != 0) {
//   alert(`У вас ${(coupleNumber = 5)} купе,  ${bottomType}`);
// } else if (number <= 24 && number % 2 == 0) {
//   alert(`У вас ${(coupleNumber = 6)} купе, ${upperType}`);
// } else if (number <= 24 && number % 2 != 0) {
//   alert(`У вас ${(coupleNumber = 6)} купе,  ${bottomType}`);
// } else if (number <= 28 && number % 2 == 0) {
//   alert(`У вас ${(coupleNumber = 7)} купе, ${upperType}`);
// } else if (number <= 28 && number % 2 != 0) {
//   alert(`У вас ${(coupleNumber = 7)} купе,  ${bottomType}`);
// } else if (number <= 32 && number % 2 == 0) {
//   alert(`У вас ${(coupleNumber = 8)} купе, ${upperType}`);
// } else if (number <= 32 && number % 2 != 0) {
//   alert(`У вас ${(coupleNumber = 8)} купе,  ${bottomType}`);
// } else if (number <= 36 && number % 2 == 0) {
//   alert(`У вас ${(coupleNumber = 9)} купе, ${upperType}`);
// } else if (number <= 36 && number % 2 != 0) {
//   alert(`У вас ${(coupleNumber = 9)} купе,  ${bottomType}`);
// } else if (54 > number >= 37 && number % 2 == 0) {
//   alert(`У вас ${sideType}, ${upperType}`);
// } else if (54 > number >= 37 && number % 2 != 0) {
//   alert(`У вас ${sideType}, ${bottomType}`);
// } else {
//   alert("Введіть правильне число");
// }
