let http = require("http");

let server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write("welcome!");
    res.end();
  }

  if (req.url === "/hello") {
    res.write("hello!!");
    res.end();
  }

  if (req.url === "/redirect") {
    res.writeHead(302, {
      location: "/hello",
    });
    res.end();
  }

  res.writeHead(404);
  res.end();
});

server.listen(5000);
