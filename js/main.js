const menuIcon = document.querySelector(".nav-icons .menu-icon");
const navUlLinks = document.querySelector(".nav .links");

const searchIcon = document.querySelector(".search-box .search-btn");
const inputSearch = document.querySelector(".search-box input");

menuIcon.onclick = function () {
  navUlLinks.classList.toggle("open");
  menuIcon.classList.toggle("bx-menu");
  menuIcon.classList.toggle("bx-x");
};

searchIcon.onclick = function () {
  inputSearch.classList.toggle("open");
};

