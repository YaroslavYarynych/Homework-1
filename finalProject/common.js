export default {
  rows: null,
  colums: null,
};
let turns = 0;
export let currentTile;
export let otherTile;
const dragStart = (e) => {
  currentTile = e.target;
};

const dragOver = (e) => {
  e.preventDefault();
};

const dragEnter = (e) => {
  e.preventDefault();
};

const dragLeave = () => {};

const dragDrop = (e) => {
  otherTile = e.target;
};
function result() {
  let container = document.querySelectorAll(".container")[0];
  let element = document.getElementById("praise");
  if (turns >= 25 && turns <= 30) {
    element.textContent = "Excellent!";
    container.after(element);
  } else if (turns > 30 && turns <= 50) {
    element.textContent = "Good!";
    container.after(element);
  } else if (turns > 50) {
    element.textContent = "You can do better!!!!!";
    container.after(element);
  }
}
const check = () => {
  let board = document.getElementById("board");
  let image = board.getElementsByTagName("img");
  for (let i = 0; i < image.length; i++) {
    if (image[i].src.includes("blank")) {
      return false;
    }
  }
  return true;
};
const dragEnd = () => {
  if (currentTile.src.includes("blank")) {
    return;
  }
  let curImg = currentTile.src;
  let otherImg = otherTile.src;
  currentTile.src = otherImg;
  otherTile.src = curImg;
  turns += 1;
  document.getElementById("turns").innerText = turns;

  if (check()) {
    result();
    let cont = document.querySelector(".donate");
    let text = document.createElement("p");
    text.textContent =
      "You have already finished this game? Donate for Ukrainian army:";
    let link = document.createElement("a");
    link.href = "https://savelife.in.ua/en/donate-en/#donate-army-card-monthly";
    link.textContent = "Click here to donate";
    cont.appendChild(text);
    cont.appendChild(link);
    link.style.textDecoration = "none";
    link.style.fontSize = "24px";
    text.style.fontSize = "24px";
  }
};

export {
  dragStart,
  dragOver,
  dragEnter,
  dragLeave,
  dragDrop,
  check,
  dragEnd,
  result,
};
