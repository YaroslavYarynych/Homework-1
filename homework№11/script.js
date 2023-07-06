// Завдання №1
// function getPromise(message, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(message), delay);
//   });
// }
// getPromise("test promise", 2000).then(function (data) {
//   console.log(data);
// });
//---------------------------------------------------------

// Завдання №2
// const calcArrProduct = (arr) => {
//   let res = 1;
//   return new Promise(function (resolve, reject) {
//     for (let i of arr) {
//       if (typeof i === "number") {
//         res = res * i;
//       } else {
//         reject("Error! Incorrect array!");
//       }
//     }
//     resolve(res);
//   });
// };
// calcArrProduct([3, 4, 5]).then((result) => console.log(result));
// calcArrProduct([5, "user2", 7, 12]).then((result) => console.log(result));
//---------------------------------------------------------

// Завдання №3
// let ask;
// function askMe() {
//   ask = +prompt("Write a number");
// }
// new Promise(function (resolve, reject) {
//   askMe();
//   if (typeof ask !== "number" || isNaN(ask) || ask == "") {
//     reject(error);
//   } else {
//     resolve(ask);
//   }
// }).catch(function (error) {
//     return new Promise(function (resolve, reject) {
//       askMe();
//       if (typeof ask !== "number" || isNaN(ask)) {
//         askMe();
//       } else {
//         resolve(ask);
//       }
//       resolve(ask);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//   });
//---------------------------------------------------------

// Завдання №4
// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
//   for (let i = 0; i < delays.length; i++) {
//     let del = delays[i];
//     delay(i, del).then(function (value) {
//       console.log(value);
//     });
//   }
//---------------------------------------------------------
// const delay = (i, time) =>
//   new Promise((resolve) => setTimeout(() => resolve(i), time));
// for (let i = 0; i < delays.length; i++) {
//   let del = delays[i];
//   delay(i, del).then(function (value) {
//     console.log(value);
//   });
// }
