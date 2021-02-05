const express = require('express');
const router = express.Router();

const floodingController = require('../src/controllers/FloodingController');

router.get('/floodings', floodingController.index);
router.get('/floodings/:id', floodingController.show);
router.post('/floodings', floodingController.create);

module.exports = router;