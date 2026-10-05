let productData = JSON.parse(localStorage.getItem("cart")) || [];

const productDatailsSection = document.querySelector(
  ".product-details-section",
);

const productDetailsContainer = document.querySelector(
  ".product-details-container",
);

function ProductNotFound() {
  return `
    <div class="product-not-found">
      <h2>There is no Products Yet</h2>
    <a href="products.html">Go Buy Somthing 😉</a>
    </div>
  `;
}

if (productData.length === 0) {
  productDetailsContainer.innerHTML = ProductNotFound();
}
