let cartCountData = JSON.parse(localStorage.getItem("cart"));

if (cartCountData === null || cartCountData.length === 0) {
  const cartCount = document.querySelector(".cart-count");
  cartCount.textContent = 0;
} else {
  const cartCount = document.querySelector(".cart-count");
  // to count the total quantity:
  function updateCartCount() {
    const totalQuantity = cartCountData.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
    cartCount.textContent = totalQuantity;
  }
  updateCartCount();
}

