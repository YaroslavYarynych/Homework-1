// Завдання №1
// let names = {
//   first: "Tom",
//   second: "Sam",
//   third: "Ray",
//   fourth: "Bob",
// };

// let { first: f, third: x, fifth = "Yaroslav" } = names;

// console.log(f); // "Tom"

// console.log(x); // "Ray"

// console.log(fifth); // "Name №5"
//---------------------------------------------------------

// Завдання №2
// let data = {
//   names: ["Sam", "Tom", "Ray", "Bob"],
//   ages: [20, 24, 22, 26],
// };

// let {
//   names: [name1, name2, name3, name4],
//   ages: [age1, age2, age3, age4],
// } = data;

// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26
//---------------------------------------------------------

// Завдання №3
// const mul = (...rest) => {
//   const col = [...rest];
//   let array = [];
//   let result;
//   col.forEach((element) => {
//     if (typeof element === "number") {
//       array.push(element);
//     } else {
//       return (result = 0);
//     }
//   });
//   for (let i of array) {
//     result += i;
//   }
//   return result;
// };
// mul(1, "str", 2, 3, true);
// mul(null, "str", false, true);
//---------------------------------------------------------

// Завдання №4
// let server = {
//   data: 0,
//   convertToString: (callback) => {
//     callback(() => {
//       return server.data + "";
//     });
//   },
// };
// let client = {
//   server: server,
//   result: "",
//   calc: (data) => {
//     client.server.data = data;
//     client.server.convertToString(client.notification());
//   },
//   notification: () => {
//     return (callback) => {
//       client.result = callback();
//     };
//   },
// };
// client.calc(123);
// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"
//---------------------------------------------------------

// Завдання №5
// const mapBuilder = (keysArray, valuesArrays) => {
//   const ourMap = new Map();
//   keysArray.forEach((element, index) => {
//     ourMap.set(element, valuesArrays[index]);
//   });
//   return ourMap;
// };

// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"
//---------------------------------------------------------

// Завдання №6
// const arr = [];

// for (let i = 0; i <= 2; i++) {
//   arr[i] = () => {
//     console.log(i);
//   };
// }

// arr[0](); // 0
// arr[arr.length - 1](); // 2
