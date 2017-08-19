var net = require('net');
var server = net.creatServer(function (socket) {
    socket.setEncoding('utf-8');
    var buffer = [],len = 0;
    socket.on('data',function (data) {
        if(data.charCodeAt(0) == 13){
            var expr = buffer.join("");
            try{
                var result = eval(expr);
                socket.write(result.toString());
            }catch (e){
                socket.write('wrong message');
            }finally {
                socket.write('\r\n');
                buffer = [];
            }
        }else{
            buffer.push(data);
        }
    })
})
server.listen('8080','127.0.0.1');
console.log("the service is started");