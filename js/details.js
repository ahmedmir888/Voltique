const productId = Number(new URLSearchParams(window.location.search).get("id"));

const product = productsData.find((product) => product.id === productId);

let cartData = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.querySelector(".cart-count");
function updateCartCount() {
  const totalQuantity = cartData.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  cartCount.textContent = totalQuantity;
}
updateCartCount();

function numberOfStars() {
  let stars = "";
  for (let i = 0; i < product.rating; i++) {
    stars += `<i class="bx bxs-star"></i>`;
  }
  return `Rating : ${stars}`;
}
const productDetailsContainer = document.querySelector(
  ".product-details-container",
);

function productNotFound() {
  return `
    <div class="product-not-found">
      <h2>There is no Products Yet</h2>
    <a href="products.html">Go Buy Somthing 😉</a>
    </div>
  `;
}

const productDetailsImg = document.querySelector(".product-details-image");
const productCategory = document.querySelector(".product-category");
const productName = document.querySelector(".product-name");
const starsNumber = document.querySelector(".stars-number");
const productDescription = document.querySelector(".product-description");
const productPrice = document.querySelector(".product-price");
const addToCartBtn = document.querySelector(".details-add-cart-btn");

if (!product) {
  productDetailsContainer.innerHTML = productNotFound();
} else {
  productDetailsImg.src = product.img;
  productCategory.textContent = product.category;
  productName.textContent = product.name;
  starsNumber.innerHTML = numberOfStars();
  productDescription.textContent = product.description;
  productPrice.textContent = `Product Price = $${product.price}`;
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

  updateCartCount();

  localStorage.setItem("cart", JSON.stringify(cartData));
});
