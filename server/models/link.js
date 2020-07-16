const ObjectID = require('mongodb').ObjectID;
const database = require('../database/database.js')
const constants = require('../constants.js')

class Link {
    constructor (shortHash, longLink, clickNumber, registerTime) {
        this.short_hash = shortHash
        this.long_link = longLink
        this.click_number = clickNumber
        this.register_number = registerTime
    }

    static async add (shortHash, longLink) {
        const link = new Link(shortHash, longLink, 0, new Date())
        const collection = await database.getCollection(constants.COLLECTION_LINK)
        const linkExist = await Link.findOne(shortHash)
        if (!linkExist) {
            await collection.insertOne(link)
            return link
        }
        return linkExist
    }

    static async addClick (linkId) {
        const collection = await database.getCollection(constants.COLLECTION_LINK)
        await collection.updateOne(
            {_id: ObjectID(linkId)},
            {'$inc': {click_number: 1}}
        )
    }

    static async findOne (shortHash) {
        const collection = await database.getCollection(constants.COLLECTION_LINK)
        const result = await collection.findOne({short_hash: shortHash})
        return result
    }

    static async findMany(ids) {
        const collection = await database.getCollection(constants.COLLECTION_LINK)
        const result = collection.find({
            "_id" : {
                "$in": ids.map((o) => { return ObjectID(o) })
            }
        }).toArray()
        return result
    }
}


module.exports = Link