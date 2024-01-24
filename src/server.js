const http = require('http');
const fs = require('fs');
const path = require('path');

app.get('/', (req, res) => {
  const apiKey = process.env.GOOGLE_KEY; // Ensure this is set in your environment variables
  const htmlWithKey = yourHtmlContent.replace('YOUR_API_KEY_PLACEHOLDER', apiKey);
  res.send(htmlWithKey);
});


const parseCookies = (cookieHeader) => {
  let cookies = {};
  cookieHeader && cookieHeader.split(';').forEach(cookie => {
    let parts = cookie.match(/(.*?)=(.*)$/);
    cookies[parts[1].trim()] = (parts[2] || '').trim();
  });
  return cookies;
};

http.createServer((req, res) => {  
  
  const cookies = parseCookies(req.headers.cookie);
  if (cookies.lat && cookies.lon) {
    fs.appendFileSync('location.txt', `Latitude: ${cookies.lat}, Longitude: ${cookies.lon}\n`);
  }

  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  let extname = String(path.extname(filePath)).toLowerCase();

  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
  };

  let contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}).listen(3000);
