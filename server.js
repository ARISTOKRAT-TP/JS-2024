const express = require('express'); // Import the Express module
const bodyParser = require('body-parser'); // Import the body-parser module
const fs = require('fs'); // Import the file system module
const app = express(); // Create an instance of Express
const port = 3000; // Set the port for the server

app.use(express.static(__dirname)); // Serve static files from the current directory
app.use(bodyParser.json()); // Use body-parser to parse JSON request bodies

// Define the POST /submit route
app.post('/submit', (req, res) => {
    const newContact = req.body; // Get the new contact data from the request body

    // Read the existing contacts from contact.json
    fs.readFile('contact.json', (err, data) => {
        if (err) {
            console.error('Error reading contact.json:', err); // Log an error if reading fails
            return res.sendStatus(500); // Respond with a 500 Internal Server Error status
        }
        const contacts = JSON.parse(data); // Parse the JSON data
        contacts.push(newContact); // Add the new contact to the array

        // Write the updated contacts array back to contact.json
        fs.writeFile('contact.json', JSON.stringify(contacts, null, 2), (err) => {
            if (err) {
                console.error('Error writing to contact.json:', err); // Log an error if writing fails
                return res.sendStatus(500); // Respond with a 500 Internal Server Error status
            }
            console.log('Contact saved!'); // Log a success message
            res.sendStatus(200); // Respond with a 200 OK status
        });
    });
});

// Start the server
app.listen(port, (err) => {
    if (err) {
        return console.error('Error starting server:', err); // Log an error if the server fails to start
    }
    console.log(`Server running at http://localhost:${port}`); // Log a message indicating the server is running
});