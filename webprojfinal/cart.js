function saveAttributes(button) {
    const productDiv = button.closest('.product-item');
    const productName = productDiv.getAttribute('data-name');
    const productPrice = parseFloat(productDiv.getAttribute('data-price'));

    // Retrieve or initialize the cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(p => p.name === productName);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;  // Increment the quantity
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });  // Add new item
    }

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('ADDED TO CART SUCCESSFULLY!');
}

// Function to display the contents of the cart on the checkout page
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const tableBody = document.getElementById('cartItems').querySelector('tbody');
    const totalPriceElement = document.getElementById('totalPrice').querySelector('span');

    // Clear existing table rows
    tableBody.innerHTML = '';
    let total = 0;

    if (cartItems.length === 0) {
        const row = tableBody.insertRow();
        const cell = row.insertCell(0);
        cell.colSpan = 5;
        cell.textContent = 'No items in your cart.';
    } else {
        cartItems.forEach((item, index) => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = item.name;
            row.insertCell(1).textContent = `${item.price} EGP`;
            row.insertCell(2).textContent = item.quantity;
            const totalItemPrice = item.price * item.quantity;
            row.insertCell(3).textContent = `${totalItemPrice} EGP`;
            const actionCell = row.insertCell(4);
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() { removeFromCart(index); });
            actionCell.appendChild(removeButton);

            total += totalItemPrice;
        });
    }

    totalPriceElement.textContent = `${total} EGP`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);  // Remove the item at the given index
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();  // Refresh the cart display
}

// Placeholder function for checkout action
function checkout() {
    alert('Proceed to payment.');
}

document.addEventListener('DOMContentLoaded', displayCart);  // Ensure the cart is displayed when the page loads