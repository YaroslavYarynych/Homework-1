// Завдання №1
// function compact(arr) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   let result = [];
//   arr.forEach((element, index) => {
//     if (index == arr.indexOf(element)) {
//       result.push(element);
//     }
//   });
//   console.log(result);
// }
// compact([5, 3, 4, 5, 6, 7, 3]);
// compact([5, 3, 4, 5, 6, 7, 3, 10, 10, 12, 15, 5, 3, 10]);
//---------------------------------------------------------

// Завдання №2
// function createArray([start, end]) {
//   let array = [];
//   for (let i = start; i <= end; i++) {
//     array.push(i);
//   }
//   console.log(array);
// }
// createArray([2, 9]);
// createArray([0, 25]);
//---------------------------------------------------------

// Завдання №3
// let arr = [];
// let element = 1;
// function numbers(a, b) {
//   for (let i = a; i <= b; i++) {
//     for (let j = 0; j < element; j++) {
//       arr.push(i);
//     }
//     element++;
//     console.log(arr);
//   }
// }
// numbers(1, 5);
//---------------------------------------------------------

// Завдання №4
// function randArray(a) {
//   array = [];
//   let min = 1;
//   let max = 500;
//   for (let i = 0; i < a; i++) {
//     array.push(Math.floor((Math.random() * (max - min)) + min));
//   }
//   console.log(array);
// }
// randArray(5);
// randArray(20);
//---------------------------------------------------------

// Завдання №5
// function funcName(arr) {
//   arr = arr.flat();
//   let firstArr = arr.filter((element) => typeof element == "number");
//   let secondArr = arr.filter((element) => typeof element != "number");
//   console.log(firstArr);
//   console.log(secondArr);
//   let finalArray = [];
//   finalArray.push(firstArr, secondArr);
//   console.log(finalArray);
// }
// funcName([
//   5,
//   "Limit",
//   12,
//   "a",
//   "",
//   99,
//   2,
//   [2, 4, 3, "33", "a", "text"],
//   "strong",
//   "broun",
// ]);
//---------------------------------------------------------

// Завдання №7 (Для закріплення)
// function findUnique(arr) {
//   let map = new Map();
//   let array = arr.map((value, index, ar) => {
//     if (map.has(value)) {
//       console.log(`Масив не унікальний`);
//       return false;
//     } else {
//       map.set(value, true);
//       console.log(`Масив унікальний`);
//       return true;
//     }
//   });
//   console.log(array);
// }
//---------------------------------------------------------

// Завдання №8
// let ask = +prompt("Write an hour");
// let night = [23, 0, 1, 2, 3, 4, 5];
// let morning = [6, 7, 8, 9, 10, 11];
// let day = [12, 13, 14, 15, 16, 17];
// let evening = [18, 19, 20, 21, 22];
// if (night.includes(ask)) {
//   alert("Доброї ночі");
// } else if (morning.includes(ask)) {
//   alert("Доброго ранку");
// } else if (day.includes(ask)) {
//   alert("Доброго дня");
// } else if (evening.includes(ask)) {
//   alert("Доброго вечора");
// } else {
//   alert("Введіть вірне число");
// }
// switch (ask) {
//   case 23:
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     alert("Доброї ночі");
//     break;
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//   case 11:
//     alert("Доброго ранку");
//     break;
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//     alert("Доброго дня");
//     break;
//   case 18:
//   case 19:
//   case 20:
//   case 21:
//   case 22:
//     alert("Доброго вечора");
//     break;
//   default:
//     alert("Введіть число від 0 до 23");
// }
