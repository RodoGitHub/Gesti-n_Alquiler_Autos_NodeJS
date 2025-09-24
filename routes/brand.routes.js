const express = require('express');
const router = express.Router();
const {
    addBrand,
    getAllBrands,
    getBrandById,
    updateBrand,
    deleteBrand
} = require('../controllers/brand.controller');

router.post('/', addBrand);          
router.get('/', getAllBrands);       
router.get('/:id', getBrandById);    
router.put('/:id', updateBrand);    
router.delete('/:id', deleteBrand); 

module.exports = router;
