const ingService = require('./ingredients.service');


exports.findAll = (req, res, next) => {
    const params = {
        id: req.params.id ? req.params.id : "",
        amount: req.query.amount ? req.query.amount : "",
        unit: req.query.unit ? req.query.unit : ""
    }
    console.log(params)
    ingService.getAll(params)
        .then(ingList => res.status(200).json(ingList))
        .catch(err => next(err))
}
