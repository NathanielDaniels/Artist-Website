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

//?===============================
//* GSAP Animations
const $modelLeft = document.getElementById("modelLeft");
const $modelRight = document.getElementById("modelRight");
const $pageMenu = document.getElementById("pageMenu");
const $userInfo = document.getElementById("userInfo");

TweenLite.from($modelLeft, 1.5, { y: 800, opacity: 0 });
TweenLite.from($modelRight, 1.5, { y: -800, opacity: 0 });
TweenLite.from($userInfo, 1, { delay: 1.8, x: 200, opacity: 0 });
TweenLite.from($pageMenu, 1, { delay: 1.8, x: -200, opacity: 0 });

//?===============================

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

// const colors = ["red", "yellow", "blue", "green"];

// for (let i of colors) {
//   console.log(i);
// }
