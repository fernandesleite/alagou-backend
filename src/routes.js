const express = require('express');
const router = express.Router();

const floodingController = require('../src/controllers/FloodingController');
const userController = require('../src/controllers/UserController');

router.get('/floodings/all', floodingController.index);
router.get('/floodings/:id', floodingController.show);
router.post('/floodings', floodingController.create);
router.get('/floodings', floodingController.indexBounds)

router.get('/user/:id', userController.show)
router.get('/user', userController.index)
router.post('/user', userController.create)

module.exports = router;