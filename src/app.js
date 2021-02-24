const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  // let url = req.url;

  let {url} = req;

  switch (url) {
    case "/":
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Home');
      break;

    case "/posts":
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Liste des articles');
      break;
  
    default:
      break;
  }

  

});

server.listen(port, hostname);
