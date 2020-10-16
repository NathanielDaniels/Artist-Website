//?===============================
//* DOM
// const slideMenu = document.getElementById("slideMenu");
// const menuButton = document.getElementById("button");
// const menuClose = document.getElementById("close-btn");
// const firstArtist = document.getElementById("firstArtist");
// const secondArtist = document.getElementById("secondArtist");
// const thirdArtist = document.getElementById("thirdArtist");
// const $modelLeft = document.getElementById("modelLeft");
// const $modelRight = document.getElementById("modelRight");
// const $pageMenu = document.getElementById("pageMenu");
// const $userInfo = document.getElementById("userInfo");
// const $mainTitle = document.getElementById("title");

//?===============================
//* GSAP Animations
const $modelLeft = document.getElementById("modelLeft");
const $modelRight = document.getElementById("modelRight");
const $pageMenu = document.getElementById("pageMenu");
const $userInfo = document.getElementById("userInfo");
const $mainTitle = document.getElementById("title");

function animations() {
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
}
animations();
//?===============================
//* Menu Button Click

function menuBtn() {
  const slideMenu = document.getElementById("slideMenu");
  const menuButton = document.getElementById("button");
  const menuClose = document.getElementById("close-btn");

  const firstArtist = document.getElementById("firstArtist");
  const secondArtist = document.getElementById("secondArtist");
  const thirdArtist = document.getElementById("thirdArtist");

  menuButton.addEventListener("click", function() {
    slideMenu.classList.toggle("active");
    firstArtist.style = "filter: blur(4px)";
    secondArtist.style = "filter: blur(4px)";
    thirdArtist.style = "filter: blur(4px)";
  });

  menuClose.addEventListener("click", function() {
    slideMenu.classList.toggle("active");
    firstArtist.style = "filter: blur(0)";
    secondArtist.style = "filter: blur(0)";
    thirdArtist.style = "filter: blur(0)";
  });
}
menuBtn()

//?===============================