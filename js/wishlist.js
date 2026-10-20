let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.querySelector(".cart-count");
// Cart Count Fun to count the total quantity:
function updateCartCount() {
  const totalQuantity = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  cartCount.textContent = totalQuantity;
}
updateCartCount();

const wishlistGrid = document.querySelector(".wishlist-grid");

function renderWishlist() {
  wishlistGrid.innerHTML = "";

  const favoriteProducts = productsData.filter((product) =>
    favorites.includes(Number(product.id)),
  );

  if (favoriteProducts.length === 0) {
    wishlistGrid.innerHTML = `
      <div class="wishlist-showing-no-result">
      <p class="wishlist-no-result-content">
      Your wishlist is empty.
      </p>
      <a href="products.html">Explore Products</a>
      </div>
    `;
    return;
  }

  favoriteProducts.forEach((product) => {
    let stars = "";

    for (let i = 0; i < product.rating; i++) {
      stars += `<i class="bx bxs-star"></i>`;
    }

    wishlistGrid.innerHTML += `
      <article class="product-card">
        <div class="product-img">
          <img src="${product.img}" alt="${product.name}">
        </div>

        <div class="product-information">
          <div class="cate-favo">
            <span class="product-category">${product.category}</span>

            <i
              class="bx bxs-heart add-favorite-icon active"
              data-id="${product.id}"
              role="button"
              tabindex="0"
              aria-label="Remove ${product.name} from wishlist"
            ></i>
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
            Add <i class='bx bx-cart-download'></i>
          </button>
          </div>
        </div>
      </article>
    `;
  });
}

// Update Cart Function To Check if the product is exist or no and increase the quantity
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

wishlistGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".add-cart-btn");
  if (!button) return;
  const productId = Number(button.dataset.id);
  const product = productsData.find((item) => item.id === productId);
  if (!product) return;
  updateCart(product);
});

wishlistGrid.addEventListener("click", (event) => {
  const favoriteIcon = event.target.closest(".add-favorite-icon");

  if (!favoriteIcon) return;

  const productId = Number(favoriteIcon.dataset.id);

  favorites = favorites.filter((id) => Number(id) !== productId);

  localStorage.setItem("favorites", JSON.stringify(favorites));

  renderWishlist();
});

renderWishlist();
