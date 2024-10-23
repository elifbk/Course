const menu = document.querySelector(".bi-list");
const nav = document.querySelector(".nav-links");
const closeBtn = document.querySelector("#closeBtn");

menu.addEventListener("click", function () {
  nav.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  nav.classList.remove("active");
});
