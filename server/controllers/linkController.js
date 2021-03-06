const config = require('../config.js')
// const linkShorter = require('../libs/linkShorter.js')
const Link = require('../models/link.js')
const User = require('../models/user.js')

module.exports = {

    async register(ctx) {
        const userEmail = ctx.user
        const { long_link } = ctx.request.body

        if (!long_link) {
            ctx.response.status = 400
            ctx.body = { message: 'body parameter "long_link" should be given' }
            return
        }

        const link = await Link.add(long_link)
        if (userEmail) {
            await User.addLink(userEmail, link._id)
        }
        ctx.body = { short_link: `http://${config.linkDoamin}${link.short_hash}` }
    },

    async getLinks(ctx) {
        const userEmail = ctx.user
        const user = await User.findOne({ email: userEmail })
        const links = await Link.findMany(user.link_ids)
        ctx.body = links
    },

    async goToLink(ctx, next) {
        const shortHash = ctx.params.shortHash
        const link = await Link.findOne(shortHash)
        if (link) {
            Link.addClick(link._id)
            ctx.redirect(link.long_link)
        }
        next()
    },

    async deleteLink(ctx) {
        const { short_hash } = ctx.request.body
        if (!short_hash) {
            ctx.response.status = 400
            ctx.body = { message: 'body parameter "short_hash" should be given' }
            return
        }
        const userEmail = ctx.user
        const link = await Link.findOne(short_hash)
        if (link) {
            User.removeLink(userEmail, link._id)
            Link.removeOne(link._id)
            ctx.response.status = 200
        }
        if (!link) ctx.body = { message: 'link has already been deleted' }

    }

}