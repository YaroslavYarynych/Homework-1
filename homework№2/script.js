// Завдання №1
// function num(a, b, c) {
//   a < b && b < c ? console.log(true) : console.log(false);
// }
// num(1, 2, 3);
// num(1, 5, 1);
// num(-5, 0, -10);
// num(2, 3, 1);
// num(-1, -1, -1);
// num(-1, 2, -2);
// num(1, 1, 1);

//---------------------------------------------------------

// Завдання №2

// let x = 1;
// let y = 2;

// let res1 = String(x) + String(y);
// console.log(res1);
// console.log(typeof res1);

// let res2 = Boolean(x) + String(y);
// console.log(res2);
// console.log(typeof res2);

// let res3 = Boolean(x + y);
// console.log(res3);
// console.log(typeof res3);

// let res4 = (x * y) / "hello";
// console.log(res4);
// console.log(typeof res4);
//---------------------------------------------------------

// Завдання №3
// let ask = prompt("Are you 18+?");
// const isAdult = ask;
// const result =
//   isAdult >= 18
//     ? alert("Ви досягли повнолітнього віку")
//     : alert("Ви занадто молоді");
//---------------------------------------------------------

// Завдання №4
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// let data = [];
// let frequency = []; //масив для count
// let element;
// for (let i = 0; i < arr.length; i++) {
//   element = arr[i];
//   if (frequency[element]) {
//     frequency[element] += 1;
//   } else {
//     frequency[element] = 1;
//   }
// }
// let max = Math.max(frequency[element]);

// arr = arr.filter(function (value) {
//   let numCount = arr.filter(function (num) {
//     return num === value;
//   }).length;
//   return numCount !== max;
// });
// console.log(arr); // [4, 2, 1, 6, 3, 2]
// не розумію цього завдання:(
//---------------------------------------------------------

// Завдання №5
// let a = +prompt("Write a number for the first side:");
// let b = +prompt("Write a number for the second side:");
// let c = +prompt("Write a number for the third side:");
// if (a != b && b != c && a != c) {
//   let halfP = (a + b + c) / 2; //півпериметр
//   let result = Math.sqrt(halfP * (halfP - a) * (halfP - b) * (halfP - c)); //формула Герона
//   console.log(result.toFixed(3)); // заокруглення
// } else if (a <= 0 || b <= 0 || c <= 0) {
//   alert("Incorrect data");
// } else if (a === b) {
//   console.log(`"This rectangular is true:" S = ${(a * b) / 2}`);
// } else if (b === c) {
//   console.log(`"This rectangular is true:" S = ${(b * c) / 2}`);
// } else if (a === c) {
//   console.log(`"This rectangular is true:" S = ${(b * c) / 2}`);
// } else {
//   `Thamks for attention`;
// }
//---------------------------------------------------------

// Завдання №6
// let task = function (a, b, op) {
//   switch (op) {
//     case 1:
//       console.log(a - b);
//       break;
//     case 2:
//       console.log(a * b);
//       break;
//     case 3:
//       console.log(a / b);
//       break;
//     default:
//       console.log(a + b);
//   }
// };
// task(1, 5, 1); // віднімання
// task(2, 5, 2); // множення
// task(10, 5, 3); // ділення
// task(1, 5, 10000); // додавання
//---------------------------------------------------------

// Завдання №7
// function findUnique(arr) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   let checkT = true;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] === arr[i]) {
//         checkT = false;
//       }
//     }
//   }
//   if (checkT) {
//     console.log(`Масив ${arr} є унікальний`);
//   } else {
//     console.log(`Масив ${arr} не є унікальний`);
//   }
// }
// findUnique([7, 1, 4, 2, 3, 4, 5]);
// findUnique([7, 1, 4, 2, 3, 4, 5, 5, 1, 7, 9, 11, 15, 11]);
// findUnique([7, 7, 7, 1, 5, 6, 8]);
// findUnique([7, 1, 5, 6, 8]);
