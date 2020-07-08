const User = require('../models/user.js')

module.exports = {

    async getProfile(ctx) {
        const user = await User.findOne({email: ctx.user})
        if (user) {
            ctx.body = {status: true, profile: users[0]}
        } else if (users.length === 0) {
            ctx.body = {status: false, error: 'profile not found'}
        }
    }
}