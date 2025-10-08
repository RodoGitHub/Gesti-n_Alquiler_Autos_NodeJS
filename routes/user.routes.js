const express = require('express');
const router = express.Router();
const { register, updateUser, deleteUser, getUser } = require('../controllers/user.controller')
const verifyToken = require('../middlewares/verifyToken')
const isAdmin = require('../middlewares/isAdmin')

//router.get('/', getAllSales)
//router.get('/:id', getSaleById)
router.post('/', register)
router.get('/', verifyToken,isAdmin, getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router