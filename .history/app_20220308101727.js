const http = require('http');
const server = http.createServer((req, res) => {
    console.log('url', req.url);
    if (req.url === '/') {
        console.log('HOme Page');
    } else if (req.url === 'api/products') {
        console.log("Product Page");
    } else {
        console.log("Unknow");
    }
});
const PORT = 3001;
server.listen(PORT, () => {
    console.log("Server is running port", PORT);
})