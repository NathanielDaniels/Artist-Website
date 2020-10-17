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
//* GSAP Page Change Animation

const $secondArtist = document.querySelector("#secondArtist")
const $logo = document.querySelector('.transition__logo');
const $frameBlack = document.querySelector('.page-transition__black');
const $frameRed = document.querySelector('.page-transition__red');
const $button = document.querySelectorAll('.button');

// console.log($frameBlack, $frameRed)

let tltransition = new TimelineMax({paused:true})
  .fromTo($frameRed , 2.2, {scaleX: 0},{scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut},)
  .fromTo($frameBlack , 2.2, {scaleX: 0},{scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut},.2)
  .fromTo($logo , 1.6, {xPercent: -100, autoAlpha:0 },{xPercent: 0, autoAlpha:1, ease: Power4.easeInOut},.7)
  .set($frameRed, {scaleX:0})
  .set($secondArtist, {autoAlpha:0})
  .to($frameBlack , 2.2, {scaleX: 0, transformOrigin:'right', ease: Power4.easeInOut})
  .to($logo , .2, {autoAlpha:0 },'-=1.2')
  

$button.forEach(button => buttonClick(button))

function buttonClick(button) {
  button.addEventListener('click', () => {
    console.log("button clicked")
    tltransition.play(0);
});
}

//?===============================
//* GSAP Page Item Animations
const $modelLeft = document.getElementById("modelLeft");
const $modelRight = document.getElementById("modelRight");
const $pageMenu = document.getElementById("pageMenu");
const $userInfo = document.getElementById("userInfo");
const $mainTitle = document.getElementById("title");
const menuButton = document.getElementById("button");

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
  TweenLite.from(firstArtist, 2, { delay: 0.3, opacity: 0, ease: Power2.easeInOut });
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
