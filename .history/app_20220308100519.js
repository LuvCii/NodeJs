const http = require('http');
const server = http.createServer(() => {
    console.log('success');
});
const PORT = 3001;
server.listen(PORT, () => {
    console.log("Server is running port", PORT);
})