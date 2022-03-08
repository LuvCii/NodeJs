const http = require('http');
const server = http.createServer((req, res) => {
    console.log('url', req.url);
    if (req.url === '/') {
        res.setHeader('Content-type', "text-html");
        res.write("<html><body><h1>Home Page</h1></body></html>")
        res.end();
    } else if (req.url === '/api/products') {
        const products = [
            { id: 1, name: "Product A" },
            { id: 1, name: "Product B" }
        ];
        res.end(JSON.stringify(products));
    } else {
        console.log("aaaaaa");
    }
});
const PORT = 3001;
server.listen(PORT, () => {
    console.log("Server is running port", PORT);
})