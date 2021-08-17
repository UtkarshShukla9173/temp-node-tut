const http = require('http')
const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end("hello world") // callback
})
//listen is async
server.listen(5000,()=>{
    console.log("server is listning at port 5000")
})