document.addEventListener("DOMContentLoaded", function() {
    // Select the form element with the ID 'contactForm'
    const form = document.getElementById('contactForm');

    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Create an object to store form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Convert the form data object to JSON
        const jsonData = JSON.stringify(formData);

        // Send the JSON data to the server
        fetch('/submit', {
            method: 'POST', // Set the request method to POST
            headers: {
                'Content-Type': 'application/json' // Set the request content type to JSON
            },
            body: jsonData // Set the request body to the JSON data
        })
        .then(response => {
            if (response.ok) {
                // Log success message if the response is OK
                console.log('Contact saved successfully');
                // Reset the form after successful submission
                form.reset();
            } else {
                // Log error message if the response is not OK
                console.error('Error saving contact');
            }
        })
        .catch(error => console.error('Error:', error)); // Log any errors that occur during fetch
    });
});
