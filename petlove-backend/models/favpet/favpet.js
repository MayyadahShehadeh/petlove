'use strict';

const favPetModel = (sequelize, DataTypes) => sequelize.define('fav_pet', {
  name: { type: DataTypes.STRING, required: true },
  image_link: { type: DataTypes.STRING },
  petOwnerName: { type: DataTypes.STRING ,required: true},
  petOwnerEmail: { type: DataTypes.STRING,required: true},
  userPhone: { type: DataTypes.STRING,required: true },
  origin: { type: DataTypes.STRING },
  petType: { type: DataTypes.ENUM('cat','dog'),
   required: true, defaultValue: 'cat'},
   petOwnerId: { type: DataTypes.STRING ,required: true},



  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
     required: true
}
  // username:{type: DataTypes.STRING, required: true }
  
});

module.exports = favPetModel;
