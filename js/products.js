console.log("products.js loaded");
const products = [
  {
    id: 1,
    name: "Victora's Secret Bombshell",
    category: "Eau De Parfum",
    description:
      "A bold and captivating fragrance with floral and fruity notes that leaves a lasting impression.",
    price: 7000,
    rating: 5,
    image: "images/bombshell.jpg",
  },

  {
    id: 2,
    name: "Yves Saint Laurent Black Opium",
    category: "Eau de Parfum",
    description:
      "A bold floral gourmand fragrance with coffee, vanilla, and white flower notes.",
    price: 26000,
    rating: 4,
    image: "images/blackOpium.jpg",
  },

  {
    id: 3,
    name: "Dolce & Gabbana Devotion",
    category: "Eau de Parfum",
    description:
      "A warm gourmand fragrance with candied citrus, orange blossom, and vanilla notes.",
    price: 8539,
    rating: 5,
    image: "images/d&bEDT.jpg",
  },
  {
    id: 4,
    name: "The Body Shop White Musk Perfume Oil",
    category: "Perfume Oil",
    description:
      "A gentle floral musk fragrance with a clean and elegant scent.",
    price: 2636,
    rating: 4,
    image: "images/whiteMusk.jpg",
  },

  {
    id: 5,
    name: "Hermès Eau des Merveilles",
    category: "Eau de Cologne",
    description:
      "A fresh woody fragrance with citrus, amber, and floral notes.",
    price: 11600,
    rating: 4,
    image: "images/eauDesMerveilles.jpg",
  },
  {
    id: 6,
    name: "Chanel Chance Eau Fraîche",
    category: "Eau Fraîche",
    description:
      "A fresh floral fragrance with citrus, jasmine, and woody notes.",
    price: 13500,
    rating: 5,
    image: "images/chanceEauFraiche.jpg",
  },

  {
    id: 7,
    name: "Dior Homme Cologne",
    category: "Eau de Cologne",
    description:
      "A refreshing fragrance with citrus, floral, and clean musk notes.",
    price: 18500,
    rating: 4,
    image: "images/diorHommeCologne.jpg",
  },

  {
    id: 8,
    name: "Jean Paul Gaultier Scandal",
    category: "Eau De Parfum",
    description:
      "A sweet floral fragrance with honey, gardenia, and patchouli notes.",
    price: 8469,
    rating: 4,
    image: "images/scandal.jpg",
  },

  {
    id: 9,
    name: "Chanel Coco Mademoiselle Intense",
    category: "Eau de Parfum Intense",
    description:
      "A rich amber-floral fragrance with citrus, rose, patchouli, and vanilla notes.",
    price: 22900,
    rating: 4,
    image: "images/chanelCoco.jpg",
  },

  {
    id: 10,
    name: "Givenchy Irresistible",
    category: "Eau De Parfum",
    description:
      "A fresh floral-woody fragrance with rose, pear, and musk notes.",
    price: 12100,
    rating: 5,
    image: "images/irresistible.jpg",
  },

  {
    id: 11,
    name: "Tom Ford Black Orchid Parfum",
    category: "Parfum",
    description:
      "A rich floral fragrance with black orchid, dark chocolate, and warm spice notes.",
    price: 18000,
    rating: 4,
    image: "images/blackOrchid.jpg",
  },

  {
    id: 12,
    name: "Victoria's Secret Pure Seduction Fragrance Mist",
    category: "Body Mist",
    description:
      "A sweet fruity fragrance with plum, freesia, and fresh melon notes.",
    price: 1619,
    rating: 5,
    image: "images/pureSeduction.jpg",
  },

  {
    id: 13,
    name: "Chanel N°5 Parfum",
    category: "Parfum",
    description:
      "A classic floral fragrance with jasmine, rose, and soft vanilla notes.",
    price: 16750,
    rating: 3,
    image: "images/chanelNo5.jpg",
  },
  {
    id: 14,
    name: "Bvlgari Omnia Amethyste",
    category: "Eau de Toilette",
    description:
      "A fresh floral fragrance with delicate iris, rose, and woody notes.",
    price: 3750,
    rating: 5,
    image: "images/bvlgari.jpg",
  },

  {
    id: 15,
    name: "Lancôme Idôle Aura",
    category: "Eau de Parfum",
    description:
      "A fresh floral fragrance with rose, jasmine, and soft musk notes.",
    price: 7649,
    rating: 5,
    image: "images/idôleAura.jpg",
  },

  {
    id: 16,
    name: "Dior Addict Eau Fraîche",
    category: "Eau Fraîche",
    description:
      "A fresh floral fragrance with grapefruit, freesia, and white musk notes.",
    price: 6300,
    rating: 5,
    image: "images/diorAddict.jpg",
  },
  {
    id: 17,
    name: "Tom Ford Lost Cherry",
    category: "Eau de Parfum",
    description:
      "A warm fruity fragrance with black cherry, almond, and tonka bean notes.",
    price: 31496,
    rating: 5,
    image: "images/lostCherry.jpg",
  },

  {
    id: 18,
    name: "Paco Rabanne Pure XS",
    category: "Eau de Parfum",
    description:
      "A warm oriental fragrance with vanilla, ylang-ylang, and sandalwood notes.",
    price: 6200,
    rating: 5,
    image: "images/pureXS.jpg",
  },
  {
    id: 19,
    name: "Dolce & Gabbana Light Blue",
    category: "Eau de Toilette",
    description:
      "A fresh fruity fragrance with lemon, apple, and cedarwood notes.",
    price: 8869,
    rating: 4,
    image: "images/lightBlue.jpg",
  },

  {
    id: 20,
    name: "Lancôme La Vie Est Belle L’Extrait",
    category: "Extrait de Parfum",
    description:
      "A luxurious sweet fragrance with iris, jasmine, and vanilla notes.",
    price: 17679,
    rating: 4,
    image: "images/laVieEstBelle.jpg",
  },

  {
    id: 21,
    name: "Victoria's Secret Love Spell Fragrance Mist",
    category: "Body Mist",
    description:
      "A fruity floral mist with cherry blossom, peach, and aloe vera notes.",
    price: 1619,
    rating: 5,
    image: "images/loveSpell.jpg",
  },

  {
    id: 22,
    name: "Acqua di Parma Rosa Nobile",
    category: "Eau de Parfum",
    description:
      "A delicate floral fragrance with rose, violet, and musk notes.",
    price: 15500,
    rating: 3,
    image: "images/rosaNobile.jpg",
  },

  {
    id: 23,
    name: "Narciso Rodriguez For Her Pure Musc",
    category: "Perfume Oil",
    description: "A soft musky fragrance with floral and powdery notes.",
    price: 83800,
    rating: 4,
    image: "images/pureMusc.jpg",
  },
  {
    id: 24,
    name: "Prada Paradoxe",
    category: "Eau de Parfum",
    description:
      "A modern floral fragrance with neroli, jasmine, amber, and musk notes",
    price: 11040,
    rating: 5,
    image: "images/pradaParadoxe.jpg",
  },

  {
    id: 25,
    name: "Valentino Donna Born In Roma",
    category: "Eau de Parfum",
    description:
      "A strong fruity fragrance with bergamot, jasmine sambac, and vanilla notes.",
    price: 9550,
    rating: 4,
    image: "images/valentinoDonna.jpg",
  },
];

// Generate Star Rating
function generateStars(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

// Create Product Card
function createProductCard(product) {
  return `
    <div class="box" data-id="${product.id}">
        <div class="box-content">
            <div class="box-pic">
              <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-info">
                <h3 class="product-name">
                    ${product.name}
                </h3>
                <p class="category">
                    ${product.category}
                </p>
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
            </div>

            <hr>
            <div class="box-footer">
                <span class="price">
                    ₹${product.price}
                </span>
                ${getCartControls(product.id)}    
            </div>
        </div>
    </div>
    `;
}

function getCartControls(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find((product) => product.id === id);
  if (!item) {
    return `
            <button class="buy-btn add-cart" data-id="${id}">
                Add to Cart
            </button>
        `;
  }

  return `
        <div class="product-cart-controls">
            <button class="minus-btn" data-id="${id}">−</button>
            <span>${item.quantity}</span>
            <button class="plus-btn" data-id="${id}">+</button>
        </div>
    `;
}

// Render Products
function renderProducts(productList = products) {
  const container = document.getElementById("productContainer");
  if (!container) return;
  container.innerHTML = productList.map(createProductCard).join("");
  attachCartButtons();
}

function attachCartButtons() {
  document.querySelectorAll(".buy-btn").forEach((button) => {
    button.onclick = () => {
      addToCart(Number(button.dataset.id));
    };
  });
  document.querySelectorAll(".plus-btn").forEach((button) => {
    button.onclick = () => {
      increaseQuantity(Number(button.dataset.id));
    };
  });
  document.querySelectorAll(".minus-btn").forEach((button) => {
    button.onclick = () => {
      decreaseQuantity(Number(button.dataset.id));
    };
  });
}

window.refreshProducts = function () {
  renderProducts();
};
