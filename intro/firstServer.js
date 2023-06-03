var http = require("http");
var dt = require("./dateModule");
const port = 5000;

//server object
const server = http.createServer(function(request, response) {
    //response header - res from server is displayed as html
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("Current time and date are:"+ dt.myDateTime);
    response.end("end");
});

server.listen(port, ()=> {
    console.log(`running at port ${port}`);
})

