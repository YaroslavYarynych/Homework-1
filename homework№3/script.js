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
//   k = [];
//   let min = 1;
//   let max = 500;
//   for (let i = 0; i < a; i++) {
//     k.push(Math.floor(Math.random() * (max - min) + min));
//   }
//   console.log(k);
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

// Завдання №6
