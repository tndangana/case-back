const express = require('express');

const resource = require('./task.resources');
const router = express.Router();

router.post('/', resource.create);
router.get('/', resource.findAll);
router.get('/:id', resource.findOne);
router.put('/:id', resource.update);
router.delete('/:id', resource.delete);

module.exports = router;