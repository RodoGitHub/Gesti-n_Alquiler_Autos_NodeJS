const express = require('express');
const router = express.Router();
const { register, updateUser, deleteUser } = require('../controllers/auth.controller')

//router.get('/', getAllSales)
//router.get('/:id', getSaleById)
router.post('/', register)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router