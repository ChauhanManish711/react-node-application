const usersModel = require('../models/users.model');
module.exports.test1 = async(req,res) => {
    const users = await usersModel.findAll();
    res.status(500).send({"users" : users});
}