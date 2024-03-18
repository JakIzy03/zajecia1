const http = require('http');

const PORT = 3000;

function requireListener(request, response){
    console.log(`Server is running on ${PORT}`);
}

const server = http.createServer((request, response) => {
if(url==="/"){
    response.setHeader( 'Content-Type', 'text/html' );
    response.write(`
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>home.js</title>
    </head>
    <body>
        <div>home.js</div>
    </body>
    </html>
    `);
}

if(url==="views/student"){
    response.setHeader( 'Content-Type', 'text/html' );
    response.write(`
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>student.js</title>
    </head>
    <body>
        <div>student.js</div>
    </body>
    </html>
    `);
}
});



server.listen(PORT);