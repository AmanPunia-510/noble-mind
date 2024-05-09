const Menu_Bar = document.querySelector(".menubar");
let nav_items = document.querySelector(".navbar-items");

Menu_Bar.addEventListener("click", () => {
  nav_items.classList.toggle("left-0");

  const body = document.querySelector("body");

  if (nav_items.classList.contains("left-0")) {
    body.style.position = "fixed";
    body.style.left = "0";
    body.style.top = "0";
    body.style.width = "100%";
  }
  else {
    body.style.position = "unset";
  }
})
