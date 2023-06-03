# Learning Node.js

### creating a simple server using node.js

### HTTP module
<p>Built in modeule which allows node.js to transfer data over hyper text transfer protocol. <br/>  </p>

<p>createServer() method of HTTP creates a new server abd return it. <br />
server is ser to listen on specified port, when redy the callback function is called. <br />
whenever a new req  is received, the request event is called, providing 2 objects: <br />
    1. a request (http.IncomeingMessage) object - provides request details (request header and request data) <br />
    2. a response (http.ServerResponse) object - return data to caller <br />
    
</p>