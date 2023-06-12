// Завдання №1
// function checkCase(string) {
//   const regExp = /^[A-Z]/;
//   if (regExp.test(string)) {
//     console.log("String's starts with uppercase character");
//   } else {
//     console.log("String's starts with lowercase character");
//   }
// }
// checkCase("Register"); // uppercase
// checkCase("register"); // lowercase
// checkCase("rEgIster"); // lowercase
//---------------------------------------------------------

// Завдання №2
// function checkEmail(email) {
//   const regExp = /^[\w.%+-]+@\w+\.+\w{1,3}/;
//   if (regExp.test(email) === true) {
//     return true;
//   } else {
//     return false;
//   }
// }
// checkEmail("slavik2607.lviv@gmail.com");
// checkEmail("slavik2607.lvivgmail");
// checkEmail("slavik2607_lvivmail.com");
//---------------------------------------------------------

// Завдання №3
// function regExpression(string) {
//   let arr = string.split(/\s/);
//   let resultedString = `${arr[1]} ${arr[0]}`;
// }
// regExpression("Java Script");
// regExpression("Hello World");
//---------------------------------------------------------

// Завдання №4
// let ask = prompt("Write a bank card");
// function validationBankCard() {
//   const regExp = /^\d{16}$/;
//   if (regExp.test(ask)) {
//     let res = `${ask.slice(0, 4)}-${ask.slice(4, 8)}-${ask.slice(
//       8,
//       12
//     )}-${ask.slice(12, 16)}`;
//     alert(`Your bank card is ${res}`);
//   } else {
//     alert(`Your bank card: ${ask} is not correct, rewrite please`);
//   }
// }
// validationBankCard();
// Варіант №2
// function card(number) {
//     let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
//     if (regExp.test(number) === true) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
//   card("1234-5678-9012-3456");
//---------------------------------------------------------

// Завдання №5
// function checkEmail(string) {
//   const regExp = /^[\w]+(-|_){1}?\w+@[a-z]+\.([a-z]{2,4})$/;
//   if (regExp.test(string)) {
//     console.log("Email is correct!");
//   } else {
//     console.log("Email is not correct!");
//   }
// }
// checkEmail("my__mail@gmail.com");
// checkEmail("m-mail@gmail.com");
// checkEmail("my_ma--il@gmail.com");
// checkEmail("#m-mail@gmail.com");
//---------------------------------------------------------

// Завдання №6
// function checkLogin(login) {
//   const regExp = /^[A-Za-z]/;
//   let incorectedValue;
//   if (login.length >= 2 && login.length <= 10 && regExp.test(login) === true) {
//     const regExpForNumber = /(\d*(\.{0,1})?\d+)/g;
//     loginMatch = login.match(regExpForNumber);
//     for (let i of loginMatch) {
//       if (/^\./.test(i) === true) {
//         incorectedValue = loginMatch.splice(loginMatch.length - 1, 1);
//       }
//     }
//     console.log(loginMatch);
//   } else {
//     console.log(`it's not correct login`);
//   }
// }
// checkLogin("ee1.1ret3");
// checkLogin("ee1*1ret3");
// checkLogin("awd1.3..21");
