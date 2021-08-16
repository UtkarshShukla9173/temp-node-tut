const http = require('http')
//const server = http.createServer((req,res) =>{
    // res .end("welcome")
//})
// Using Event Emitter Api
const server = http,createServer()
//emits request events
// subcribe to it / listen to it / respond to it
server.on('request',(re1,res)=>{
    res.end('welcome')
})
server.listen(5000)