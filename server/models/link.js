const links = []

class Link {
    constructor (shortHash, longLink) {
        this.shortHash = shortHash
        this.longLink = longLink
    }

    static async add (shortHash, longLink) {
        links.push(new Link(shortHash, longLink))
    }
    
    static async find (shortHash) {
        for (const link of links) {
            if (link.shortHash === shortHash) {
                return link
            }
        }
    }
}


module.exports = Link