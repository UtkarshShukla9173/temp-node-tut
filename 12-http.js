const http = require('http');
const server =http.createServer((req,res) => {
    if(req.url==='/'){
        res.end('welcome to our home page')
    }
    if (req.url ==='/about'){
        res.end('here is our Stort history');
    }
    res.end(`<h1>Oops</h1>
    <p> we cant find fage you are looking for</p>
    <a href="/">back home</a>`)

})

server.listen(5000)