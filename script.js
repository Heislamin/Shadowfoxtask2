const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
 
 if (close) {
   close.addEventListener('click', () => {
     nav.classList.remove('active')
   })
 }
}

// Initialize cart items array
let cartItems = [];

// Function to add item to cart
function addToCart(item) {
    cartItems.push(item);
    updateCartIcon();
}

// Function to update cart icon with item count
function updateCartIcon() {
    const quantityElement = document.querySelector('.quantity');
    if (quantityElement) {
        quantityElement.textContent = cartItems.length;
    }
}

// Function to display cart items on cart page
function displayCartItems() {
    const cartContainer = document.querySelector(data-name);
    if (cartContainer) {
        cartContainer.innerHTML = ''; // Clear existing items
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price}</p>
                </div>
            `;
            cartContainer.appendChild(cartItemElement);
        });
    }
}

// Checkout function
function checkout() {
    // You can implement your checkout logic here
    alert('Checkout feature is under development!');
}

// Code to execute when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Handle adding items to cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    if (addToCartButtons) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                const item = {
                    name: button.dataset.name,
                    price: button.dataset.price,
                    image: button.dataset.image
                };
                addToCart(item);
            });
        });
    }

    // Update cart icon
    updateCartIcon();

    // Display cart items when the page loads
    displayCartItems();
});
