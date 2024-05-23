const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://praneetog:77818@cluster0.y8tzrtt.mongodb.net/todos-db")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo
}