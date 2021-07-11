let http = require('http')
let fs = require('fs')

http.createServer(function(req, res){
    fs.appendFile('index.html', ':D', function(err){
        if(err) throw err
        console.log('Saved')
    })
}).listen(8080)