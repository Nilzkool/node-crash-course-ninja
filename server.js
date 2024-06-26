const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello')
    });
    greet();

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // this is an example of routing
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end()
        
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write("This is a response from the server");
            // res.write(data);
            res.end(data);
        }
    });


});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000')
});