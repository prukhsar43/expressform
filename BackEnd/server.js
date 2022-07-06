const http = require('http');
const data = [];
//create a server object:

http.createServer( (req, res) =>{
 res.writeHead(200, {'Content-Type': 'text/json'}); // http header
const url = req.url;
const method = req.method;
 if(url ==='/' && method === 'GET'){
    res.write(data); //write a response
    res.end(); //end the response
 }else if(url ==='/' && method==='POST'){
    res.write(req.body);  //write a response
    data.push(req.body)
    res.end(); //end the response
 }
}).listen(9090, ()=>{
 console.log("server start at port 9090"); //the server object listens on port 3000
});