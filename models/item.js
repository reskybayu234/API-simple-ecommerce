'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    nama_item: DataTypes.STRING,
    stok_item: DataTypes.INTEGER,
    harga_item: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  Item.associate = function(models){
    Item.hasMany(models.Order, {
      foreignKey : 'id_item',
      as : 'item'
    })
  }
  return Item;
};