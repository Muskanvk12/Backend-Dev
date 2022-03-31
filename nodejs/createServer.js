const http = require('http')
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res)=>{
    let path = "../pages"

    switch(req.url){
        case "/":
            path += "/home.html"
            res.statusCode = 200
            break;
        case "/about" :
            path += "/about.html"
            res.statusCode = 200    
            break;
        case "/about-us":
            res.setHeader('location', "/about");    
            res.end()
            break;
        default:
            res.statusCode = 404
            path += "/404.html"
            break;
    }
    
    fs.readFile(path,(err, data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.write(data)
            res.end();
        }
    })
    
})

server.listen(3000, "localhost", ()=>{
    console.log("listening to server at port 3000")
})