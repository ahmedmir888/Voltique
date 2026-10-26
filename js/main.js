const menuIcon = document.querySelector(".nav-icons .menu-icon");
const navUlLinks = document.querySelector(".nav .links");

menuIcon.addEventListener("click", function () {
  if (navUlLinks.classList.contains("open")) {
    // Start closing animation
    navUlLinks.classList.remove("open");
    navUlLinks.classList.add("closing");

    menuIcon.classList.replace("bx-x", "bx-menu");
  } else {
    // Open the menu
    navUlLinks.classList.remove("closing");
    navUlLinks.classList.add("open");

    menuIcon.classList.replace("bx-menu", "bx-x");
  }
});

navUlLinks.addEventListener("animationend", function (event) {
  if (
    event.animationName === "nav-to-up" &&
    navUlLinks.classList.contains("closing")
  ) {
    navUlLinks.classList.remove("closing");
  }
});

const allPagesLink = document.querySelectorAll(".nav .links .link");

const currentPath = window.location.pathname;

allPagesLink.forEach((link) => {
  link.classList.remove("active");
  const linkPath = link.pathname;
  if (currentPath === linkPath) {
    link.classList.add("active");
  }
});

const revealElement = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElement.forEach((element) => {
  observer.observe(element);
});
