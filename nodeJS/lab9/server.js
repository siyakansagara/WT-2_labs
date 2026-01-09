const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/about') {
        fs.readFile('about.txt', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
            res.end();
        });
    }
    else if (req.url === '/contact') {
        fs.readFile('contact.txt', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
            res.end();
        });
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Home Page');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
