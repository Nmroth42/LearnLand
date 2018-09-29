const {
    sequelize,
    Song,
    User
} = require('./models')

const Promise = require('bluebird')
const songs =  require('./Songs.json')
const users =  require('./Users.json')

sequelize.sync({force: true})
  .then(() => {
   
  })