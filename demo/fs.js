var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var server =http.createServer(function (req,res) {
    var pathname = url.parse(req.url).pathname;
    var filepath = path.join("/tmp",'wwwroot',pathname);
    var stream = fs.createReadStream(filepath,{
        flags:'r',
        encoding:null
    });
    stream.on('error',function () {
        res.writeHead(404);
        res.end();
    })
    stream.pipe(res);
    //最后通过 pipe() 方法把文件的数据流传递到 HTTP 请求的响应中。
})
server.on("error",function (error) {
    console.log("error:"+error);
})
server.listen("8080","127.0.0.1");
