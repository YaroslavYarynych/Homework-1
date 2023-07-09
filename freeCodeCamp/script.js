//---------------------------------------------------------
// function titleCase(str) {
//   let firstL = "";
//   let lowerWord = "";
//   let result = "";
//   let string = str.split(" ");
//   for (let i of string) {
//     firstL = i.slice(0, 1).toUpperCase();
//     lowerWord = i.slice(1).toLowerCase();
//     result += firstL.concat(lowerWord) + " ";
//   }
//   return result.trim();
// }

// titleCase("I'm a little tea pot");
// titleCase("sHoRt AnD sToUt");
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
//---------------------------------------------------------

// function mutation(arr) {
//   let firstWord = arr[0].toLowerCase();
//   let secondWord = arr[1].toLowerCase();
//   for (let i = 0; i < secondWord.length; i++) {
//     if (firstWord.indexOf(secondWord[i]) === -1) {
//       console.log(false);
//       return;
//     }
//   }
//   console.log(true);
// }

// mutation(["hello", "hey"]);
// mutation(["hello", "neo"]);
// mutation(["floor", "for"]);
//---------------------------------------------------------
// function chunkArrayInGroups(arr, size) {
//   let result = [];
//   for (let i = 0; i < arr.length; i = i + size) {
//     let array = arr.slice(i, i + size);
//     result.push(array);
//   }
//   return result;
// }

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
//---------------------------------------------------------

// Факторіал через цикл
// function factorial(n) {
//   let result = 1;
//   for (let i = n; i > 0; i--) {
//     if (n <= 1) {
//       return 1;
//     } else {
//       result = result * i;
//     }
//   }
//   return result;
// }
// factorial(5); //120

// Факторіал через рекурсію
// function factorial(n) {
//   let result = 1;
//   if (n === 0) {
//     return 1;
//   } else {
//     result = n * factorial(n - 1);
//     return result;
//   }
// }
// console.log(factorial(5));
//---------------------------------------------------------

// function scrollingText(word) {
//   let result = word.toUpperCase();
//   let restWord = result;
//   let final = [];
//   for (let i = 0; i < word.length; i++) {
//     restWord = result.slice(i) + result.slice(0, i);
//     final.push(restWord);
//   }
//   return final;
// }

// scrollingText("word");
//---------------------------------------------------------
// function isSpecialNumber(n) {
//     let isFalse = "NOT!!";
//     let isTrue = "Special!!";
//     let str = n.toString();
//       if (parseInt(n) < 0) {
//       return isFalse;
//     }
//     for (let i = 0; i < str.length; i++) {
//       if (parseInt(str[i]) > 5) {
//         return isFalse;
//       }
//     }
//     return isTrue;
//   }

// isSpecialNumber(76);
//---------------------------------------------------------
// function isTidy(number) {
//   let str = number.toString();
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i - 1]);
//     if (str[i] < str[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// isTidy(12456);
// isTidy(123496);
//---------------------------------------------------------
// function isJumping(number) {

//     let str = number.toString();
//       if(str.length === 1){
//       return 'JUMPING';
//     }
//     for(let i = 0; i < str.length - 1; i++){
//       if(Math.abs(str[i] - str[i+1]) !== 1){
//         return 'NOT JUMPING'
//       }
//     }
//     return 'JUMPING';
//   }
