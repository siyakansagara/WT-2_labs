const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <p>Welcome to our ExpressJS Web Application.</p>
        <p>This project demonstrates routing using ExpressJS.</p>
        <ul>
            <li>Fast</li>
            <li>Simple</li>
            <li>Scalable</li>
        </ul>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
        <h1>About Us</h1>
        <p>This web application is developed using Node.js and ExpressJS.</p>
        <p>ExpressJS is a lightweight framework used to build web applications easily.</p>
    `);
});

app.get('/contact', (req, res) => {
    res.send(`
        <h1>Contact Page</h1>
        <p>Email: support@expressapp.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: Rajkot, Gujarat, India</p>
    `);
});

app.get('/services', (req, res) => {
    res.send(`
        <h1>Our Services</h1>
        <ul>
            <li>Web Application Development</li>
            <li>REST API Development</li>
            <li>Backend Services using Node.js</li>
            <li>Database Integration</li>
        </ul>
    `);
});

app.get('/profile', (req, res) => {
    res.send(`
        <h1>My Profile</h1>
        <p>Name: Siya</p>
        <p>Course: B-Tech</p>
        <p>Subject: Web Technology</p>
        <p>Technology: NodeJS & ExpressJS</p>
    `);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
