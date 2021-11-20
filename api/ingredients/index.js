

const express = require('express');

const resource = require('./ingrediaents.resource');

const router = express.Router();

router.get('/:id', resource.findAll);

module.exports = router;