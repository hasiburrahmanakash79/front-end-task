document.addEventListener('DOMContentLoaded', () => {
    const productData = {
      purple: {
        name: "Classy Modern Smart Watch",
        price: 79.00,
        reviews: "(2 Reviews)",
        description: "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
        image: "images/purple-watch.jpeg"
      },
      black: {
        name: "Elegant Black Watch",
        price: 99.00,
        reviews: "(4 Reviews)",
        description: "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
        image: "images/black-watch.jpeg"
      },
      blue: {
        name: "Ocean Blue Smart Watch",
        price: 89.00,
        reviews: "(3 Reviews)",
        description: "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
        image: "images/blue-watch.jpeg"
      },
      cyan: {
        name: "Cyan Premium Fitness Band",
        price: 69.00,
        reviews: "(5 Reviews)",
        description: "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
        image: "images/cyan-watch.jpeg"
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
  
    sizeButtons.forEach(button => {
      button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  
    
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
  

    function renderCart() {
      const total = cart.reduce((sum, item) => sum + item.total, 0); 
      const cartTotalElement = document.getElementById('cart-total');
    
      cartTableBody.innerHTML = cart
        .map(item => `
          <tr>
            <td class="py-2 px-4">${item.name}</td>
            <td class="py-2 px-4">${item.color}</td>
            <td class="py-2 px-4">${item.size}</td>
            <td class="py-2 px-4">${item.quantity}</td>
            <td class="py-2 px-4">$${item.total.toFixed(2)}</td>
          </tr>
        `)
        .join('');
    
      cartTotalElement.textContent = `$${total.toFixed(2)}`;
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
  