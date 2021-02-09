const express = require('express');
const router = express.Router();

const floodingController = require('../src/controllers/FloodingController');

router.get('/floodings/all', floodingController.index);
router.get('/floodings/:id', floodingController.show);
router.post('/floodings', floodingController.create);
router.get('/floodings', floodingController.indexBounds)

module.exports = router;