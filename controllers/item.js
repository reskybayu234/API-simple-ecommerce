const Item = require('../models').Item;
module.exports = {
    list(req,res){
        return Item.findAll({
            include : [],
            order : [['createdAt', 'DESC']]
        }).then(item => {res.status(200).json(item)})
        .catch(err => { res.status(400).json(err)});
    },

    getById(req,res){
        return Item.findByPk(req.params.id).then(item => {res.status(200).json(item)})
        .catch(err => {res.status(400).json(err)});
    },

    add(req,res){
        return Item.create({
            nama_item : req.body.nama_item,
            stok_item : req.body.stok_item,
            harga_item : req.body.harga_item 
        }).then(item => {res.status(201).json(item)}).catch(err => {res.status(400).json(err)})
    },

    edit(req,res){
        return Item.update({
            nama_item : req.body.nama_item,
            stok_item : req.body.stok_item,
            harga_item : req.body.harga_item
        }, { where : {id : req.params.id }}).then(item => res.status(200).json(item)).catch(err=>res.status(500).json(err));
    },

    lenyap(req,res){
        return Item.destroy({
            where : { id : req.params.id}
        }).then(()=> {res.status(200).json("Item Dihapus!")}).catch(err=>{res.status(500).json(err)});
    }
}