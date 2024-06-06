const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'node_api', //db name
    'root', // db username
    '' , //db password
    {
        host : 'localhost',
        dialect : 'mysql'
    }
);

sequelize.authenticate().then(()=>{
    console.log('Database connected successfully.')
}).catch((error)=>{
    console.log('unable to connect',error)
});

module.exports = sequelize;