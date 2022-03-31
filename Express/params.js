const express = require("express")

const app = express()

app.listen(3000)

app.use(express.json())

let users = [
    {
        userId : 1,
        userName : "Muskan"
    },
    {
        userId : 2,
        userName : "Khushi"
    },
    {
        userId : 3,
        userName : "Budhansh"
    }
]

app.get('/user:id',(req, res)=>{
    let idRecieved = req.params
    for(let i = 0; i < users.length; i++){
        if(users[i]["userId"] == idRecieved){
            res.json({
                user : users[i]
            })
        }
    }
})