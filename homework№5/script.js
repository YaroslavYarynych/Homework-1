// Завдання №1
// class Circle {
//   constructor(x, y, radius) {
//     this.x = x; //координати кола по осі х
//     this.y = y; //координати кола по осі y
//     this.radius = radius;
//   }
//   static PI = 3.14;
//   get calculationL() {
//     return 2 * Circle.PI * this.radius; //метод отримання довжини об*єкта
//   }
//   static met(radius) {
//     return 2 * Circle.PI * radius;
//   } // статичний метод для знаходження довжини кола по радіусу
//   get obj() {
//     return Object.assign({}, this); // повернення копії об`єкту - кола
//   }
//   static method(x, y, radius) {
//     return new Circle(x, y, radius); // повернення об`єкта із параметрами
//   }
//   check(x, y) {
//     const checkValue = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
//     return checkValue <= this.radius; // перевірка на точку в колі
//   }
//   transformation() {
//     return this.toString(); // перетворення об`єкта в string
//   }
//   toString() {
//     return `coordinates in circle: ${this.x}, ${this.y} and radius ${this.radius}`;
//   }
// }
// let view = new Circle(1, 2, 22);
// console.log(view.check(0, 0));
// console.log(view.transformation());
//---------------------------------------------------------

// Завдання №2
// function propsCount(currentObject) {
//   count = 0;
//   for (i in currentObject) {
//     count++;
//   }
//   console.log(count);
// }
// propsCount({
//   0: 10,
//   1: 20,
//   2: 30,
// });
//---------------------------------------------------------

// Завдання №3
// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   showFullName() {
//     console.log(`Your name is ${this.name}, your surname is ${this.surname}`);
//   }
// }
// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   showFullName(middleName) {
//     console.log(
//       `Your name is ${this.name}, your surname is ${this.surname}, your middle name is ${middleName}`
//     );
//   }
//   showCourse(yearCourse) {
//     yearCourse = 2023 - this.year;
//     if (yearCourse >= 6) {
//       console.log(`Write correct year`);
//     } else {
//       console.log(`Your course is ${yearCourse}`);
//     }
//   }
// }
// const stud1 = new Student("Yaroslav", "Yarynych", 2019);
// stud1.showFullName("Vasylovych");
// stud1.showCourse();
//---------------------------------------------------------

// Завдання №4
// let printText = "";
// class Marker {
//   constructor(color, count) {
//     this.color = color;
//     this.count = count;
//   }
//   print(text) {
//     for (let i = 0; i < text.length; i++) {
//       if (text[i] !== " " && this.count >= 0.5) {
//         printText += text[i];
//         this.count -= 0.5;
//       } else {
//         break;
//       }
//     }
//   }
// }
// let col = {
//   green: "\x1b[32m",
//   red: "\x1b[31m",
//   yellow: "\x1b[33m",
//   blue: "\x1b[34m",
//   magenta: "\x1b[35m",
//   cyan: "\x1b[36m",
// };
// let mar = new Marker("red", 11);
// mar.print("HelloworldIamYaroslavIfromLviv");
// for (let i in col) {
//   if (i === mar.color) {
//     console.log(col[i] + printText);
//   }
// }
// class DescMarker extends Marker {
//   constructor(color, count, recharge) {
//     super(color, count);
//     this.recharge = recharge;
//   }
//   refuel() {
//     this.recharge = this.count;
//     if (this.count <= 0.5) {
//       console.log((this.recharge = this.count + 99.5));
//     } else {
//       console.log("Enough fuel for marker");
//     }
//   }
// }
// let desc = new DescMarker("Hello Mentor", 0.5, 0);
// desc.refuel();
//---------------------------------------------------------

// Завдання №5
// class Worker {
//   constructor(fullName, dateRate, workingDays) {
//     this.fullName = fullName;
//     this.dateRate = dateRate;
//     this.workingDays = workingDays;
//     this._experience = 1.2;
//   }
//   showSalary() {
//     return this.dateRate * this.workingDays;
//   }
//   showSalaryWithExperience() {
//     return this.showSalary() * this._experience;
//   }
//   setNewExp(value) {
//     this._experience = value;
//     return this.showSalaryWithExperience();
//   }
//   getExp() {
//     return this._experience;
//   }
//   static sortArray(arr) {
//     arr.sort(function (a, b) {
//       if (a.salary < b.salary) {
//         return -1;
//       } else if (a.salary > b.salary) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//     for (let i = 0; i < arr.length; i++) {
//       console.log(`Full name: ${arr[i].name}, salary: ${arr[i].salary} `);
//     }
//   }
//   static addAWorker(worker, array) {
//     array.push({
//       name: worker.fullName,
//       salary: worker.showSalaryWithExperience(),
//     });
//   }
//   static dynamicSort(array) {
//     array.sort(function (a, b) {
//       if (a.salary < b.salary) {
//         return -1;
//       } else if (a.salary > b.salary) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//   }
// }
// let workerOne = new Worker("Yaroslav Yarynych", 600, 20);
// let workerTwo = new Worker("Ivan Ivanov", 250, 25);
// let workerThree = new Worker("Pavlo Pavlovich", 450, 30);
// let arr = [
//   { name: workerOne.fullName, salary: workerOne.showSalaryWithExperience() },
//   { name: workerTwo.fullName, salary: workerTwo.showSalaryWithExperience() },
//   {
//     name: workerThree.fullName,
//     salary: workerThree.showSalaryWithExperience(),
//   },
// ]; // масив для 5 завдання
// let workerFour = new Worker("Helen Helenka", 550, 25); // додатковий працівник для 6 завдання
// let array = [];
// let workersArray = [];
// Worker.sortArray(arr);
// Worker.dynamicSort(array);
// Worker.addAWorker(workerOne, workersArray);
// Worker.addAWorker(workerTwo, workersArray);
// Worker.addAWorker(workerThree, workersArray);
// Worker.addAWorker(workerFour, workersArray);
// Worker.dynamicSort(workersArray);
// for (let i = 0; i < workersArray.length; i++) {
//   console.log("Name: " + workersArray[i].name);
//   console.log("Salary: " + workersArray[i].salary);
// }
