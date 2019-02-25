const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
  isAuthenticated,
    SongsController.index)

  app.get('/songs/:songId',
  isAuthenticated,
    SongsController.show)

  app.post('/songs',
  isAuthenticated,
    SongsController.post)

  app.put('/songs/:songId',
  isAuthenticated,
    SongsController.put)
}
