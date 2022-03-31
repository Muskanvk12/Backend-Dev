const express = require("express")

const app = express()
app.use(express.json())

app.listen(3000)

let user = []

app.get('/user', (req, res)=>{
    res.send(user)
})

app.post('/user', (req, res)=>{
    user.push(req.body)
    res.json({
        message : "user recieved",
        body : req.body
    })
})

app.patch('/user', (req, res)=>{
    user.push(req.body)
    res.json({
        message : "user updated",
    })
})

app.delete('/user', (req, res)=>{
    user = []
    res.json({
        message : "user deleted"
    })
})
