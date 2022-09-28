const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "social_soccer_dt";

mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Database created or verified successfully");
    })
})

const playersModel = require('../models/players.model');
const dtsModel = require('../models/dts.model');
<<<<<<< HEAD
const matchsModel = require('../models/matchs.model');

=======
const campsModel = require('../models/camps.model');
const leagueBarrelsModel = require('../models/leagueBarrels.model');
const matchsModel = require('../models/matchs.model');
const teamsModel = require('../models/teams.model');
>>>>>>> 126e3b0ec6ee67585774fbf6ef8c60fe3235210d

const sequelize = new Sequelize(
  'social_soccer_dt',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Connect')
  })
  .catch(err => {
    console.log('No connect')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("synchronized tables")
  })

const players = playersModel(sequelize, Sequelize);
const dts = dtsModel(sequelize, Sequelize);
<<<<<<< HEAD
const matchs = matchsModel(sequelize, Sequelize);


=======
const leagueBarrels = leagueBarrelsModel(sequelize, Sequelize);
const matchs = matchsModel(sequelize, Sequelize);
const teams = teamsModel(sequelize, Sequelize);
const camps = campsModel(sequelize, Sequelize);
>>>>>>> 126e3b0ec6ee67585774fbf6ef8c60fe3235210d

//Relaciones 


module.exports = {
  players,
  dts,
<<<<<<< HEAD
  matchs
=======
  camps,
  leagueBarrels,
  matchs,
  teams

>>>>>>> 126e3b0ec6ee67585774fbf6ef8c60fe3235210d
}