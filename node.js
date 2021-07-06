let http = require('http')
let date = require('./time-module')


http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}) 
    console.log('The server is running on http://localhost:8080 !')
}).listen(8080)