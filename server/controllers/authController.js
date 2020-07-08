const jwt = require('jsonwebtoken')
const googleOAuth = require('../libs/googleOAuth.js')
const config = require('../config.js')
const User = require('../models/user.js')

module.exports = {

    async verifyServiceToken(ctx, next) {
        const auth = ctx.headers.authorization
        
        if (auth.substring(0, 7) !== 'Bearer ') {
            ctx.response.status = 401
            ctx.body = {status: false, error: 'token fromat should be "Bearer <jwt token>"'}
            return
        }
        
        const serviceToken = auth.substring(7)
        
        try {
            const userEmail = jwt.verify(serviceToken, config.tokenSecret).email
            ctx.user = userEmail
        } catch (e) {
            if (e.name === 'JsonWebTokenError' && e.message === 'invalid token') {
                ctx.response.status = 401
                ctx.body = { status: false, error: 'UnAuthorized: invalid token' }
            } else if (e.name === 'TokenExpiredError' && e.message === 'jwt expired') {
                ctx.response.status = 401
                ctx.body = { status: false, error: 'UnAuthorized: the token is expired' }
            } else {
                ctx.response.status = 401
                ctx.body = { status: false, error: `UnAuthorized: ${e.name}, ${e.message}` }
            }
            return
        }
        await next()
    },

    async login(ctx) {
        const type  = ctx.request.body.type
        const token = ctx.request.body.token
        const profile = await googleOAuth.verifyGoogleToken(token)
        if (profile === null) {
            ctx.response.status = 403
            ctx.body = { status: false, error: 'login fail: google access token invalid' }
            return
        }
        const service_token = googleOAuth.obtainServiceToken(profile)
        const user = await User.findOne({email: profile.email})
        if (!user) await User.saveGoogle(profile)
        ctx.body = { status: true, service_token }
    },
}