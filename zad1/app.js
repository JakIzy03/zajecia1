const express = require('express');

// Inicjowanie aplikacji Express
const app = express();

// Stała PORT ustawiona na wartość 3000
const PORT = 3000;

// Ustawianie middleware dla obsługi żądań typu GET na ścieżce '/'
app.get('/', (req, res) => {
    // Renderowanie strony home
    const homePage = require('./views/home');
    res.send(homePage.renderPage('Home'));
});

// Ustawianie middleware dla obsługi żądań typu GET na ścieżce '/student'
app.get('/student', (req, res) => {
    // Renderowanie strony student
    const studentPage = require('./views/student');
    res.send(studentPage.renderPage('Student'));
});

// Startowanie serwera nasłuchującego na określonym porcie
const server = app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

// Wyświetlanie komunikatu po uruchomieniu serwera
server.on('listening', () => {
    console.log(`Server is running on ${PORT}`);
});



server.listen(PORT);