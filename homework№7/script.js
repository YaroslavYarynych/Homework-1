// Завдання №1
// let wndw = window.open(
//   "https://www.codewars.com/kata/554e4a2f232cdd87d9000038/javascript",
//   "codewars",
//   "width=300, height=300"
// );
// function changePixels() {
//   wndw.resizeTo(500, 500);
// }
// changePixels();
// setTimeout(changePixels, 2000);
// function changeCoordinates() {
//   wndw.moveTo(200, 200);
// }
// changeCoordinates();
// setTimeout(changeCoordinates, 4000);
// function closeWindow() {
//   wndw.close();
// }
// setTimeout(closeWindow, 6000);
//---------------------------------------------------------

// Завдання №2
// let btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click", changeCSS);
// function changeCSS() {
//   let el = document.getElementById("text");
//   el.style.color = "orange";
//   el.style.fontSize = "20px";
//   el.style.fontFamily = "Comic Sans MS";
// }
//---------------------------------------------------------

// Завдання №3
// Container
// let mainBlock = document.createElement("div");
// mainBlock.id = "div";
// document.body.appendChild(mainBlock);
// mainBlock.style.height = "50px";
// mainBlock.style.margin = "20px";
// // First button
// let firstBtn = document.createElement("button");
// firstBtn.className = "btnOne";
// mainBlock.prepend(firstBtn);
// firstBtn.textContent = "Click to make the page blue";
// firstBtn.addEventListener("click", onClickFirstButton);
// function onClickFirstButton() {
//   document.body.style.background = "blue";
// }
// // Second button
// let secondBtn = document.createElement("button");
// secondBtn.className = "btnTwo";
// secondBtn.textContent = "Double-click to make the page pink";
// mainBlock.append(secondBtn);
// secondBtn.addEventListener("dblclick", onClickSecondButton);
// function onClickSecondButton() {
//   document.body.style.background = "pink";
// }
// // Third button
// let thirdBtn = document.createElement("button");
// thirdBtn.className = "btnThree";
// thirdBtn.textContent = "Click and hold to make the page brown";
// mainBlock.append(thirdBtn);
// let mouseTimer;
// function mouseDown() {
//   mouseUp();
//   mouseTimer = window.setTimeout(onClickThirdButton, 500);
// }
// function mouseUp() {
//   if (mouseTimer) {
//     window.clearTimeout(mouseTimer);
//     mouseTimer = null;
//   }
//   document.body.style.background = "white";
// }
// function onClickThirdButton() {
//   document.body.style.background = "brown";
// }
// thirdBtn.addEventListener("mousedown", mouseDown);
// thirdBtn.addEventListener("mouseup", mouseUp);
// // Fourth button
// let fourthBtn = document.createElement("a");
// fourthBtn.className = "btnFour";
// fourthBtn.setAttribute("href", "");
// mainBlock.append(fourthBtn);
// fourthBtn.textContent = "Hover over to make page yellow";
// thirdBtn.after(fourthBtn);
// fourthBtn.addEventListener("mouseover", function () {
//   document.getElementById("div").style.background = "yellow";
// });
// fourthBtn.addEventListener("mouseout", function () {
//   document.getElementById("div").style.background = "white";
// });
// console.log(mainBlock);
//---------------------------------------------------------

// Завдання №4
// Створення елементу select + стилізація
// let selectElement = document.createElement("select");
// selectElement.id = "select";
// selectElement.style.marginTop = "40px";
// selectElement.style.marginLeft = "40px";
// selectElement.style.background = "lightgreen";
// selectElement.style.fontSize = "20px";
// document.body.appendChild(selectElement);
// // Створення опшинів та заповнення контенту до них
// let array = ["Peter", "John", "Alice", "Alex", "Iren"];
// for (let i = 0; i < array.length; i++) {
//   let option = document.createElement("option");
//   option.value = array[i];
//   option.text = array[i];
//   selectElement.appendChild(option);
// }
// let btn = document.createElement("button");
// btn.id = "btn";
// btn.textContent = "Choose and delete";
// selectElement.after(btn);
// btn.style.margin = "10px";
// btn.style.fontSize = "20px";
// btn.style.background = "lightyellow";

// document.getElementById("btn").addEventListener("click", chooseAndDelete);

// function chooseAndDelete() {
//   let selectedValue = selectElement.value;

//   let optionToRemove = selectElement.querySelector(
//     `[value = "${selectedValue}"]`
//   );
//   if (optionToRemove) {
//     optionToRemove.remove();
//   }
// }
//---------------------------------------------------------

// Завдання №5
// let btn = document.createElement("button");
// btn.id = "btn";
// btn.textContent = "Live button";
// document.body.append(btn);
// btn.style.margin = "20px";
// btn.style.fontSize = "20px";
// btn.style.background = "lightgreen";
// btn.addEventListener("mouseover", mouseOnMe);
// let tagHeaderOne;
// let tagHeaderTwo;
// let tagHeaderThree;
// function mouseOnMe() {
//   tagHeaderOne = document.createElement("h1");
//   tagHeaderOne.textContent = "Mouse on me";
//   btn.after(tagHeaderOne);
// }
// btn.addEventListener("click", pressedFunc);
// function pressedFunc() {
//   tagHeaderTwo = document.createElement("h1");
//   tagHeaderTwo.textContent = "I was pressed";
//   tagHeaderOne.after(tagHeaderTwo);
//   console.log(tagHeaderTwo);
// }
// btn.addEventListener("mouseout", mouseNotOnMe);
// function mouseNotOnMe() {
//   tagHeaderThree = document.createElement("h1");
//   tagHeaderThree.textContent = "Mouse is not on me";
//   tagHeaderTwo.after(tagHeaderThree);
// }
