const item = require('./item');
const { add } = require('./user');

const Order = require('../models').Order;
const Item = require('../models').Item;
const User = require('../models').Order;

module.exports = {
    async list(req,res){
        const item = await Item.findOne({where : {id : req.body.id_item}})
        const order = await Order.findOne({where : {id : req.params.id}})
        return Order.findAll({
            include : []
        }).then(order => {res.status(200).json(order)})
        .catch(err => res.status(400).json(err));
    },


    async add(req,res){
        const jumlah_order_barang = req.body.jumlah_order_barang;
        const item = await Item.findOne({where : {id : req.body.id_item}})
        const harga_item = item.harga_item;
        const total_harga = harga_item * jumlah_order_barang;
        const stok_item = item.stok_item;
        const order = Order.findOne({where : {id : req.params.id}})

        const sisa_stok_item = item.stok_item - jumlah_order_barang;
        Item.update({
            stok_item : sisa_stok_item
        }, {
                where : 
                    { 
                        id : req.body.id_item
                    }   
            })
        return Order.create({
            total_harga : total_harga,
            jumlah_order_barang : jumlah_order_barang,
            id_user : req.body.id_user,
            id_item : req.body.id_item
        }).then(order => res.status(201).json(order))
        .catch(err => res.status(400).json(err));
    },

    getById(req,res){
        return Order.findByPk(req.params.id).then(order => {
            res.status(200).json(order)
        }).catch(err => res.status(400).json(err));
    },

    async edit(req,res) {

        const findIdItemOrder = await Order.findOne({where : { id : req.params.id}})
        const idItemOrder = findIdItemOrder.id_item;

        const findItemId = await Item.findOne({where : {id : idItemOrder}})
        const findStokItemById = findItemId.stok_item;

        const jumlah_order_barang = req.body.jumlah_order_barang;
        const item = await Item.findOne({where : {id : req.body.id_item}})
        const harga_item = item.harga_item;
        const total_harga = harga_item * jumlah_order_barang;
        const stok_item = item.stok_item;
        const order = await Order.findOne({where : {id : req.params.id}})
        const stok_kembali = findStokItemById + order.jumlah_order_barang;
        Item.update({
            stok_item : stok_kembali
        }, {
                where : 
                    { 
                        id : req.body.id_item
                    }   
            }
        )
        return Order.update({
            
        })
    },


}