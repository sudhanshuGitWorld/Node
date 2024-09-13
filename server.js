const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/getUserInfo') {
        res.end('Logged in user is Sudhanshu Shrivastava')
    }
    res.end('Hello World')
});

server.listen(8090);