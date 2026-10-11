let cartData = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.querySelector(".cart-count");
// to count the total quantity:
function updateCartCount() {
  const totalQuantity = cartData.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  cartCount.textContent = totalQuantity;
}
updateCartCount();

const checkoutItemsContainer = document.querySelector(".checkout-items");

const checkoutSectionContainer = document.querySelector(
  ".checkout-section .container",
);
function showemptyCheckout() {
  return `
  <div class="empty-checkout-div"> 
    <h2 class="empty-checkout-text">Your Cart Is Empty !!!</h2>
    <a href="products.html" class="continue-checkout-shopping">Continue Shopping <i class='bx bxs-chevrons-right checkout-shopping-icon' ></i></a>
  </div>
  `;
}
const checkoutTotalPrice = document.querySelector(".checkout-total-price");

if (cartData.length === 0) {
  checkoutSectionContainer.innerHTML = showemptyCheckout();
} else {
  cartData.forEach((product) => {
    let checkoutItem = `
    <div class="checkout-item"> 
        <h4 class="checkout-item-name">${product.name}</h4>
        <span class="checkout-item-price">$${product.price}</span> 
        <span class="checkout-item-quantity">Qty: ${product.quantity}</span>
    </div>
    `;  
    checkoutItemsContainer.innerHTML += checkoutItem;
  });
  let checkoutTotal = 0;
  for (let i = 0; i < cartData.length; i++) {
    checkoutTotal += cartData[i].price * cartData[i].quantity;
  }
  checkoutTotalPrice.textContent = `$${checkoutTotal}`;
}
