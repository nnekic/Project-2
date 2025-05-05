const http = require('http');
const prometheus = require('prom-client');

const server = http.createServer((req, res) => {
  if (req.url == '/health'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end (JSON.stringify({ status: "OK" }));
    return;
  }

  const requestCounter = new prometheus.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'status'],
  });
  
  res.on('finish', () => {
    requestCounter.inc({ method: req.method, status: req.statusCode })
  });

  if (req.url == '/metrics') {
    res.setHeader('Content-Type', prometheus.register.contentType);
    res.end(prometheus.register.metrics());
    return;
  }


  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Simple Node app works!\n');
});



server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
