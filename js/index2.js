document.addEventListener("DOMContentLoaded", function() {
    // Fetch contact data from the server when the document is loaded
    fetch('/contact.json')
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            const contactDataDiv = document.getElementById('contactData'); // Get the div to display contact data
            if (data.length > 0) { // Check if there is any data to display
                data.forEach(contact => { // Loop through each contact in the data array
                    const contactDiv = document.createElement('div'); // Create a new div for each contact
                    contactDiv.classList.add('contact-item'); // Add the 'contact-item' class to the div
                    // Set the inner HTML of the div to display contact details
                    contactDiv.innerHTML = `
                        <p><strong>Имя:</strong> ${contact.firstName}</p>
                        <p><strong>Фамилия:</strong> ${contact.lastName}</p>
                        <p><strong>Электронная почта:</strong> ${contact.email}</p>
                        <p><strong>Сообщение:</strong> ${contact.message}</p>
                        <hr>
                    `;
                    contactDataDiv.appendChild(contactDiv); // Append the contact div to the contact data div
                });
            } else {
                // If no data is found, display a message
                contactDataDiv.innerHTML = '<p>No data to display</p>';
            }
        })
        .catch(error => console.error('Error:', error)); // Log any errors that occur during fetch
});
