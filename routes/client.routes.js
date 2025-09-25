const express = require('express');
const router = express.Router();
const {
    addClient,
    getAllClients,
    getClientById,
    updateClient,
    deleteClient
} = require('../controllers/client.controller');

// Rutas
router.post('/', addClient);          
router.get('/', getAllClients);       
router.get('/:id', getClientById);    
router.put('/:id', updateClient);    
router.delete('/:id', deleteClient); 

module.exports = router;
