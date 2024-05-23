const express = require("express")
const { createTodo, updateTodo } = require("./types")
const app = express()

app.use(express.json())

app.post('/todo', (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload){
        res.status(411).json({
            msg: "You sent wrong inputs",
        })
        return
    }
})

app.get('/todos', function(req,res){
    res.send("Hello World")
})

app.put('/completed', (req, res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload){
        res.status(411).json({
            msg: "You sent wrong inputs",
        })
        return
    }
})

app.listen(3000)