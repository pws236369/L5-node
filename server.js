const http = require("http"); // build in in node js 🤓

const data = [
  { name: "nissan", age: 28 },
  { name: "adi", age: 82 },
];

const server = http.createServer((req, res) => {
  if (req.url === "/api/segel" && req.method === "GET") {
    // We need to add the method!
    res.writeHeader(200, { "Content-Type": "application/json" }); // Status & header
    res.write(JSON.stringify(data)); // build in js function, to convert json to a string
    res.end();
  } else {
    res.writeHeader(404, { "Content-Type": "text/html" }); // Status & header
    res.write("<h1>Not found :( </h1>");
    res.end();
  }
});

server.listen(4000, () => console.log("Server is running!"));
