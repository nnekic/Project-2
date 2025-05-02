const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/health'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end (JSON.stringify({ status: "OK" }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Simple Node app works!\n');
});



server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
