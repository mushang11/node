var start =require('./server');
var route = require('./route');
var requestHandlers = require('./requestHandle');

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/favicon.ico"] = requestHandlers.upload;
start.start(route.route,handle);