'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./users/users');
const Collection = require('./data-collection.js');
// const catModel = require('./cats/cats');
// const dogModel = require('./dogs/dogs');
const petModel = require('./pet/pet');
const favPetModel = require('./favpet/favpet');


const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

const sequelize = new Sequelize(DATABASE_URL,{});

// const cats = catModel(sequelize, DataTypes);
// const dogs = dogModel(sequelize, DataTypes);
const pets = petModel(sequelize, DataTypes);
const favPet = favPetModel(sequelize, DataTypes);

const users = userModel(sequelize, DataTypes);

// users.hasMany(cats,{foreignKey:'userId',sourceKey:'id'});
// cats.belongsTo(users,{foreignKey:'userId',targetKey:'id'});

// users.hasMany(dogs,{foreignKey:'userId',sourceKey:'id'});
// dogs.belongsTo(users,{foreignKey:'userId',targetKey:'id'});

users.hasMany(pets,{foreignKey:'userId',sourceKey:'id'});
pets.belongsTo(users,{foreignKey:'userId',targetKey:'id'});

users.hasMany(favPet,{foreignKey:'userId',sourceKey:'id'});
favPet.belongsTo(users,{foreignKey:'userId',targetKey:'id'});

module.exports = {
  db: sequelize,
  users,
  // users: userModel(sequelize, DataTypes),
  // users: new Collection(users),
  // cats: new Collection(cats),
  // dogs: new Collection(dogs),
  pets: new Collection(pets),
  favpet: new Collection(favPet),
}
