const http = require('http');
const express = require('express');
const app = express();




// const server = http.createServer((req, res) => {
//     console.log('url', req.url);
//     if (req.url === '/') {
//         res.setHeader('Content-type', "text-html");
//         res.write("<html><body><h1>Home Page</h1></body></html>")
//         res.end();
//     } else if (req.url === '/api/products') {
//         const products = [
//             { id: 1, name: "Product A" },
//             { id: 1, name: "Product B" }
//         ];
//         res.end(JSON.stringify(products));
//     } else {
//         console.log("Unknows");
//     }
// });
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server dang chay cong port", PORT);
})