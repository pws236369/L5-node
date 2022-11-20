const http = require("http"); // build in in node js 🤓

const data = [
  { name: "nissan", age: 28 },
  { name: "adi", age: 82 },
];

const server = http.createServer((req, res) => {
  res.writeHeader(200, { "Content-Type": "application/json" }); // Status & header
  res.write(JSON.stringify(data)); // build in js function, to convert json to a string
  res.end();
});

server.listen(4000, () => console.log("Server is running!"));
