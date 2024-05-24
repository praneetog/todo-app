const express = require("express")
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())


//Creating a todo
app.post('/todo', async (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload){
        res.status(411).json({
            msg: "You sent wrong inputs",
        })
        return
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

//Display all todos
app.get('/todos', async function(req,res){
    const todos = await todo.find({})
    res.json({
        todos,
    })
})

//To update a Todo
app.put('/completed', async(req, res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload){
        res.status(411).json({
            msg: "You sent wrong inputs",
        })
        return
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })
})

app.listen(3000)