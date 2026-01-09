const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    fs.readFile('about.txt', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    });
  } 
  else if (req.url === '/contact') {
    fs.readFile('contact.txt', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    });
  } 
  else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Node.js File Reader App');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
