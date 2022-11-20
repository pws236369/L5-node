const http = require("http"); // build in in node js 🤓

const server = http.createServer((req, res) => {
  // We are getting request, and retturing a response.
});

server.listen(4000, () => console.log("Server is running!"));
