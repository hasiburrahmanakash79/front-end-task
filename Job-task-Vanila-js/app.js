document.addEventListener('DOMContentLoaded', () => {
    const productData = {
      purple: {
        name: "Classy Modern Smart Watch",
        price: 79.00,
        reviews: "(2 Reviews)",
        description: "I must explain to you how all this mistaken idea of denouncing pleasure was born...",
        image: "images/purple-watch.png"
      },
      black: {
        name: "Elegant Black Watch",
        price: 99.00,
        reviews: "(4 Reviews)",
        description: "The ultimate black watch with a premium strap and advanced features.",
        image: "images/black-watch.png"
      },
      blue: {
        name: "Ocean Blue Smart Watch",
        price: 89.00,
        reviews: "(3 Reviews)",
        description: "Designed for versatility, comfort, and an ocean-inspired look.",
        image: "images/blue-watch.png"
      },
      cyan: {
        name: "Cyan Premium Fitness Band",
        price: 69.00,
        reviews: "(5 Reviews)",
        description: "Stylish cyan band for fitness enthusiasts, designed for all-day comfort.",
        image: "images/cyan-watch.png"
      }
    };
  
    const thumbnail = document.getElementById('product-thumbnail');
    const productName = document.querySelector('.product-name');
    const productPrice = document.querySelector('.product-price');
    const productReviews = document.querySelector('.product-reviews');
    const productDescription = document.querySelector('.product-description');
    const colorButtons = document.querySelectorAll('.color-btn');
    const sizeButtons = document.querySelectorAll('.size-btn');
    const quantityElement = document.getElementById('quantity');
    const addToCartButton = document.getElementById('add-to-cart');
    const checkoutButton = document.getElementById('checkout-button');
    const cartModal = document.getElementById('cart-modal');
    const cartTableBody = document.getElementById('cart-table-body');
    const cartCount = document.getElementById('cart-count');
    const continueShopping = document.getElementById('continue-shopping');
  
    let quantity = 1;
    let cart = [];
  
    // Update product details when color changes
    colorButtons.forEach(button => {
      button.addEventListener('click', () => {
        colorButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const color = button.dataset.color;
  
        // Update product details dynamically
        const product = productData[color];
        thumbnail.src = product.image;
        productName.textContent = product.name;
        productPrice.textContent = `$${product.price.toFixed(2)}`;
        productReviews.textContent = product.reviews;
        productDescription.textContent = product.description;
      });
    });
  
    // Highlight selected size
    sizeButtons.forEach(button => {
      button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  
    // Update quantity
    document.getElementById('increase-quantity').addEventListener('click', () => {
      quantity++;
      quantityElement.textContent = quantity;
    });
  
    document.getElementById('decrease-quantity').addEventListener('click', () => {
      if (quantity > 1) quantity--;
      quantityElement.textContent = quantity;
    });
  
    // Add to cart
    addToCartButton.addEventListener('click', () => {
      const color = document.querySelector('.color-btn.active')?.dataset.color || 'purple';
      const size = document.querySelector('.size-btn.active')?.textContent || 'M';
  
      const product = productData[color];
      cart.push({
        image: product.image,
        name: product.name,
        color,
        size,
        quantity,
        price: product.price,
        total: product.price * quantity
      });
  
      cartCount.textContent = cart.length;
      checkoutButton.classList.remove('hidden');
      renderCart();
    });
  
    // Render cart table
    function renderCart() {
      cartTableBody.innerHTML = cart
        .map((item, index) => `
          <tr>
            <td><img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded"></td>
            <td>${item.name}</td>
            <td>${item.color}</td>
            <td>${item.size}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${item.total.toFixed(2)}</td>
            <td>
              <button data-index="${index}" class="remove-item text-red-500">Remove</button>
            </td>
          </tr>
        `)
        .join('');
    }
  
    // Open and close modal
    checkoutButton.addEventListener('click', () => cartModal.classList.remove('hidden'));
    continueShopping.addEventListener('click', () => cartModal.classList.add('hidden'));
  
    // Remove item from cart
    cartTableBody.addEventListener('click', event => {
      if (event.target.classList.contains('remove-item')) {
        const index = event.target.dataset.index;
        cart.splice(index, 1);
        cartCount.textContent = cart.length;
        if (cart.length === 0) checkoutButton.classList.add('hidden');
        renderCart();
      }
    });
  });
  