//?===============================
//* DOM
const slideMenu = document.getElementById("slideMenu");
const menuButton = document.getElementById("button");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const menuClose = document.getElementById("close-btn");

//?===============================
//* GSAP Animations
const $modelLeft = document.getElementById("modelLeft");
const $modelRight = document.getElementById("modelRight");
const $pageMenu = document.getElementById("pageMenu");
const $userInfo = document.getElementById("userInfo");
const $mainTitle = document.getElementById("title");

TweenLite.from($modelLeft, 1.2, { y: 900, opacity: 0 });
TweenLite.from($modelRight, 1.2, { y: -900, opacity: 0 });
TweenLite.from($userInfo, 1, { delay: 1.4, x: 300, opacity: 0 });
TweenLite.from($pageMenu, 1, { delay: 1.4, x: -300, opacity: 0 });
TweenLite.from($mainTitle, 1, { delay: 2.2, x: -300, opacity: 0 });
TweenLite.from(menuButton, 1, { delay: 2.2, x: 300, opacity: 0 });
TweenLite.from(first, 1, { delay: 0.3, opacity: 0 });

//?===============================
//* Menu Button Click

menuButton.addEventListener("click", function() {
  slideMenu.classList.toggle("active");
  first.style = "filter: blur(4px)";
  second.style = "filter: blur(4px)";
  third.style = "filter: blur(4px)";
});

menuClose.addEventListener("click", function() {
  slideMenu.classList.toggle("active");
  first.style = "filter: blur(0)";
  second.style = "filter: blur(0)";
  third.style = "filter: blur(0)";
});

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
