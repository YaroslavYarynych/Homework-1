// Завдання №1
$(function () {
  $("h2.head")
    .css("background-color", "green")
    .find("span")
    .css("font-size", "35px");
});
//---------------------------------------------------------

// Завдання №2
// $(function () {
//   let link = $("a").attr("href");
//   const regex = /^(https)/;
//   if (link.match(regex)) {
//     $("a").prop("target", "_blank");
//   } else {
//     alert("This link is not have enough security");
//   }
// });
//---------------------------------------------------------

// Завдання №3
// $(function () {
//   $("h3").first().before($("div").first());
//   $("h3").last().before($("div").last());
// });
//---------------------------------------------------------

// Завдання №4
// $(function () {
//   let allInput = $("input");
//   allInput.on("click", function () {
//     if (allInput.filter(":checked").length > 2) {
//       allInput.attr("disabled", true);
//     }
//   });
// });
