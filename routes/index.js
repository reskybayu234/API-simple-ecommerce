const express = require('express');
const router = express.Router();

const userController = require("../controllers").user;
const itemController = require("../controllers").item;

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
router.delete('/api/item/:id', itemController.lenyap);

module.exports = router; 