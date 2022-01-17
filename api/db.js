// Depedencies
const Sequelize = require('sequelize');
// Db Connection Configuration
const config = require('./config/config.json');
// Models 
const IdeaModel = require('./models/ideas')
// Initializing connection of DB
let sequelize = new Sequelize(
  config.development.database,
  config.development.username, 
  config.development.password,
  {
    host: config.development.host, 
    dialect: config.development.dialect, 
    port: config.development.port 
  }
);
// Tables [Models]
const Idea = IdeaModel(sequelize, Sequelize);
// Tables Creation
sequelize.sync({ force: false }).then(() => { console.log('Tables Created.') })
module.exports = {
  Idea
}