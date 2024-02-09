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


const port =8080;
server.listen(port);
