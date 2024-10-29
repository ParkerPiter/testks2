const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true,
        }
    }
},
{
    timestamps: true, // Esta opción no se debe declarar como campo
});

module.exports = User;
