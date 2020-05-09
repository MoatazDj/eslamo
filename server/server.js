let http = require('http');
let app = require('./App');

let server = http.createServer(app);

let port = process.env.port || 5000;

server.listen(port, () => {
  console.log(`connected to server: http://localhost:${port}`);
});