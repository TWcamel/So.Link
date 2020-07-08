const md5 = require('md5');

module.exports = {
    short (longUrl) {
        let shortUrlHashString = md5(longUrl)
        return shortUrlHashString
    },
}