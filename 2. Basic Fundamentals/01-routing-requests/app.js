const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
  const url = req.url ;
  if(req.url ==='/'){
    res.write('<html>');
  res.write('<head><title>Welcome to the HomePage </title></head>');
  res.write('<form action="/POST"><input type="text" name="message"><button type="submit">SEND</button></input></form>');
  res.write('</html>');
  return res.end();
  }
  if(url ==='/message' && method ==="POST"){
      fs.writeFileSync('message.txt', "DUMMY");
      res.statusCode = 302;
      res.setHeader('Location' , '/');
      return res.end();
  }

  res.setHeader('Content-Type' , 'text/html');
  res.write('<html>');
  res.write('<head><title>Hello this is my first header </title></head>');
  res.write('<body>Hey! My name is Lokesh Tiwari</body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);