const menuIcon = document.querySelector(".nav-icons .menu-icon");
const navUlLinks = document.querySelector(".nav .links");

menuIcon.onclick = function () {
  navUlLinks.classList.toggle("open");
  menuIcon.classList.toggle("bx-menu");
  menuIcon.classList.toggle("bx-x");
};


