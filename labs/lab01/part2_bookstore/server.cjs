const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const filePath = req.url === '/' ? '/index.html' : req.url;
  const fullPath = path.join(__dirname, 'pages', filePath);

  // Check if file exists
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      // File not found → send 404 page
      fs.readFile(path.join(__dirname, 'pages', '404.html'), (error, notFoundData) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(notFoundData || '404 Page Not Found');
      });
    } else {
      // File found → send it
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
