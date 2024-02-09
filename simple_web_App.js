const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
 fs.readFile('home.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("Error: File Not Found");
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

// Listen on port 3000, IP defaults to 127.0.0.1 (localhost)
const port=process.env.PORT || 3000;
server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
