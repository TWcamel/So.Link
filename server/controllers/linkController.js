const config = require('../config.js')
const linkShorter = require('../libs/linkShorter.js')
const Link = require('../models/link.js')

module.exports = {

    async register (ctx) {
        const {long_link} = ctx.request.body
        const shortHash = linkShorter.short(long_link)
        await Link.add(shortHash, long_link)
        ctx.body = {ststus: true, short_link: `http://${config.linkDoamin}/${shortHash}`}
    },

    async goToLink(ctx, next) {
        const shortHash = ctx.params.shortHash
        const link = await Link.find(shortHash)
        ctx.redirect(link.longLink)
        next()
    }
}