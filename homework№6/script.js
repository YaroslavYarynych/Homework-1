//---------------------------------------------------------

// Завдання №1
// let elem = document.getElementById("list");
// let firstElem = elem.firstElementChild.innerHTML;
// let lastElem = elem.lastElementChild.innerHTML;
// let secondElem = elem.getElementsByTagName("li")[1].textContent;
// let fourthElem = elem.getElementsByTagName("li")[3].textContent;
// let thirdElem = elem.getElementsByTagName("li")[2].textContent;
// let result = alert(
//   `${firstElem}, ${lastElem}, ${secondElem}, ${fourthElem}, ${thirdElem}`
// );
//---------------------------------------------------------

// Завдання №2
// let headerOne = document.getElementsByTagName("h1")[0];
// headerOne.style.backgroundColor = "lightgreen";
// let firstParag = document.getElementsByTagName("p")[0];
// firstParag.style.fontWeight = "700";
// let secondParag = document.getElementsByTagName("p")[1];
// firstParag.style.color = "red";
// let thirdParag = document.getElementsByTagName("p")[2];
// thirdParag.style.textDecoration = "underline";
// let fourthParag = document.getElementsByTagName("p")[3];
// fourthParag.style.fontStyle = "italic";
// let unorderL = document.getElementById("myList");
// unorderL.style.display = "flex";
// unorderL.style.listStyleType = "none";
// let row = document.getElementsByTagName("span")[0];
// row.style.visibility = "hidden";
//---------------------------------------------------------

// Завдання №3
// let mn = document.createElement("main");
// mn.className = "mainClass check item";
// let dv = document.createElement("div");
// dv.id = "myDiv";
// let parag = document.createElement("p");
// parag.textContent = "First paragraph";
// mn.appendChild(dv);
// dv.appendChild(parag);
//---------------------------------------------------------

// Завдання №4
// let elem = document.querySelectorAll(".arr");
// let button = document.querySelector(".btn");
// let out = document.querySelector(".out");
// button.addEventListener("click", createArr);
// let array = [];
// let fltrArray;
// let output;
// function createArr() {
//   elem.forEach(function (element) {
//     array.push(element.value);
//     array = array.filter((str) => str !== "");
//     for (let i = 0; i < array.length; i++) {
//       out.innerHTML = `Name: ${array[i - 3]}<br>Phone: ${
//         array[i - 2]
//       }<br>Data: ${array[i - 1]}<br>Email: ${array[i]}<br>`;
//     }
//   });
// }
// createArr();
//---------------------------------------------------------

// Завдання №5
// let allTags = document.querySelectorAll(".circle");
// let value = [];
// let paragraph = document.getElementsByTagName("p");

// allTags.forEach(function (element) {
//   value.push(element.getAttribute("data-anim"));
// });
// for (let i = 0; i < value.length; i++) {
//   allTags[i].classList.add(value[i]);
// }
// for (let i = 0; i < value.length; i++) {
//   paragraph = document.getElementsByTagName("p")[i];
//   paragraph.textContent = value[i];
// }
//---------------------------------------------------------

// Завдання №6
// ------------creating price for product---------------

// let year = [2018, 2019, 2020, 2021, 2022];
// let price = 0;
// let count = [];
// for (let i of year) {
//   price += 50;
//   count.push(price);
// }
// let specialEdition = 100;
// let specialEditionForClients = "Special edition";
// let bluePrice = 189.99;
// let redPrice = bluePrice + count[1];
// let greenPrice = bluePrice + count[2];
// let orangePrice = bluePrice + count[3] + specialEdition;
// let grayPrice = bluePrice + count[4] + specialEdition;
// // ------------colorVariable from html------------------
// let red = document.querySelector('[primary="#f84848"]');
// let green = document.querySelector('[primary="#29b864"]');
// let orange = document.querySelector('[primary="#ff5521"]');
// let gray = document.querySelector('[primary="#444"]');
// // ------------Image changing---------------------------
// let blueImage = document.getElementsByTagName("img")[1];
// let secondBlueImage = blueImage.src;
// let redImage = document.getElementsByTagName("img")[2];
// let greenImage = document.getElementsByTagName("img")[3];
// let orangeImage = document.getElementsByTagName("img")[4];
// let grayImage = document.getElementsByTagName("img")[5];
// // ------------first variation--------------------
// let newVariable = document.createElement("div");
// let yearVariable = document.createElement("div");
// let textMode = document.createTextNode(specialEditionForClients);
// let yearModeforDefault = document.createTextNode(year[0]);
// let copyYearModeDefault = yearModeforDefault.textContent;
// newVariable.appendChild(textMode);
// yearVariable.appendChild(yearModeforDefault);
// const ourElement = document.getElementsByClassName("size-container")[0];
// ourElement.appendChild(yearVariable, yearModeforDefault).style.visibility =
//   "visible";
// ourElement.appendChild(yearVariable, yearModeforDefault).style.fontSize =
//   "18px";
// ourElement.appendChild(newVariable, textMode).style.fontSize = "20px";
// // ------------mouseover for red shoe--------------------
// red.addEventListener("mouseover", forTheRedColor);
// function forTheRedColor() {
//   let price = document.getElementById("outprice");
//   price.textContent = redPrice;
//   blueImage.src = redImage.src;
//   yearModeforDefault.textContent = year[1];
// }
// red.addEventListener("mouseout", backPriceForBlueFromRed);
// function backPriceForBlueFromRed() {
//   let price = document.getElementById("outprice");
//   price.textContent = bluePrice;
//   blueImage.src = secondBlueImage;
//   yearModeforDefault.textContent = year[0];
// }
// // ---------mouseover for green shoe--------------------
// green.addEventListener("mouseover", forTheGreenColor);
// function forTheGreenColor() {
//   let price = document.getElementById("outprice");
//   price.textContent = greenPrice;
//   blueImage.src = greenImage.src;
//   ourElement.appendChild(newVariable, textMode).style.visibility = "visible";
//   yearModeforDefault.textContent = year[4];
// }
// green.addEventListener("mouseout", backPriceForBlueFromGreen);
// function backPriceForBlueFromGreen() {
//   let price = document.getElementById("outprice");
//   price.textContent = bluePrice;
//   blueImage.src = secondBlueImage;
//   ourElement.appendChild(newVariable, textMode).style.visibility = "hidden";
//   yearModeforDefault.textContent = year[0];
// }
// // ---------mouseover for orange shoe--------------------

// orange.addEventListener("mouseover", forTheOrangeColor);
// function forTheOrangeColor() {
//   let price = document.getElementById("outprice");
//   price.textContent = orangePrice;
//   blueImage.src = orangeImage.src;
//   ourElement.appendChild(newVariable, textMode).style.visibility = "visible";
//   yearModeforDefault.textContent = year[3];
// }
// orange.addEventListener("mouseout", backPriceForBlueFromOrange);
// function backPriceForBlueFromOrange() {
//   let price = document.getElementById("outprice");
//   price.textContent = bluePrice;
//   blueImage.src = secondBlueImage;
//   ourElement.appendChild(newVariable, textMode).style.visibility = "hidden";
//   yearModeforDefault.textContent = year[0];
// }
// // -----------mouseover for gray shoe--------------------

// gray.addEventListener("mouseover", forTheGrayColor);
// function forTheGrayColor() {
//   let price = document.getElementById("outprice");
//   price.textContent = grayPrice;
//   blueImage.src = grayImage.src;
//   yearModeforDefault.textContent = year[2];
// }
// gray.addEventListener("mouseout", backPriceForBlueFromGray);
// function backPriceForBlueFromGray() {
//   let price = document.getElementById("outprice");
//   price.textContent = bluePrice;
//   blueImage.src = secondBlueImage;
//   yearModeforDefault.textContent = year[0];
// }

//---------------------------------------------------------

// Завдання №7
// let element = document.querySelector("#data");

// function clock() {
//   let currentDate = new Date();
//   element.textContent = currentDate.toLocaleString("en-US", {
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     hour12: true,
//   });
// }
// clock();
// setInterval(clock, 1000);
