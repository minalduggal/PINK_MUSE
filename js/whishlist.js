let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function isWishlisted(id) {
  return wishlist.some((item) => item.id === id);
}

function toggleWishlist(id) {
  const exists = wishlist.find((item) => item.id === id);
  if (exists) {
    wishlist = wishlist.filter((item) => item.id !== id);
  } else {
    const product = products.find((item) => item.id === id);
    wishlist.push(product);
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
  renderProducts();
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("wishlist-btn")) {
    toggleWishlist(Number(e.target.dataset.id));
  }
});

function updateWishlistCount() {
  const count = document.getElementById("wishlistCount");
  if (count) {
    count.textContent = wishlist.length;
  }
}
