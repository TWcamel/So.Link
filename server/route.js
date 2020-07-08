const linkController = require('./controllers/linkController.js')

module.exports = (router) => {
    router.get('/:shortHash', linkController.goToLink)
    router.post('/api/link/register', linkController.register)
}