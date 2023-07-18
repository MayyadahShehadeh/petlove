'use strict';

const petModel = (sequelize, DataTypes) => sequelize.define('pets', {
  name: { type: DataTypes.STRING, required: true },
  image_link: { type: DataTypes.STRING },
  petOwnerName: { type: DataTypes.STRING ,required: true},
  petOwnerEmail: { type: DataTypes.STRING,required: true},
  userPhone: { type: DataTypes.STRING,required: true },
  origin: { type: DataTypes.STRING },
  petType: { type: DataTypes.ENUM('cat','dog'),
   required: true, defaultValue: 'cat'},


  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
     required: true
}
  // username:{type: DataTypes.STRING, required: true }
  
});

module.exports = petModel;
