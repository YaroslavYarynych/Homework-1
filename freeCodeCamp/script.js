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
//---------------------------------------------------------
// function checkNumber(number) {
//   let array = [];
//   switch (number) {
//     case number:
//       number > 0 ? array.push(true) : array.push(false);
//     case number:
//       number % 2 === 0 ? array.push(true) : array.push(false);
//     case number:
//       number % 10 === 0 ? array.push(true) : array.push(false);
//   }
//   return array
// }
// checkNumber(0);
//---------------------------------------------------------
// function getArraysSum(arr1, arr2) {
//   let sumArr1 = 0;
//   let sumArr2 = 0;
//   let resultArr1 = arr1.forEach((element) => {
//     sumArr1 += element;
//   });
//   let resultArr2 = arr2.forEach((element) => {
//     sumArr2 += element;
//   });
//   let result = sumArr1 + sumArr2;
//   return result
// }
// getArraysSum([1, 2], [3, 4]);
//---------------------------------------------------------
// function combineArrays(first, second) {
//   let result = [];
//   let sum = 0;
//   for (let i = 0; i < first.length; i++) {
//     for (let j = 0; j < second.length; j++) {
//       sum = first[i] + second[i];
//     }
//     result.push(sum);
//   }
//   return result;
// }
// combineArrays([1, 2, 3, 4], [1, 2, 3, 4]);
//---------------------------------------------------------
// function splitString(str) {
//   let findLength = str.length;
//   let result = [];

//   for (let i = 0; i < findLength; i += 2) {
//     if (findLength % 2 === 0) {
//       result.push(str[i] + str[i + 1]);
//     } else {
//       result.push(str[i] + (str[i + 1] || "_"));
//     }
//   }
//   return result;
// }
// splitString("123456");
// splitString("123");

//---------------------------------------------------------

// function invert(array) {
//   let arr = [];
//   for (i of array) {
//     i = i * -1;
//     arr.push(i);
//   }
//   return arr;
// }
// invert([1, 2, 3, 4, 5]);
// invert([1, 2, -3, 4, 5]);

//---------------------------------------------------------

// function letter(letter) {
//   letter = letter.toUpperCase();
//   let code = letter.charCodeAt(0);
//   let result = code - 64;
//   return result;
// }
// letter("c");

//---------------------------------------------------------

// let countSheep = function (num) {
//   let word = "sheep...";
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     result += i + " " + word;
//   }
//   return result;
// };
// countSheep(3);

//---------------------------------------------------------

// function getLargestNumber(numbers) {
//   let result = 0;
//   let sortedArray = numbers.sort((a, b) => {
//     return a - b;
//   });
//   if (sortedArray.length === 1) {
//     result = numbers[0];
//   }
//   for (let i of sortedArray) {
//     for (let j of sortedArray) {
//       if (i > j) {
//         result = i;
//       }
//     }
//   }
//   return result;
// }

// getLargestNumber([3, 8, 5, 7]) === 8;
// getLargestNumber([-4, -9, -3, 0, -6]) === 0;
// getLargestNumber([7, 7, 7, 7.1]) === 7.1;
// getLargestNumber([0, 0, 0]) === 0;
// getLargestNumber([3]) === 3;
// getLargestNumber([-1.52, -1.57, -1.55, -1.56, -1.53]) === -1.52;

//---------------------------------------------------------

// function getUniqNames(names) {
//   let result = [];
//   let filteredArray = names.filter((element, index) => {
//     if (names.indexOf(element) === index) {
//       result.push(element);
//     }
//   });
//   return result;
// }
// const names = [
//   "Eileen",
//   "Peter",
//   "Jared",
//   "Robert",
//   "Robert",
//   "Robert",
//   "David",
// ];

// getUniqNames(names);

//---------------------------------------------------------

// function getSumOfRange(start, end) {
//   let result = 0;
//   for (let i = start; i <= end; i++) {
//     result += i;
//   }
//   return result;
// }
// getSumOfRange(1, 10) === 55;
// getSumOfRange(-5, 5) === 0;
// getSumOfRange(1, 500) === 125250;

//---------------------------------------------------------

//   function getAverageAge(years) {
//     if (years.length === 0) {
//       return 0;
//     }
//     let bornYear = 0;
//     let deathYear = 0;
//     let splitedString = "";
//     let difference = 0;
//     let yearsArray = [];
//     for (let i of years) {
//       splitedString = i.split("-");
//       bornYear = parseInt(splitedString[0]);
//       deathYear = parseInt(splitedString[1]);
//       difference = deathYear - bornYear;
//       yearsArray.push(difference);
//     }
//     let sum = 0;
//     let length = yearsArray.length;
//     for (let i of yearsArray) {
//       sum += i;
//     }
//     let result = Math.round(sum / length);
//     return result;
//   }
// getAverageAge(["1832-1905", "1876-1956", "1683-1724", "1714-1748"]) === 57;
// getAverageAge([
//   "1907-1997",
//   "1761-1833",
//   "1535-1582",
//   "1918-2012",
//   "1877-1968",
//   "1696-1724",
//   "1602-1642",
//   "1692-1743",
//   "1695-1762",
//   "1570-1636",
//   "1762-1807",
//   "1668-1731",
// ]) === 63;

//---------------------------------------------------------

// function calculateCount(amount) {
//   let money = [500, 200, 100, 50, 20, 10];
//   let total = 0;
//   for (let i = 0; i < money.length; i++) {
//     let currentNom = money[i];
//     let count = Math.floor(amount / currentNom);
//     amount = amount - count * currentNom;
//     total += count;
//   }
//   if (amount !== 0) {
//     return -1;
//   } else {
//     return total;
//   }
// }
// calculateCount(1500) === 3; // (500 + 500 + 500)
// calculateCount(1561) === -1;
// calculateCount(440) === 4; // (200 + 200 + 20 + 20
//---------------------------------------------------------

// function getLargestNumbers(numbers) {
//   let sortedArray = numbers.sort((a, b) => {
//     return b - a;
//   });
//   let result = [];
//   for (let i = 0; i < 5; i++) {
//     result.push(sortedArray[i]);
//   }
//   return result;
// }
// getLargestNumbers([1, 3, 1, 5, 2, 5, 2, 6, 3]) === [6, 5, 5, 3, 3];
// getLargestNumbers([-20, -10, 0, 0, 5, -50, -40]) === [5, 0, 0, -10, -20];

//---------------------------------------------------------

// function doubleChar(str) {
//   let result = "";
//   for (let i of str) {
//     result += i + i;
//   }
//   return result;
// }
// doubleChar("String");
//---------------------------------------------------------

// function simpleMultiplication(number) {
//   if (number % 2 === 0) {
//     return number * 8;
//   } else {
//     return number * 9
//   }
// }
// simpleMultiplication(21);

//---------------------------------------------------------
// function sumStr(a, b) {
//   let firstA = a === "" ? 0 : parseInt(a);
//   let secondB = b === "" ? 0 : parseInt(b);
//   let result = firstA + secondB;
//   console.log(isNaN(result) ? 0 : result.toString());
// }
// sumStr("", "");
//---------------------------------------------------------

// function feast(beast, dish) {
//   if (
//     beast[0] === dish[0] &&
//     beast[beast.length - 1] === dish[dish.length - 1]
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// feast("great blue heron", "garlic naan");

//---------------------------------------------------------

// function reverseWords(str) {
//   let lower = str;
//   let string = lower.split(" ");
//   let word = [];
//   string.map((item) => {
//     let modified = item.split("").reverse().join("");
//     word.push(modified);
//   });
//   let result = word.toString().replace(/,/g, " ");
//   return result;
// }
// reverseWords("This is an example!");

//---------------------------------------------------------

// function getSum(a, b) {
//   let result = 0;
//   if (a < b) {
//     for (let i = a; i < b + 1; i++) {
//       result += i;
//     }
//   } else {
//     for (let i = b; i < a + 1; i++) {
//       result += i;
//     }
//   }
//   return result;
// }
// getSum(-1, 2);
// getSum(1, 0);
// getSum(1, 2);
// getSum(0, 1);
// getSum(1, 1);
// getSum(-1, 0);

//---------------------------------------------------------
// function updateLight(current) {
//   let red = "red";
//   let yellow = "yellow";
//   let green = "green";
//   if (current === red) {
//     return green;
//   } else if (current === yellow) {
//     return red;
//   } else if (current === green) {
//     return yellow;
//   }
// }
// updateLight("green");

//---------------------------------------------------------

// function upperLetter(string) {
//   let str = this.split(" ");
//   let word = "";
//   str.map((item, index) => {
//     let firstL = item.slice(0, 1).toUpperCase();
//     let restWord = item.slice(1);
//     word += firstL + restWord;
//     if (index !== str.length - 1) {
//       word += " ";
//     }
//   });
//   return word;
// }
// upperLetter("How can mirrors be real if our eyes aren`t real");

//---------------------------------------------------------

// function calculateYears(principal, interest, tax, desired) {
//   if (desired === principal) {
//     return 0;
//   }
//   let moneyCount = principal;
//   let count;
//   for (count = 0; moneyCount < desired; count++) {
//     let firstYear = moneyCount * interest;
//     let taxedMoney = firstYear * tax;
//     let clearMoney = firstYear - taxedMoney;
//     moneyCount += clearMoney;
//   }
//   return count;
// }
// calculateYears(1000, 0.05, 0.18, 1100);

//---------------------------------------------------------

// function busStop(arr) {
//   let peopleIn = 0;
//   let peopleOut = 0;
//   arr.forEach((element) => {
//     peopleIn += element[0];
//     peopleOut += element[1];
//   });
//   let result = peopleIn - peopleOut;
//   return result;
// }

// busStop([
//   [10, 0],
//   [3, 5],
//   [5, 8],
// ]);

//---------------------------------------------------------

// function findShort(s) {
//   let string = s.split(" ");
//   let array = [];
//   string.forEach((el) => {
//     let length = el.length;
//     array.push(length);
//   });
//   array.sort((a, b) => a - b);
//   let result = array[0];
//   return result;
// }
// findShort("bitcoin take over the world maybe who knows perhaps");

//---------------------------------------------------------

// function descendingOrder(n) {
//   let str = n.toString();
//   let num = [];
//   let splited = str.split("");
//   for (let i = 0; i < splited.length; i++) {
//     num.push(parseInt(splited[i]));
//   }
//   num.sort((a, b) => b - a);
//   let result = "";
//   for (let i = 0; i < num.length; i++) {
//     result += num[i];
//   }
//   return parseInt(result);
// }
// descendingOrder(42145);

//---------------------------------------------------------

// function addBinary(a, b) {
//   let sum = a + b;
//   let result = sum.toString(2);
//   return result;
// }
// addBinary(1, 1);

//---------------------------------------------------------

// function firstNonConsecutive(arr) {
//   let result = [];
//   if (arr.length === 0) {
//     result.push(null);
//   } else if (arr.length === 1) {
//     result.push(arr[0]);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) {
//       break;
//     } else if (arr[i + 1] - arr[i] !== 1) {
//       result.push(arr[i + 1]);
//     }
//   }

//   if (result[0] === undefined) {
//     result[0] = null;
//   }
//   return result[0];
// }
// firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
// firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]);
// firstNonConsecutive([1]);

//---------------------------------------------------------
