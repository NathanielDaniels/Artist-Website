// let button = document.createElement("button");

// let btn = document.getElementById("button");

const slideMenu = document.getElementById("slide-menu");
const button = document.getElementById("button");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

button.addEventListener("click", function() {
  slideMenu.classList.toggle("active");
  first.style = "filter: blur(4px)";
  second.style = "filter: blur(4px)";
  third.style = "filter: blur(4px)";
  // if (slideMenu.classList == "slide-menu active") {
  //   this.style.backgroundColor = "yellow";
  // } else {
  //   this.style.backgroundColor = "";
  // }
});

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener("click", function(e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth"
//     });
//   });
// });

//========================================
let c = [1, 2];

function add(array, element) {
  array = [element];
  console.log(`new array = ${array}`);
}

add(c, 4);

console.log(c);
