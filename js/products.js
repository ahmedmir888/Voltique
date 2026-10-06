let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.querySelector(".cart-count");
// to count the total quantity:
function updateCartCount() {
  const totalQuantity = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  cartCount.textContent = totalQuantity;
}
updateCartCount();

const productsGrid = document.querySelector(".products-grid");

productsData.forEach((product) => {
  let stars = "";
  for (let i = 0; i < product.rating; i++) {
    stars += `<i class="bx bxs-star"></i>`;
  }

  let productCard = `
  <article class="product-card">
    <div class="product-img">
      <img src="${product.img}" alt="${product.name}">
    </div>

    <div class="product-information">
      <div class="cate-favo">
      <span class="product-category">${product.category}</span>
      <i class="bx bxs-heart add-favorite-icon"></i>
      </div>
      <h2>${product.name}</h2>
      <div class="rate-and-price">
          <div class="stars">
          <span>Rating:</span>
          ${stars}
          </div>
          
          <span class="price">$${product.price}</span>
      </div>
      <div class="product-bottom">

        <button type="button" class="add-cart-btn" data-id="${product.id}">
          Add to Cart
          <i class="bx bx-cart-download"></i>
        </button>
        <a href="details.html?id=${product.id}" class="details-btn">
          View Details
        </a>
      </div>
    </div>
  </article>
    `;
  productsGrid.innerHTML += productCard;
});

function updateCart(product) {
  const existingProduct = cart.find((item) => item.id === product.id);

  if (!existingProduct) {
    cart.push({
      ...product,
      quantity: 1,
    });
  } else {
    existingProduct.quantity++;
  }

  updateCartCount();

  localStorage.setItem("cart", JSON.stringify(cart));
}

const addCartButtons = document.querySelectorAll(".add-cart-btn");

addCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = Number(button.dataset.id);

    const product = productsData.find((product) => product.id === productId);

    updateCart(product);
  });
});
