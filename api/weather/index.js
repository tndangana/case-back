
  
const express = require('express');

const resource = require('./weather.resources');
const router = express.Router();

router.get('/', resource.findAll);

module.exports = router;