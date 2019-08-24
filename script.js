const slideMenu = document.getElementById("slide-menu");
const button = document.getElementById("button");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const menuClose = document.getElementById("close-btn");

button.addEventListener("click", function() {
  slideMenu.classList.toggle("active");
  first.style = "filter: blur(4px)";
  // second.style = "filter: blur(4px)";
  // third.style = "filter: blur(4px)";
});

menuClose.addEventListener("click", function() {
  slideMenu.classList.toggle("active");
  first.style = "filter: blur(0)";
});

//*! target document
// // Detect all clicks on the document
// document.addEventListener("click", function(event) {
//   // If user clicks inside the element, do nothing
//   if (event.target.closest(".slide-menu")) return;

//   // If user clicks outside the element, hide it!
//   slideMenu.classList.add(".new");
//   // first.style = "filter: blur(0px)";
// });

//========================================

const colors = ["red", "yellow", "blue", "green"];

for (let i of colors) {
  console.log(i);
}
