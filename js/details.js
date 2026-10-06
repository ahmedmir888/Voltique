const productId = Number(new URLSearchParams(window.location.search).get("id"));
const product = productsData.find((product) => product.id === productId);

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

if (productsData.length === 0) {
  productDetailsContainer.innerHTML = productNotFound();
} else {
  productDetailsImg.src = product.img;
  productCategory.textContent = product.category;
  productName.textContent = product.name;
  starsNumber.innerHTML = numberOfStars();
  productDescription.textContent = product.description;
  productPrice.textContent = `Product Price = $${product.price}`;
}
