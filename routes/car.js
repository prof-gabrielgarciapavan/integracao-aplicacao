const express = require('express');
const router = express.Router();

const carControllerVersion3 = require('../controllers/cars/carControllerVersion3');
const carControllerVersion4 = require('../controllers/cars/carControllerVersion4');

router.get('/v4/', carControllerVersion4.getAllCars);
router.get('/v4/:id', carControllerVersion4.getCarById);
router.post('/v4/', carControllerVersion4.createCar);
router.put('/v4/:id', carControllerVersion4.updateCar);
router.delete('/v4/:id', carControllerVersion4.deleteCar);

router.get('/v3/', carControllerVersion3.getAllCars);
router.get('/v3/:id', carControllerVersion3.getCarById);
router.post('/v3/', carControllerVersion3.createCar);
router.put('/v3/:id', carControllerVersion3.updateCar);
router.delete('/v3/:id', carControllerVersion3.deleteCar);

module.exports = router;
