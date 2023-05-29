// Завдання №1
// function sumSliceArray(arr, first, second) {
//   if (typeof first !== "number" || typeof second !== "number") {
//     throw new Error("Write a number");
//   } else if (first > arr.length || second > arr.length) {
//     throw new Error("Write smaller number");
//   } else {
//     console.log("That is nice!");
//   }
// }
// sumSliceArray([1, 2, 3, 4, 5], 1, 3);
// sumSliceArray([1, 2, 3, 4, 5], true, `3`);
// sumSliceArray([1, 2, 3, 4, 5], 100, 0);
//---------------------------------------------------------

// Завдання №2
// function checkAge() {
//   let askName = prompt("Write your name:");
//   let askAge = +prompt("Write your age:");
//   let askStatus = prompt("Write your status:");
//   try {
//     if (askName == "" || askAge == "" || askStatus == "") {
//       throw new Error("The fields are empty!");
//     } else if (askAge < 18 || askAge > 70 || typeof askAge !== "number") {
//       throw new RangeError("Write validate age from 18 to 70");
//     } else if (
//       askStatus !== "admin" &&
//       askStatus !== "moderator" &&
//       askStatus !== "user"
//     ) {
//       throw new EvalError("Write right status: admin, moderator or user");
//     } else {
//       alert("Welcome to this cinema");
//     }
//   } catch (error) {
//     alert(`${error.name}\n ${error.stack}`);
//   }
// }
// checkAge();
//---------------------------------------------------------

// Завдання №3
// function calcRectangleArea(width, height) {
//   try {
//     if (typeof width !== "number" || typeof height !== "number") {
//       throw new Error("Invalid data in width or height");
//     } else {
//       console.log(width * height);
//     }
//   } catch (error) {
//     console.log(error.stack);
//   }
// }
// calcRectangleArea(20, 10);
//---------------------------------------------------------

// Завдання №4
// new Error("MonthException Incorrect month number");

// class MonthException extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "MonthException";
//     this.message = message;
//   }
// }
// function showMonthName(month) {
//   let year = {
//     1: "January",
//     2: "February",
//     3: "March",
//     4: "April",
//     5: "May",
//     6: "June",
//     7: "July",
//     8: "August",
//     9: "September",
//     10: "October",
//     11: "November",
//     12: "December",
//   };

//   let keys = Object.keys(year);
//   let value = "";
//   let key;
//   let numKey = null;
//   for (i in keys) {
//     key = keys[i];
//     numKey = parseInt(key);
//     value = year[numKey];
//     if (numKey === month) {
//       console.log(year[numKey]);
//       return;
//     }
//   }
//   throw new MonthException("MonthException Incorrect month number");
// }
// try {
//   showMonthName(12);
//   showMonthName(122);
// } catch (error) {
//   console.log(`${error.message}`);
// }
//---------------------------------------------------------

// Завдання №5
// function showUser(id) {
//   if (id > 0) {
//     console.log({ id });
//     return { id };
//   } else {
//     throw new Error("Write correct number");
//   }
// }
// function showUsers(ids) {
//   let arr = [];
//   try {
//     for (id of ids) {
//       showUser(id);
//       arr.push({ id });
//     }
//     console.log(arr);
//   } catch (error) {
//     console.log(error.stack);
//   }
// }
// showUsers([7, 20, 2]);
