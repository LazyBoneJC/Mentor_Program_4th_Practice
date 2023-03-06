const http = require('http');
const server = http.createServer(handler);

function handler (req, res) {
  console.log(req.url);
  if(req.url === "/hello") {
    res.writeHead(200, {
      "Content-Type": "text/plaintext",
    });
    res.write("<h1>Hello!</h1>");
  } else if (req.url === "/bye") {
    res.write("<h1>Bye!</h1>");
  } else {
    res.write("<h1>Invalid url.</h1>");
  }
  res.end();
}

server.listen(5001);