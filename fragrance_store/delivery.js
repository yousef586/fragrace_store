// delivery.js

document.getElementById('deliveryForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    const deliveryInfo = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        address: formData.get('address'),
        country: formData.get('country'),
        city: formData.get('city')
    };

    try {
        const response = await fetch('http://localhost:5000/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(deliveryInfo)
        });

        if (response.ok) {
            alert('Order submitted successfully');
            window.location.href = 'orderConfirmation.html';  // Redirect to order confirmation page
        } else {
            alert('Failed to submit order');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit order');
    }
});
