const productId = Number(new URLSearchParams(window.location.search).get("id"));

const product = productsData.find((product) => product.id === productId);

let cartData = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.querySelector(".cart-count");
// Cart Count Fun to count the total quantity:
function updateCartCount() {
  const totalQuantity = cartData.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  cartCount.textContent = totalQuantity;
}
updateCartCount();

const productDetailsContainer = document.querySelector(
  ".product-details-container",
);

function productNotFound() {
  return `
    <div class="product-not-found">
      <h2>${translations[currentLanguage].productNotFound}</h2>
      <a href="products.html">
        ${translations[currentLanguage].goBuySomething}
      </a>
    </div>
  `;
}

const productDetailsImg = document.querySelector(".product-details-image");
const productCategory = document.querySelector(".product-category");
const productName = document.querySelector(".product-name");
const productDescription = document.querySelector(".product-description");
const productPrice = document.querySelector(".product-price");
const addToCartBtn = document.querySelector(".details-add-cart-btn");

function renderProductDetails() {
  if (!product) {
    productDetailsContainer.innerHTML = productNotFound();
  } else {
    productDetailsImg.src = product.img;

    productCategory.textContent = translateCategory(product.category);

    productName.textContent =
      translations[currentLanguage].productNames[product.id];

    productDescription.replaceChildren();

    const description =
      translations[currentLanguage].productDescriptions[product.id];

    description
      .split(/[,،;]\s*/)
      .filter((specification) => specification.trim() !== "")
      .forEach((specification) => {
        const row = document.createElement("div");
        row.classList.add("specification-row");
        row.textContent = specification.trim();

        productDescription.appendChild(row);
      });

    productPrice.textContent = `${translations[currentLanguage].productPrice} = $${product.price}`;
  }
}

renderProductDetails();

// Adding Toast Notification

const toastedContainer = document.querySelector(".toasted-container");

const toast = document.createElement("div");
toast.className = "toast";

const toastMessage = document.createElement("p");
toastMessage.className = "toast-message";
toast.appendChild(toastMessage);

toastedContainer.appendChild(toast);

let toastTimer;

function showToast(message) {
  toastMessage.innerHTML = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

addToCartBtn.addEventListener("click", () => {
  const existingProduct = cartData.find((item) => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cartData.push({
      ...product,
      quantity: 1,
    });
  }
  showToast(
    `<i class='bx bxs-check-square'></i> ${
      translations[currentLanguage].productNames[product.id]
    } ${translations[currentLanguage].toastAddedToCart}`,
  );

  updateCartCount();

  localStorage.setItem("cart", JSON.stringify(cartData));
});
