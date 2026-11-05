let cartCountData = JSON.parse(localStorage.getItem("cart"));

if (cartCountData === null || cartCountData.length === 0) {
  const cartCount = document.querySelector(".cart-count");
  cartCount.textContent = 0;
} else {
  const cartCount = document.querySelector(".cart-count");
  // to count the total quantity:
  function updateCartCount() {
    const totalQuantity = cartCountData.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
    cartCount.textContent = totalQuantity;
  }
  updateCartCount();
}

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

// Translation Logic

function translateCategory(category) {
  const categoryKeys = {
    Smartphone: "smartphones",
    Laptop: "laptops",
    Television: "televisions",
    Audio: "audio",
    Smartwatch: "accessories",
    Accessories: "accessories",
    gaming: "gaming",
    accessories: "accessories",
  };

  const key = categoryKeys[category];

  return translations[currentLanguage][key] || category;
}

let currentLanguage = localStorage.getItem("language") || "en";
function applyLanguage(language) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[language][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = translations[language][key];
  });
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  const languageToggle = document.querySelector("#language-toggle");

  languageToggle.textContent = language === "en" ? "AR" : "EN";

  currentLanguage = language;

  localStorage.setItem("language", language);
}

const languageToggle = document.querySelector("#language-toggle");

languageToggle.addEventListener("click", () => {
  const newLanguage = currentLanguage === "en" ? "ar" : "en";

  applyLanguage(newLanguage);

  if (typeof renderProductDetails === "function") {
    renderProductDetails();
  }

  if (typeof applyProductsOptions === "function") {
    applyProductsOptions();
  }
});

applyLanguage(currentLanguage);

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    const savedLanguage = localStorage.getItem("language") || "en";

    applyLanguage(savedLanguage);

    if (typeof applyProductsOptions === "function") {
      applyProductsOptions();
    }
    if (typeof renderProductDetails === "function") {
      renderProductDetails();
    }
  }
});
