let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartIcon = document.getElementById("cartIcon");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");

cartIcon?.addEventListener("click", () => {
  cartSidebar.classList.add("active");
});

closeCart?.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("increase")) {
    increaseQuantity(Number(e.target.dataset.id));
  }

  if (e.target.classList.contains("decrease")) {
    decreaseQuantity(Number(e.target.dataset.id));
  }

  if (e.target.closest(".remove-item")) {
    removeItem(Number(e.target.closest(".remove-item").dataset.id));
  }
});

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }
  saveCart();
  renderCart();
  window.refreshProducts();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");
  if (!cartItems) return;
  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
    count += item.quantity;
    cartItems.innerHTML += `
<div class="cart-item">
    <img src="${item.image}" width="70">
    <div class="cart-details">
        <h4>${item.name}</h4>
        <p>₹${item.price} × ${item.quantity} = <strong>₹${item.price * item.quantity}</strong></p>
        <div class="cart-controls">
            <button class="decrease" data-id="${item.id}">−</button>
            <span>${item.quantity}</span>
            <button class="increase" data-id="${item.id}">+</button>
            <button class="remove-item" data-id="${item.id}">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    </div>
</div>
`;
  });
  let summary = "";

  cart.forEach((item) => {
    summary += `
        <div class="summary-row">
            <span>${item.name}</span>
            <span>₹${item.price * item.quantity}</span>
        </div>
    `;
  });
  document.getElementById("cartTotalSection").innerHTML = `
   <h3>Order Summary</h3>
   ${summary}
   <hr>
   <div class="summary-row total">
       <strong>Subtotal</strong>
       <strong>₹${total}</strong>
    </div>
`;
  cartCount.textContent = count;
}

renderCart();

window.refreshProducts();

function increaseQuantity(id) {
  const item = cart.find((product) => product.id === id);
  if (item) {
    item.quantity++;
    saveCart();
    renderCart();
    window.refreshProducts();
  }
}

function decreaseQuantity(id) {
  const item = cart.find((product) => product.id === id);
  if (!item) return;
  item.quantity--;
  if (item.quantity <= 0) {
    cart = cart.filter((product) => product.id !== id);
  }
  saveCart();
  renderCart();
  window.refreshProducts();
}

function removeItem(id) {
  cart = cart.filter((product) => product.id !== id);
  saveCart();
  renderCart();
  window.refreshProducts();
}
