const {Todo} = require('../models')

module.exports = (req, res, next) => {
    try {
        let idTodo = req.params.id
        let user = req.user 
        const todo = Todo.findByPk(idTodo)
        if(todo.userId !== user.id){
            throw{
                status : 401,
                message : 'Unauthorized'
            }
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}