//---------------------------------------------------------
function titleCase(str) {
  let firstL = "";
  let lowerWord = "";
  let result = "";
  let string = str.split(" ");
  for (let i of string) {
    firstL = i.slice(0, 1).toUpperCase();
    lowerWord = i.slice(1).toLowerCase();
    result += firstL.concat(lowerWord) + " ";
  }
  return result.trim();
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
//---------------------------------------------------------

// Завдання №4
