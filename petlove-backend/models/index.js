'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/model');
const catModel = require('./cats/cats');
const userModel = require('./users/users');
const Collection = require('./data-collection.js');
// const fooodModel = require('./foood/model');


const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

const sequelize = new Sequelize(DATABASE_URL,{});

const cats = catModel(sequelize, DataTypes);
const users = userModel(sequelize, DataTypes);
// const clothes = clothesModel(sequelize, DataTypes);
// const foood = fooodModel(sequelize, DataTypes);

users.hasMany(cats,{foreignKey:'userId',sourceKey:'id'});
cats.belongsTo(users,{foreignKey:'userId',targetKey:'id'})

module.exports = {
  db: sequelize,
  users,
  // users: userModel(sequelize, DataTypes),
  // users: new Collection(users),
  cats: new Collection(cats),
  // clothes: new Collection(clothes),
  // foood: new Collection(foood),

}
