const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Настройка body-parser для обработки данных форм
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

// Обработка POST-запроса формы
app.post('/submit-form', (req, res) => {
    const { name, email, telephone, country, message } = req.body;
    const formData = {
        name,
        email,
        telephone,
        country,
        message,
        timestamp: new Date().toISOString()
    };

    fs.appendFile('form-data.txt', JSON.stringify(formData) + '\n', (err) => {
        if (err) {
            console.error('Ошибка при сохранении данных:', err);
            res.status(500).send('Произошла ошибка при сохранении данных.');
        } else {
            res.send('Форма успешно отправлена!');
        }
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
