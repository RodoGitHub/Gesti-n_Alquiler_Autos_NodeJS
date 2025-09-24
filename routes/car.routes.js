const express = require('express');
const router = express.Router();
const {
    addCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar
} = require('../controllers/car.controller');

router.post('/', addCar);          
router.get('/', getAllCars);       
router.get('/:id', getCarById);    
router.put('/:id', updateCar);    
router.delete('/:id', deleteCar); 

module.exports = router;
