const linkController = require('./controllers/linkController.js')

module.exports = (router) => {
    router.get('/:shortHash', linkController.goToLink)
    router.get('/api/user/profile', authController.verifyServiceToken, userController.getProfile)
    router.post('/api/login', authController.login)
    router.post('/api/link/register', linkController.register)
}