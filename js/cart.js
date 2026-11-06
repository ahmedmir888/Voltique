let cartData = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cartData));
}

const cartCount = document.querySelector(".cart-count");

function updateCartCount() {
  const totalQuantity = cartData.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  cartCount.textContent = totalQuantity;
}

const cartSection = document.querySelector(".cart-section");

let summaryTotalPrice;

function updateCartSummary() {
  if (!summaryTotalPrice) return;

  let totalResult = cartData.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  summaryTotalPrice.textContent = `$${totalResult}`;
}

function updateCartUI() {
  updateCartSummary();
  updateCartCount();
}

function showEmptyCart() {
  return `
    <div class="empty-cart-div"> 
      <h2 class="empty-cart-text">${translations[currentLanguage].emptyCart}</h2>
      <a href="products.html" class="continue-cart-shopping">
        <span>${translations[currentLanguage].continueShopping}</span>
        <i class='bx bxs-chevrons-right cart-shopping-icon'></i>
      </a>
    </div>
  `;
}

// Render Cart
function renderCart() {
  cartSection.innerHTML = "";
  summaryTotalPrice = null;

  if (cartData.length === 0) {
    cartSection.innerHTML = showEmptyCart();
    updateCartCount();
    return;
  }

  // Items Container
  const itemsContainer = document.createElement("div");
  itemsContainer.className = "items-container";
  cartSection.appendChild(itemsContainer);

  cartData.forEach((product) => {
    let itemTotalPrice = product.price * product.quantity;

    let cartItem = `
      <div class="cart-item" data-id="${product.id}"> 
        <div class="item-img">
          <img src="${product.img}" alt="${translations[currentLanguage].productNames[product.id]}">
        </div>

        <div class="item-info">
          <h4>${translations[currentLanguage].productNames[product.id]}</h4>
          <p>${translateCategory(product.category)}</p>
        </div>

        <div class="item-buy-info">
          <span class="item-price">
            <span>${translations[currentLanguage].price}</span>
            $${product.price}
          </span>

          <div class="item-quantity">
            <button class="decrease-quantity" data-id="${product.id}">-</button>
            <span>${product.quantity}</span>
            <button class="increase-quantity" data-id="${product.id}">+</button>
          </div>

          <span class="item-total-price">$${itemTotalPrice}</span>

          <button class="delete-from-cart-btn" data-id="${product.id}">
            <i class='bx bxs-trash'></i>
          </button>
        </div>
      </div>
    `;

    itemsContainer.innerHTML += cartItem;
  });

  // Cart Summary
  const cartSummay = document.createElement("div");
  cartSummay.className = "cart-summary";
  cartSection.appendChild(cartSummay);

  const summaryTitle = document.createElement("h3");
  summaryTitle.className = "summary-title";
  summaryTitle.textContent = translations[currentLanguage].orderSummary;

  const subTotal = document.createElement("div");
  subTotal.className = "sub-total-div";

  const itemSubTotalSpan = document.createElement("span");
  itemSubTotalSpan.textContent = translations[currentLanguage].itemsSubtotal;

  summaryTotalPrice = document.createElement("span");
  summaryTotalPrice.className = "summary-total-price";

  const shipping = document.createElement("div");
  shipping.className = "shipping-div";

  const shippingSpan = document.createElement("span");
  shippingSpan.textContent = translations[currentLanguage].shipping;

  const shippingLink = document.createElement("a");
  shippingLink.textContent = translations[currentLanguage].free;

  const cartProceed = document.createElement("button");
  cartProceed.className = "cart-proceed-btn";
  cartProceed.textContent = translations[currentLanguage].proceedToCheckout;

  cartProceed.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  const continueShoppingLink = document.createElement("a");
  continueShoppingLink.href = "products.html";
  continueShoppingLink.className = "continue-shopping-link";
  continueShoppingLink.textContent =
    translations[currentLanguage].continueShoppingOr;

  const clearCartBtn = document.createElement("button");
  clearCartBtn.className = "clear-cart-btn";
  clearCartBtn.innerHTML = `
    <span>${translations[currentLanguage].clearCart}</span>
    <i class='bx bxs-trash'></i>
  `;

  cartSummay.appendChild(summaryTitle);
  cartSummay.appendChild(subTotal);

  subTotal.appendChild(itemSubTotalSpan);
  subTotal.appendChild(summaryTotalPrice);

  cartSummay.appendChild(shipping);

  shipping.appendChild(shippingSpan);
  shipping.appendChild(shippingLink);

  cartSummay.appendChild(cartProceed);
  cartSummay.appendChild(continueShoppingLink);
  cartSummay.appendChild(clearCartBtn);

  updateCartUI();

  // Increase Quantity
  const increaseQuantity = document.querySelectorAll(".increase-quantity");

  increaseQuantity.forEach((btn) => {
    btn.addEventListener("click", () => {
      const btnId = Number(btn.dataset.id);
      const cartItem = cartData.find((item) => item.id === btnId);

      cartItem.quantity++;

      saveCart();
      renderCart();
    });
  });

  // Decrease Quantity
  const decreaseQuantity = document.querySelectorAll(".decrease-quantity");

  decreaseQuantity.forEach((btn) => {
    btn.addEventListener("click", () => {
      const btnId = Number(btn.dataset.id);
      const cartItem = cartData.find((item) => item.id === btnId);

      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      } else if (cartItem.quantity === 1) {
        cartData = cartData.filter((item) => item.id !== cartItem.id);
      }

      saveCart();
      renderCart();
    });
  });

  // Delete Product
  const trashCartBtn = document.querySelectorAll(".delete-from-cart-btn");

  trashCartBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const trashBtnId = Number(btn.dataset.id);

      cartData = cartData.filter((item) => item.id !== trashBtnId);

      saveCart();
      renderCart();
    });
  });

  // Clear Cart
  clearCartBtn.addEventListener("click", () => {
    cartData = [];

    saveCart();
    renderCart();
  });
}

// Initial Rendering
renderCart();
