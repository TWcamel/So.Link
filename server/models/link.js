const ObjectID = require('mongodb').ObjectID;
const database = require('../database/database.js')
const constants = require('../constants.js')


class Link {
    constructor(shortHash, longLink, clickNumber, registerTime, sequence) {
        this.short_hash = shortHash
        this.long_link = longLink
        this.click_number = clickNumber
        this.register_time = registerTime
        this.sequence = sequence
    }

    static async add(longLink) {
        const collection = await database.getCollection(constants.COLLECTION_LINK)
        const selectSequenceArray = await collection.find({}).sort({ sequence: -1 }).limit(1).toArray()
        const maxSequence = (selectSequenceArray.length !== 0) ? selectSequenceArray[0].sequence : 0
        let shortHash = Buffer.from(maxSequence.toString()).toString('base64')
        shortHash = shortHash.trim().split(/\=+/)[0]
        const link = new Link(shortHash, longLink, 0, new Date(), maxSequence + 1)
        const session = await database.getTransacation()
        try {
            await session.withTransaction(async () => {
                collection.insertOne(link, session)
            }, database.getTransactionOptions)
        } catch(e) {
            console.error(e)
        } finally {
            await session.endSession();
        }         
        return link
    }

    static async addClick(linkId) {
        const collection = await database.getCollection(constants.COLLECTION_LINK)
        await collection.updateOne(
            { _id: ObjectID(linkId) },
            { '$inc': { click_number: 1 } }
        )
    }

    static async findOne(shortHash) {
        const collection = await database.getCollection(constants.COLLECTION_LINK)
        const result = await collection.findOne({ short_hash: shortHash })
        return result
    }

    static async removeOne(linkId) {
        const collection = await database.getCollection(constants.COLLECTION_LINK)
        await collection.deleteOne(
            { _id: ObjectID(linkId) },
        )
    }

    static async findMany(ids) {
        const collection = await database.getCollection(constants.COLLECTION_LINK)
        const result = collection.find({
            "_id": {
                "$in": ids.map((o) => { return ObjectID(o) })
            }
        }).toArray()
        return result
    }
}

module.exports = Link