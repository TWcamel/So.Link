const jwt = require('jsonwebtoken')
const googleOAuth = require('../libs/googleOAuth.js')
const config = require('../config.js')
const User = require('../models/user.js')

module.exports = {

    async verifyServiceToken(ctx, next) {
        const authorization = ctx.headers.authorization
        
        if (!authorization || authorization.substring(0, 7) !== 'Bearer ') {
            ctx.response.status = 401
            ctx.body = { message: 'token fromat should be "Bearer <jwt token>"' }
            return
        }
        
        const serviceToken = authorization.substring(7)
        
        try {
            const userEmail = jwt.verify(serviceToken, config.tokenSecret).email
            ctx.user = userEmail
        } catch (e) {
            if (e.name === 'JsonWebTokenError' && e.message === 'invalid token') {
                ctx.response.status = 401
                ctx.body = { message: 'UnAuthorized: invalid token' }
            } else if (e.name === 'TokenExpiredError' && e.message === 'jwt expired') {
                ctx.response.status = 401
                ctx.body = { message: 'UnAuthorized: the token is expired' }
            } else {
                ctx.response.status = 401
                ctx.body = { message: `UnAuthorized: ${e.name}, ${e.message}` }
            }
            return
        }
        await next()
    },

    async login(ctx) {
        const type = ctx.request.body.type
        const token = ctx.request.body.token
        const tokenType = ctx.request.body.token_type
        
        if (!token) {
            ctx.response.status = 400
            ctx.body = { message: 'body parameter "token" should be given.' }
            return
        } else if (tokenType !== 'id_token' && tokenType !== 'access_token') {
            ctx.response.status = 400
            ctx.body = { message: 'body parameter "token_type" should be "id_token" or "access_token".' }
            return
        }
        
        const profile = await googleOAuth.verifyGoogleToken(token)
        console.log(profile)
        if (profile === null) {
            ctx.response.status = 403
            ctx.body = { message: 'login fail: google access token invalid' }
            return
        }
        const service_token = googleOAuth.obtainServiceToken(profile)
        const user = await User.findOne({email: profile.email})
        if (!user) await User.saveGoogle(profile)
        ctx.body = { status: true, service_token }
    },
}