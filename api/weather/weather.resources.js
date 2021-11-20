
const { query } = require('express');
const weatherService = require('./weather.service');


exports.findAll = (req, res, next) => {
    const params = {
        cityname: req.query.cityname,
     
    }
    weatherService.getAll(params)
        .then(weatherList => res.status(200).json(weatherList))
        .catch(err => next(err))
}