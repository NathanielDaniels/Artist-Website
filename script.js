// let button = document.createElement("button");

// let btn = document.getElementById("button");

const slideMenu = document.getElementById("slide-menu");
const button = document.getElementById("button");

button.addEventListener("click", function() {
  slideMenu.classList.toggle("active");
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
