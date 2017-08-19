var io= require('socket.io');
var os =require('os');
var io = io.listen(server);
io.on('connection',function (client) {
    setInterval(function () {
        client.send(os.freemem() / os.totolmem())
    },500)
})