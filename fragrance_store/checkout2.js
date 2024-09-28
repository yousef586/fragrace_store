// checkout.js

// Function to update the cart table on the checkout page
function updateCart() {
    const cartItemsTableBody = document.querySelector('#cartItems tbody');
    const totalPriceElement = document.querySelector('#totalPrice span');
    
    // Retrieve the cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    // Clear the existing table rows
    cartItemsTableBody.innerHTML = '';

    if (cart.length === 0) {
        cartItemsTableBody.innerHTML = '<tr><td colspan="5">Your cart is empty.</td></tr>';
    } else {
        // Add rows for each product in the cart
        cart.forEach((item, index) => {
            const productTotal = parseFloat(item.price) * item.quantity;
            totalPrice += productTotal;

            cartItemsTableBody.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>${productTotal.toFixed(2)} EGP</td>
                    <td><button onclick="removeFromCart(${index})">Remove</button></td>
                </tr>
            `;
        });
    }

    // Update total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function to remove an item from the cart based on its index
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);  // Remove item at specified index
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();  // Update the cart view after removal
    }
}

// Function to simulate the checkout process
function checkout() {
    alert('Proceeding to checkout...');
    // You can add additional checkout handling logic here
}

// Update the cart table when the page loads
document.addEventListener('DOMContentLoaded', updateCart);
