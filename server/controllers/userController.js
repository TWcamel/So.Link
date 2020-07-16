const User = require('../models/user.js')

module.exports = {

    async getProfile(ctx) {
        const user = await User.findOne({email: ctx.user})
        if (user) {
            ctx.body = user
        } else {
            ctx.response.status = 400
            ctx.body = { messgae: 'user not found' }
        }
    }
}