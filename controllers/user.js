const User = require('../models').User;
module.exports = {
    list(req,res){
        return User.findAll({
            indclude : [],
            order : [['createdAt','DESC']]
        }).then(users => res.status(200).json(users))
        .catch(error => res.status(400).json(error)); 
    },

    getById(req,res){
        return User.findByPk(req.params.id).then(user => {
                res.status(200).json(user)
            }).catch(err => res.status(400).json(err));
    },
    
    add(req,res){
        return User.create({
            nama : req.body.nama,
            email : req.body.email,
            password : req.body.password
        }).then(user => {res.status(201).json(user)})
        .catch(error => res.status(400).json(error))

    },

    edit(req,res){
        return User.update({
            nama : req.body.nama,
            email : req.body.email,
            password : req.body.password
        }, { where : 
            { id : req.params.id }
        }).then(user => res.status(200).json(user))
        .catch(error => res.status(500).json(error))
    },

    lenyap(req,res) {
        return User.destroy({
            where : { id : req.params.id}
        }).then(()=>{res.status(200).json("User Dihapus!")})
        .catch(err => {res.status(500).json("User tidak bisa dihapus!")});
    }
}