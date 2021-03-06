const linkController = require('./controllers/linkController.js')
const authController = require('./controllers/authController.js')
const userController = require('./controllers/userController.js')

module.exports = (router) => {
    router.get('/:shortHash', linkController.goToLink)
    router.get('/api/user/profile', authController.verifyServiceToken, userController.getProfile)
    router.get('/api/link', authController.verifyServiceToken, linkController.getLinks)
    router.post('/api/link', authController.verifyServiceToken, linkController.register)
    router.post('/api/link/delete', authController.verifyServiceToken, linkController.deleteLink)
    router.post('/api/link/guest', linkController.register)
    router.get('/api/link/guest', linkController.register)
    router.post('/api/auth/login', authController.login)
}