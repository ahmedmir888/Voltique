let cartData = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cartData));
}

const cartCount = document.querySelector(".cart-count");
// to count the total quantity:
function updateCartCount() {
  const totalQuantity = cartData.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  cartCount.textContent = totalQuantity;
}

const cartSection = document.querySelector(".cart-section");

let summaryTotalPrice;

// function for update total price
function updateCartSummary() {
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
    <h2 class="empty-cart-text">Your Cart Is Empty !!!</h2>
    <a href="products.html" class="continue-cart-shopping">Continue Shopping <i class='bx bxs-chevrons-right cart-shopping-icon' ></i></a>
  </div>
  `;
}

if (cartData.length === 0) {
  cartSection.innerHTML = showEmptyCart();
} else {
  const cartSummay = document.createElement("div");
  cartSummay.className = "cart-summary";
  cartSection.appendChild(cartSummay);

  const summaryTitle = document.createElement("h3");
  summaryTitle.className = "summary-title";
  summaryTitle.textContent = "Order Summary";

  const subTotal = document.createElement("div");
  subTotal.className = "sub-total-div";
  const itemSubTotalSpan = document.createElement("span");
  itemSubTotalSpan.textContent = "Items Subtotal :";

  summaryTotalPrice = document.createElement("span");
  summaryTotalPrice.className = "summary-total-price";

  const shipping = document.createElement("div");
  shipping.className = "shipping-div";
  const shippingSpan = document.createElement("span");
  shippingSpan.textContent = "Shipping :";
  const shippingLink = document.createElement("a");
  shippingLink.textContent = "Free";

  const cartProceed = document.createElement("button");
  cartProceed.className = "cart-proceed-btn";
  cartProceed.textContent = "Proceed To Checkout";
  const continueShoppingLink = document.createElement("a");
  continueShoppingLink.href = "products.html";
  continueShoppingLink.className = "continue-shopping-link";
  continueShoppingLink.textContent = "Or Continue Shopping";

  cartSummay.appendChild(summaryTitle);
  cartSummay.appendChild(subTotal);
  subTotal.appendChild(itemSubTotalSpan);
  subTotal.appendChild(summaryTotalPrice);
  cartSummay.appendChild(shipping);
  shipping.appendChild(shippingSpan);
  shipping.appendChild(shippingLink);
  cartSummay.appendChild(cartProceed);
  cartSummay.appendChild(continueShoppingLink);

  updateCartUI();

  const itemsContainer = document.querySelector(".items-container");
  cartData.forEach((product) => {
    let itemTotalPrice = product.price * product.quantity;

    let cartItem = `
        <div class="cart-item" data-id="${product.id}"> 
            <div class="item-img">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="item-info">
                <h4>${product.name}</h4>
                <p>${product.category}</p>
            </div>
            <div class="item-buy-info">
                <span class="item-price">Price: $${product.price}</span>
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
}

const increaseQuantity = document.querySelectorAll(".increase-quantity");

const decreaseQuantity = document.querySelectorAll(".decrease-quantity");

increaseQuantity.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnId = Number(btn.dataset.id);
    const cartItem = cartData.find((item) => item.id === btnId);
    cartItem.quantity++;
    const cartItemElement = document.querySelector(
      `.cart-item[data-id="${btnId}"]`,
    );
    const spanCartItem = cartItemElement.querySelector(".item-quantity span");

    spanCartItem.textContent = cartItem.quantity;

    const itemTotalPriceElement =
      cartItemElement.querySelector(".item-total-price");
    itemTotalPriceElement.textContent = `$${cartItem.price * cartItem.quantity}`;

    updateCartUI();

    saveCart();
  });
});

decreaseQuantity.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnId = Number(btn.dataset.id);
    const cartItem = cartData.find((item) => item.id === btnId);
    const cartItemElement = document.querySelector(
      `.cart-item[data-id="${btnId}"]`,
    );
    if (cartItem.quantity > 1) {
      cartItem.quantity--;

      const spanCartItem = cartItemElement.querySelector(".item-quantity span");

      spanCartItem.textContent = cartItem.quantity;

      const itemTotalPriceElement =
        cartItemElement.querySelector(".item-total-price");
      itemTotalPriceElement.textContent = `$${cartItem.price * cartItem.quantity}`;

      updateCartUI();
    } else if (cartItem.quantity === 1) {
      cartData = cartData.filter((item) => item.id !== cartItem.id);
      cartItemElement.remove();

      updateCartUI();

      if (cartData.length === 0) {
        cartSection.innerHTML = showEmptyCart();
      }
    }

    saveCart();
  });
});

const trashCartBtn = document.querySelectorAll(".delete-from-cart-btn");

trashCartBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const trashBtnId = Number(btn.dataset.id);
    const cartItem = cartData.find((item) => item.id === trashBtnId);
    cartData = cartData.filter((item) => item.id !== cartItem.id);

    const trashCartItem = document.querySelector(
      `.cart-item[data-id="${trashBtnId}"]`,
    );

    trashCartItem.remove();

    updateCartUI();

    if (cartData.length === 0) {
      cartSection.innerHTML = showEmptyCart();
    }

    saveCart();
  });
});
