const linkController = require('./controllers/linkController.js')
const authController = require('./controllers/authController.js')
const userController = require('./controllers/userController.js')
const cacheMiddleware = require('./middleware/cache.js')


module.exports = (router) => {
    router.get('/:shortHash', linkController.goToLink)
    router.get('/api/user/profile', authController.verifyServiceToken, userController.getProfile)
    router.get('/api/link', authController.verifyServiceToken, linkController.getLinks)
    router.post('/api/link', authController.verifyServiceToken, linkController.register)
    router.post('/api/auth/login', authController.login)
}