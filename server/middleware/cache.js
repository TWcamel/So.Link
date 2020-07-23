const redis = require('redis')
const config = require('../config.js')
// const client = redis.createClient(config.redisPort)

module.exports = {
    // client,
    async cache(ctx, next) {
        client.get('name', (err, data) => {
            if (err) throw err
            if (data !== null) {
                ctx.body = { data }
            } else {
                next()
            }
        })
    }
}