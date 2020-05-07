let http =require('http')
let app=require('./App')

let server=http.createServer(app)

let port=process.env.port || 8000

server.listen(port,()=>{
    console.log(`connected to server ${port}`)
})
