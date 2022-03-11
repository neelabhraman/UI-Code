const http = require('http');
const fs = require('fs');
const port = 9100;

/*const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname ));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(port, (error) => {
    if(error){
        console.log("Error in starting node server", error);
    }else{
        console.log("Node server started at port", port);
    }
});*/

const _MimeMap = {
    'txt': 'text/plain',
    'html': 'text/html',
    'css': 'text/css',
    'xml': 'application/xml',
    'json': 'application/json',
    'js': 'application/javascript',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'png': 'image/png',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon'
};

const server = http.createServer(function (req, res) {
    console.log("Now requesting for resource:", req.url);
    res.writeHead(200, {'Content-Type': _MimeMap[req.url.split('.').pop()] || 'text/html'});
    fs.readFile(req.url.split('/').pop() || "index.html", function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write("Error: HTML file not found");
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, function (error) {

    if (error) {
        console.log("Error in starting node server", error);
    } else {
        console.log("Node server started at port", port);
    }

});
