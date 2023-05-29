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
// class MonthException {
//   constructor(name, message) {
//     this.name = name;
//     this.message = message;
//   }
// }
// let mes = new MonthException(
//   "Number Error",
//   "MonthException Incorrect month number"
// );
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
//   throw mes;
// }
// try {
//   showMonthName(12);
// } catch (error) {
//   console.log(`${error.name}\n ${error.message}`);
// }
//---------------------------------------------------------

// Завдання №5
// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id
// і повертає об’єкт, який містить значення переданої id.
// Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив
// користувацьких айді ids, перевіряє з використанням функції showUser()
// кожен елемент масиву ids на коректність, в разі виключної ситуації виводить
// повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де
// значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]
function showUser(id) {
  if (id > 0) {
    return { id };
  } else {
    throw new Error("Write correct number");
  }
}
showUser(1);
function showUsers(ids) {
  try {
    for (i of ids) {
      showUser();
      console.log(i);
    }
  } catch (error) {
    console.log(error.stack);
  }
}
showUsers([7, 20, 0, 20]);
