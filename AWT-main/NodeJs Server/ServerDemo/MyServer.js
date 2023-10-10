const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

handler = (req, res) => {
  //function handler(req, res) {
  if (req.url === "/api" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to world of Asyn Programming\n");
  } else {
    res.end("Invalid Request\n");
  }
};
const server = http.createServer(handler);

// const server = http.createServer((req, res) => {
//     if (req.url === "/api" && req.method === "GET") {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Hello, World! 741\n');
//     }
// });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
