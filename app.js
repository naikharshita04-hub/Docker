const http = require('http');

http.createServer((req, res) => {
  res.end("Node App Continous Integration and Deployment Running");
}).listen(3000);
