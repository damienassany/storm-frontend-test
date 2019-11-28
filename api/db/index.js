const Sequelize = require('sequelize');
const config = require('./config/config');
const TasksModel = require('./models/tasks');

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {  
        host: config.development.host,
        dialect: 'sqlite',
        operatorsAliases: false
    }
);

const Tasks = TasksModel(sequelize, Sequelize);

module.exports = {
    Tasks
};