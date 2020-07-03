const http  = require('http');
const fs = require('fs');

function sendFile(path, res) {
    const file = new fs.ReadStream(path);
    file.on("error", e => {
        console.log(`Path: ${path} \n${e}\n`);
    });
    file.pipe(res);
}

new http.createServer((req, res) => {
    if (req.url === '/bigHtml.html') {
        sendFile("./files/bigHtml.html", res);
    } else {
        sendFile("./files/404.html", res);
    }
}).listen(3000, '127.0.0.1');
