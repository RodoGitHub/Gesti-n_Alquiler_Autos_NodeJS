const express = require('express');
const router = express.Router();
const {
    addRental,
    getAllRentals,
    getRentalById,
    updateRental,
    deleteRental
} = require('../controllers/rental.controller');

router.post('/', addRental);          
router.get('/', getAllRentals);       
router.get('/:id', getRentalById);    
router.put('/:id', updateRental);    
router.delete('/:id', deleteRental); 

module.exports = router;
