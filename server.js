const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const newContact = req.body;

    fs.readFile('contact.json', (err, data) => {
        if (err) {
            console.error('Error reading contact.json:', err);
            return res.sendStatus(500);
        }
        const contacts = JSON.parse(data);
        contacts.push(newContact);

        fs.writeFile('contact.json', JSON.stringify(contacts, null, 2), (err) => {
            if (err) {
                console.error('Error writing to contact.json:', err);
                return res.sendStatus(500);
            }
            console.log('Contact saved!');
            res.sendStatus(200);
        });
    });
});

app.listen(port, (err) => {
    if (err) {
        return console.error('Error starting server:', err);
    }
    console.log(`Server running at http://localhost:${port}`);
});
