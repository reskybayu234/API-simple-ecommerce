const express = require('express');
const order = require('../models/order');
const router = express.Router();

const userController = require("../controllers").user;
const itemController = require("../controllers").item;
const orderController = require('../controllers').order;

router.get('/', function(req,res,next){
    res.render('index', { title : 'E-Commerce'});
})

// USER
router.get('/api/user', userController.list);
router.get('/api/user/:id', userController.getById);
router.post('/api/user', userController.add);
router.put('/api/user/:id', userController.edit);
router.delete('/api/user/:id', userController.lenyap);

// ITEM
router.get('/api/item', itemController.list);
router.get('/api/item/:id', itemController.getById);
router.post('/api/item', itemController.add);   
router.put('/api/item/:id', itemController.edit);
router.delete('/api/item/:id', itemController.lenyap);

// ORDER
router.get('/api/order', orderController.list);
router.post('/api/order', orderController.add);
// router.get('/api/order/:id', orderController.getById);
router.put("/api/order/:id", orderController.edit);
router.delete('/api/order/:id', orderController.lenyap);


module.exports = router; 