const http = require("http"); // build in in node js 🤓

const server = http.createServer((req, res) => {
  // We are getting request, and retturing a response.

  // We want to send some HTML! :)
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Pickle Rick!!!</h2>");
  res.end();
});

server.listen(4000, () => console.log("Server is running!"));
