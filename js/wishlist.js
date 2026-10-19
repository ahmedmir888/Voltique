let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

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

wishlistGrid.addEventListener("click", (event) => {
  const favoriteIcon = event.target.closest(".add-favorite-icon");

  if (!favoriteIcon) return;

  const productId = Number(favoriteIcon.dataset.id);

  favorites = favorites.filter((id) => Number(id) !== productId);

  localStorage.setItem("favorites", JSON.stringify(favorites));

  renderWishlist();
});

renderWishlist();
