import morgan from 'morgan';
import cors from 'cors';
import productRouter from '../routers/product';
const http = require('http');
const express = require('express');
const { start } = require('repl');
const app = express();
// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(productRouter);
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


// Middleware 
const check = (req, res, next) => {
    const status = true;
    if (status) {
        console.log("Hello");
        next();
    } else {
        console.log("Don't go");
    }
}
app.use(check)
app.use((req, res) => {
    console.log('Bước 2');
})

app.get('/api/products', check, (req, res) => {
    const products = [
        { id: 1, name: "Name A" },
        { id: 1, name: "Name B" }
    ];
    res.json(products);
})



const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server dang chạy cổng", PORT);
})