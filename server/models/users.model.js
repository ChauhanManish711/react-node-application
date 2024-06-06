const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const users = sequelize.define('users',{
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }
});
sequelize.sync();
module.exports = users;