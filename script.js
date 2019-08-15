let button = document.createElement("button");

let btn = document.getElementById("button");

const slideMenu = document.getElementById("slide-menu");

button.innerText = "Click for Menu";

btn.append(button);

button.addEventListener("click", function() {
  slideMenu.classList.toggle("active");
  if (slideMenu.classList == "slide-menu active") {
    this.style.backgroundColor = "yellow";
  } else {
    this.style.backgroundColor = "";
  }
});
