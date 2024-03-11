const http = require("http");

const PORT = 3000;

function requestListener(request, response){
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>My first Node App</title></head>"); 
    response.write("<body><h1>Hello, World!</h1><body>");
    response.write("</body>");
    response.end;
    console.log("RequestListener", {
        request,
        response,
    });
}

const server = http.createServer(requestListener);

server.listen(PORT);