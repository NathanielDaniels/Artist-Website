let h1 = document.getElementById("title");

h1.innerText = "Javascript done be taking over, son!";

let button = document.createElement("button");

button.innerText = "Don't Click Me";

h1.append(button);

button.addEventListener("click", function() {
  h1.classList.toggle("active");
  if (h1.classList == "title active") {
    this.innerText = "Clicked";
    h1.innerText = "You Clicked The Button!!";
  } else {
    this.innerText = "Click Me Again!";
  }
});
