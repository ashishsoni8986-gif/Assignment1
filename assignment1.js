const http = require("http");

const server = http.createServer((req, res) => {

    console.log("Request received from client");

    // Application logic
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });

        res.write("Hello! Request received successfully.");
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });

        res.write("Page not found");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});