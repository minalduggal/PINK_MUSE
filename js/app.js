document.addEventListener("DOMContentLoaded", () => {
  highlightCurrentPage();
  renderProducts();
  initializeSearch();
});

function highlightCurrentPage() {
  const currentPage = window.location.pathname.split("/").pop();

  const links = {
    "index.html": "home-link",
    "shop.html": "shop-link",
    "about.html": "about-link",
    "contactUs.html": "contact-link",
  };

  const active = document.getElementById(links[currentPage]);

  if (active) {
    active.classList.add("active");
  }
}

function initializeSearch() {
  const searchInput = document.getElementById("searchInput");
  const welcomeMessage = document.getElementById("welcomeMessage");
  const Container = document.getElementById("productContainer");

  if (!searchInput) return;

  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();

    if (keyword === "") {
      welcomeMessage.style.display = "block";
      renderProducts(products);
      return;
    }

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword),
    );

    if (filtered.length === 0) {
      if (welcomeMessage) {
        welcomeMessage.classList.add("hide");
      }
      Container.innerHTML = `
        <div class="no-result">
          <h2>No products found !!</h2>
          <p>Try searching something else.</p>
        </div>
      `;
    } else {
      if (welcomeMessage) {
        welcomeMessage.classList.remove("hide");
      }
      renderProducts(filtered);
    }
  });
}
