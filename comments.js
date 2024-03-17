// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response) {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  var path = url_parts.pathname;

  if (path == "/comments") {
    fs.readFile('comments.json', function(err, data) {
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(data);
      response.end();
    });
  } else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write('404 Not Found\n');
    response.end();
  }
}).listen(8080);
console.log('Server running at http://');
