//?===============================
//* DOM
const slideMenu = document.getElementById("slideMenu");
const menuButton = document.getElementById("button");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const menuClose = document.getElementById("close-btn");
const $modelLeft = document.getElementById("modelLeft");
const $modelRight = document.getElementById("modelRight");
const $pageMenu = document.getElementById("pageMenu");
const $userInfo = document.getElementById("userInfo");
const $mainTitle = document.getElementById("title");

//?===============================
//* GSAP Animations

TweenLite.from($modelLeft, 1.2, { y: 900, opacity: 0, ease: Power2.easeInOut });
TweenLite.from($modelRight, 1.2, {
  y: -900,
  opacity: 0,
  ease: Power1.easeInOut
});
TweenLite.from($userInfo, 1, {
  delay: 1.1,
  x: 300,
  opacity: 0,
  ease: Power2.easeInOut
});
TweenLite.from($pageMenu, 1, {
  delay: 1.1,
  x: -300,
  opacity: 0,
  ease: Power2.easeInOut
});
TweenLite.from($mainTitle, 1, {
  delay: 1.6,
  x: -300,
  opacity: 0,
  ease: Power2.easeInOut
});
TweenLite.from(menuButton, 1, {
  delay: 1.6,
  x: 300,
  opacity: 0,
  ease: Power2.easeInOut
});
TweenLite.from(first, 2, { delay: 0.3, opacity: 0, ease: Power2.easeInOut });

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

//?========================================
