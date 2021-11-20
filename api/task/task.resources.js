const taskService = require('./task.service');


exports.create = (req, res, next) => {
    taskService.create(req.body)
        .then(task => res.status(200).json(task))
        .catch(err => {
            next(err)
        });
}
exports.findOne = (req, res, next) => {
    taskService.findOne(req.params.id)
        .then(task => task ? res.status(200).json(task) : res.status(404).json({ message: "Task not found !!" }))
        .catch(err => { next(err) })

}
exports.findAll = (req, res, next) => {
    taskService.findAll()
        .then(list => res.status(200).json(list))
        .catch(err => { next(err) })
}
exports.delete = (req, res, next) => {
    taskService.delete(req.params.id)
        .then(task => res.status(204).json({ task }))
        .catch(err => { next(err) })
}

exports.update = (req, res, next) => {
    taskService.update(req.params.id, req.body)
        .then(task => task ? res.status(200).json({ task }) : res.status(404).json({ message: "Cannot update,user does not exist" }))
        .catch(err => { next(err) })
}