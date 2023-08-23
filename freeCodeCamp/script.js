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
//     if (n <=  1) {
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

// function roundToNext5(n) {
//   let result = Math.ceil(n / 5) * 5;
//   if (result === -0) {
//     result = 0;
//   }
//   return result;
// }
// roundToNext5(2);

//---------------------------------------------------------

// function powersOfTwo(n) {
//   let array = [1];
//   for (let i = 1; i <= n; i++) {
//     array.push(2 ** i);
//   }
//   console.log(array);
//   return array;
// }
// powersOfTwo(0);

//---------------------------------------------------------

// function word(str) {
//   let regex = /[A-Z]/g;
//   let indexArr = [];
//   let value = str.split("").reduce((acc, item, index, array) => {
//     if (item.match(regex)) {
//       indexArr.push(index);
//     }
//   }, []);
//   return indexArr;
// }
// word("CodEWaRs");

//---------------------------------------------------------

// function printerError(s) {
//   let regex = /[a-m]/g;
//   let fullCount = s.length;
//   let falseCount = 0;
//   let value = s.split("").reduce((acc, item, index, array) => {
//     if (item.match(regex)) {
//       falseCount += 0;
//     } else {
//       falseCount += 1;
//     }
//   }, []);
//   let result = `${falseCount} / ${fullCount}`;
//   return result;
// }
// printerError("aaaxbbbbyyhwawiwjjjwwm");

//---------------------------------------------------------

// function gimme(triplet) {
//   let min = Math.min(...triplet);
//   let max = Math.max(...triplet);
//   let result = 0;
//   for (let i = 0; i < triplet.length; i++) {
//     if (triplet[i] !== min && triplet[i] !== max) {
//       result = i;
//       break;
//     }
//   }
//   return result;
// }

// gimme([5, 10, 14]);
// gimme([2.1, 3.2, 1.4]);

//---------------------------------------------------------

// function stray(numbers) {
//   let result;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
//       result = numbers[i];
//       break;
//     }
//   }
//   return result;
// }
// stray([17, 17, 3, 17, 17, 17, 17]);
// stray([1, 1, 2]);

//---------------------------------------------------------

// function disemvowel(str) {
//   let regex = /[aeiou]/gi;
//   let result = str.replace(regex, "");
//   return result;
// }
// disemvowel("This website is for losers LOL");

//---------------------------------------------------------

// function uniqueInOrder(iterable) {
//   let result = [];
//   if (typeof iterable === "string") {
//     let splited = iterable.split("").filter((el) => el !== ",");
//     for (let i = 0; i < splited.length; i++) {
//       if (splited[i] !== splited[i + 1]) {
//         result.push(splited[i]);
//       }
//     }
//   } else {
//     for (let i = 0; i < iterable.length; i++) {
//       if (iterable[i] !== iterable[i + 1]) {
//         result.push(iterable[i]);
//       }
//     }
//   }
//   return result;
// }
// uniqueInOrder("AAAABBBCCDAABBB");
// uniqueInOrder([1, 2, 2, 3, 3]);

//---------------------------------------------------------

// function getAge(inputString) {

//   let array = inputString.split("");
//   let res = parseInt(array[0]);

//   return res;
// }
// getAge("4 years old");

//---------------------------------------------------------

// function between(a, b) {
//   let array = [];
//   for (let i = a; i <= b; i++) {
//     array.push(i);
//   }
//   return array;
// }
// between(1, 4);

//---------------------------------------------------------

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   let dis = mpg * fuelLeft;
//   if (dis >= distanceToPump) {
//     return true;
//   } else {
//     return false;
//   }
// };
// zeroFuel(100, 50, 1);

//---------------------------------------------------------

// const stringToNumber = function (str) {
//   let string = parseInt(str);
//     return string;
// };
// stringToNumber("1244");

//---------------------------------------------------------

// function isIsogram(str) {
//     let splited = str.toLowerCase().split("");
//     let result = true;
//     for (let i of splited) {
//         if (splited.indexOf(i) !== splited.lastIndexOf(i)) {
//         result = false;
//         break;
//         }
//     }
//     return result;
// }
// isIsogram("Dermatoglyphics");

//---------------------------------------------------------

// let number = function (array) {
//   let arr = [];
//   count = 1;
//   for (let i of array) {
//     arr.push(`${count++}: ${i}`);
//   }
//   return arr;
// };
// number(["a", "b", "c"]);

//---------------------------------------------------------

// function findSmallestInt(args) {
//   let result = args.sort((a, b) => a - b);
//   return result[0];
// }
// findSmallestInt([34, -345, -1, 100]);

//---------------------------------------------------------

// const binaryArrayToNumber = (arr) => {
//   let result = "";
//   for (let i of arr) {
//     result += i;
//   }
//   let res = parseInt(result, 2);
//   return res;
// };
// binaryArrayToNumber([0, 0, 1, 0]);

//---------------------------------------------------------

// function bouncingBall(h, bounce, window) {
//   let timesSeen = 0;
//   if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
//     while (h > window) {
//       h *= bounce;
//       timesSeen += 1;
//       if (h > window) {
//         timesSeen += 1;
//       }
//     }
//   } else {
//     return -1;
//   }
//   return timesSeen;
// }
// bouncingBall(30, 0.66, 1.5);

//---------------------------------------------------------

// function deleteNth(arr, n) {
//   let array = [];
//   let result = {};
//   for (i of arr) {
//     if (!result[i]) {
//       result[i] = 1;
//     } else if (result[i] < n) {
//       result[i]++;
//     } else {
//       continue;
//     }
//     array.push(i);
//   }
//   return array;
// }

// deleteNth([20, 37, 20, 21], 1);
// deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);

// Другий варіант вирішення
// function deleteNth(arr, n) {
//   let obj = {};
//   let array = arr.filter((el) => {
//     (obj[el] = obj[el] + 1 || 1) <= n;
//   });
//   return array;
// }
// deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);

//---------------------------------------------------------

// function check(a, x) {
//   let fls = false;
//   a.forEach((el) => {
//     if (el === x) {
//       fls = true;
//     }
//   });
//   return fls;
// }
// check([66, 101], 66);

//---------------------------------------------------------

// function palindrom(str) {
//   let string = str.split("").reverse().join("");
//   if (str === string) {
//     return string;
//   } else {
//     return "it is not a palindrom";
//   }
// }
// console.log(palindrom("rotator"));

//---------------------------------------------------------

// function wave(str) {
//   let array = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       let sliced = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
//       array.push(sliced);
//     }
//   }
//   return array;
// }
// wave("hello");

//---------------------------------------------------------

// function solution(string) {
//   let regex = /[A-Z]/g;
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (regex.test(string[i]) !== true) {
//       result += string[i];
//     } else {
//       result += " " + string[i];
//     }
//   }
//   return result;
// }
// solution("camelCasing");
// solution("identifier");
// solution("");

//---------------------------------------------------------

// function SeriesSum(n) {
//   let result = 0;
//   if (n === 0 || n === 1) {
//     console.log(n.toFixed(2));
//   }
//   for (let i = 0; i < n; i++) {
//     result += 1 / (1 + i * 3);
//   }
//   return result;
// }
// SeriesSum(2);

//---------------------------------------------------------

// function removeSmallest(numbers) {
//   let array = [...numbers];
//   if (array.length === 0) {
//     return array;
//   }
//   let min = Math.min(...array);
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === min) {
//       array.splice(i, 1);
//       break;
//     }
//   }
//   return array;
// }
// removeSmallest([1, 2, 3, 4, 5]);
// removeSmallest([2, 2, 1, 2, 1]);

//---------------------------------------------------------

// function countNetworking(quarantineLength, frequency) {
//   let party = 0;
//   for (let i = 0; i < 12; i++) {
//     if (
//       i >= quarantineLength &&
//       i % frequency === quarantineLength % frequency
//     ) {
//       party++;
//     }
//   }
//   console.log(party);
// }
// countNetworking(3, 4);

//---------------------------------------------------------

// function makeDecision(fuelRemaining, distance, fuelConsumption) {
//   const fuel = (distance / 100) * fuelConsumption;
//   console.log(fuel);
//   if (fuelConsumption <= 0 || distance <= 0) {
//     return "please, enter the valid data";
//   } else if (fuel <= fuelRemaining && fuelRemaining > 0) {
//     return "reach gas station by themselves";
//   } else {
//     return "ask for help";
//   }
// }
// makeDecision(5, 50, 10);

//---------------------------------------------------------

// function getYears(amount, percent, limit) {
//   if (amount === limit) {
//     return 0;
//   }

//   let moneyCount = amount;
//   let count;

//   for (count = 0; moneyCount < limit; count++) {
//     let firstYear = (moneyCount * percent) / 100;
//     moneyCount += firstYear;
//     if (moneyCount > limit) {
//       count = count - 1;
//     }
//   }

//   return count;
// }

// getYears(20000, 10, 21000);
// getYears(1600, 10, 2000);

//---------------------------------------------------------

// function calculateGuests(guestsInput) {
//   let value = "";
//   const regex = /\d+/;
//   let check = false;

//   for (const i of guestsInput) {
//     if (regex.test(i)) {
//       value += i;
//       console.log(value);
//       check = true;
//     } else if (check) {
//       break;
//     }
//   }
//   if (!value) {
//     return "not a number";
//   }

//   if (isNaN(value) || value === "0") {
//     return "not a number";
//   }

//   return Number(value);
// }
// console.log(calculateGuests("There will be 7 or 9 guys"));

//---------------------------------------------------------

// function isAlphabet(letters) {
//   const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//   let str = "";

//   for (const i of letters) {
//     str += i.toLocaleLowerCase();
//   }
//   const result = alphabetString.localeCompare(str);

//   if (result === 1) {
//     console.log(true);
//   } else {
//     return false;
//   }
// }
// isAlphabet("abc");

//---------------------------------------------------------

// function getName(count) {
//   switch (count) {
//     case 1:
//       return "One";
//     case 2:
//       return "A few";
//     case 3:
//       return "A few";
//     case 4:
//       return "A few";
//     default:
//       return "Many";
//   }
// }
// console.log(getName(10));

//---------------------------------------------------------

// function restoreNames(users) {
//   for (const value of users) {
//     for (const i in value) {
//       if (value[i] === undefined) {
//         const name = value.fullName.split(' ');
//         value[i] = name[0];
//       }
//     }
//   }
// }
// const users = [
//   {
//     firstName: undefined,
//     lastName: "Holy",
//     fullName: "Jack Holy",
//   },
//   {
//     lastName: "Adams",
//     fullName: "Mike Adams",
//   },
// ];
// restoreNames(users);

//---------------------------------------------------------

// function removeFemaleAges(people) {
//   for (const obj of people) {
//     for (const value in obj) {
//       if (obj[value] === "female") {
//         delete obj.age;
//       }
//     }
//   }
// }
// const people = [
//   { name: "Emma", gender: "female", age: 40 },
//   { name: "Avram", gender: "male", age: 41 },
// ];
// removeFemaleAges(people);

//---------------------------------------------------------

// function getOutdated(robots, newVersion) {
//   const array = [];
//   const result = [];
//   for (let obj of robots) {
//     for (let value in obj) {
//       if (obj[value]) {
//         array.push(obj[value]);
//       }
//     }
//   }
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < newVersion) {
//       result.push(i);
//     }
//   }
//   return result
// }
// const robots = [
//   { coreVersion: 9 },
//   { coreVersion: 13 },
//   { coreVersion: 16 },
//   { coreVersion: 9 },
//   { coreVersion: 14 },
// ];
// getOutdated(robots, 10);

//---------------------------------------------------------

// function countBoxes(boxes) {
//   const arr = boxes.split("");
//   const count = arr.reduce((ac, prev) => {
//     if (!ac[prev]) {
//       ac[prev] = 1;
//     } else {
//       ac[prev] = ac[prev] + 1;
//     }
//     return ac;
//   }, {});
// }

// countBoxes("aabca");

//---------------------------------------------------------

// function getRobotSchema(robot) {
//   for (let i in robot) {
//     robot[i] = typeof robot[i];
//   }
//   return robot
// }
// const robot = {
//   version: 16,
//   name: "Cleaner 3000",
//   released: true,
//   author: { name: "Vlad" },
// };
// getRobotSchema(robot);

//---------------------------------------------------------

// const compareRobots = (robot1, robot2) => {
//   const { serialNo: _, ...rest1 } = robot1;
//   const { serialNo: __, ...rest2 } = robot2;

//   return JSON.stringify(rest1) === JSON.stringify(rest2);
// };

//---------------------------------------------------------

// const compareRobots = (robot1, robot2) => {
//   if (Object.keys(robot1).length !== Object.keys(robot2).length) {
//     return false;
//   }
//   for (let i in robot1) {
//     if (i === "serialNo") {
//       continue;
//     }

//     if (robot1[i] !== robot2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const charlie = { serialNo: 1, chipVer: 12 };

// const lordy = { serialNo: 2, chipVer: 12 };
// console.log(compareRobots(charlie, lordy)); // true);
// const paul = { serialNo: 3, chipVer: 15 };
// console.log(compareRobots(paul, charlie)); // false

// const mike = { serialNo: 4, chipVer: 12, wheels: 1 };
// compareRobots(mike, charlie); // false

// const max = { serialNo: 5, engineVer: 12 };
// compareRobots(max, charlie); // false

// const steve = { serialNo: 6 };
// compareRobots(steve, charlie); // false
