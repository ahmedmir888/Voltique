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

function renderingProducts(productsData) {
  productsGrid.innerHTML = "";
  if (productsData.length === 0) {
    productsGrid.innerHTML = `
    <div class="product-showing-no-result">
    <p class="product-no-results">There is no product in this name please Search Again</p>
    </div>
    `;
    return;
  }
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
            Add to Cart <i class='bx bx-cart-download'></i>
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
}

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

renderingProducts(productsData);

const searchProductsInput = document.querySelector(".search-products-input");
const searchProductsIcon = document.querySelector(".search-products-icon");

// Search For Products Func
function searchForProducts() {
  let searchValue = searchProductsInput.value.toLowerCase().trim();

  if (searchValue === "") {
    renderingProducts(productsData);
    return;
  }

  const filteredProducts = productsData.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue)
    );
  });
  renderingProducts(filteredProducts);
}

const selectProducts = document.querySelector(".select-product-sort");

// Products Sorting Func
function productsSorting(productsData) {
  selectProducts.addEventListener("change", () => {
    if (selectProducts.value === "default") {
      renderingProducts(productsData);
    } else if (selectProducts.value === "price-low") {
      let sortProductsData = [...productsData].sort(
        (a, b) => a.price - b.price,
      );
      renderingProducts(sortProductsData);
    } else if (selectProducts.value === "price-high") {
      let sortProductsData = [...productsData].sort(
        (a, b) => b.price - a.price,
      );
      renderingProducts(sortProductsData);
    } else if (selectProducts.value === "rating") {
      let sortProductsData = [...productsData].sort(
        (a, b) => b.rating - a.rating,
      );
      renderingProducts(sortProductsData);
    } else if (selectProducts.value === "name-az") {
      let sortProductsData = [...productsData].sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      renderingProducts(sortProductsData);
    } else if (selectProducts.value === "name-za") {
      let sortProductsData = [...productsData].sort((a, b) =>
        b.name.localeCompare(a.name),
      );
      renderingProducts(sortProductsData);
    }
  });
}

const selectCategoryOption = document.querySelector(".select-category-options");

function filterBaseOnCategory(productsData) {
  selectCategoryOption.addEventListener("change", () => {
    if (selectCategoryOption.value === "all") {
      renderingProducts(productsData);
    } else if (selectCategoryOption.value === "smartphone") {
      let theFilteredProduct = productsData.filter(
        (prodcut) =>
          prodcut.category.toLowerCase() ===
          selectCategoryOption.value.toLowerCase(),
      );
      renderingProducts(theFilteredProduct);
    } else if (selectCategoryOption.value === "laptop") {
      let theFilteredProduct = productsData.filter(
        (prodcut) =>
          prodcut.category.toLowerCase() ===
          selectCategoryOption.value.toLowerCase(),
      );
      renderingProducts(theFilteredProduct);
    } else if (selectCategoryOption.value === "television") {
      let theFilteredProduct = productsData.filter(
        (prodcut) =>
          prodcut.category.toLowerCase() ===
          selectCategoryOption.value.toLowerCase(),
      );
      renderingProducts(theFilteredProduct);
    } else if (selectCategoryOption.value === "audio") {
      let theFilteredProduct = productsData.filter(
        (prodcut) =>
          prodcut.category.toLowerCase() ===
          selectCategoryOption.value.toLowerCase(),
      );
      renderingProducts(theFilteredProduct);
    } else if (selectCategoryOption.value === "accessories") {
      let theFilteredProduct = productsData.filter(
        (prodcut) =>
          prodcut.category.toLowerCase() ===
          selectCategoryOption.value.toLowerCase(),
      );
      renderingProducts(theFilteredProduct);
    }
  });
}
filterBaseOnCategory(productsData);

productsGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".add-cart-btn");
  if (!button) return;
  const productId = Number(button.dataset.id);
  const product = productsData.find((item) => item.id === productId);
  if (!product) return;
  updateCart(product);
});

searchProductsIcon.onclick = function () {
  searchForProducts();
};
searchProductsInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchForProducts();
  }
});
productsSorting(productsData);
