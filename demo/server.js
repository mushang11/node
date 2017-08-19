// var http =require('http');
// var url =require('url');
// function  start(route,handle) {
//     function requestHandle(request,response) {
//         console.log("request arrived");
//         var postData ='';
//         var pathname = url.parse(request.url).pathname;
//         console.log('pathname:'+pathname);
//         request.setEncoding('utf-8');
//         request.addListener('data',function (postDataChunk) {
//             postData +=postDataChunk;
//             console.log('Received POST data chunk '+postDataChunk+".");
//         })
//         request.addListener("end", function() {
//             route(handle, pathname, response, postData);
//         });
//     }
//     http.createServer(requestHandle).listen(8888);
//     console.log("server has started");
// }
// exports.start  =start;

var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

http.createServer(function(req, res) {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
        });
        return;
    }

    // show a file upload form
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>'
    );
}).listen(8888);