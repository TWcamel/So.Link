const database = require('../database/database.js')
const constants = require('../constants.js')
const { ObjectID } = require('mongodb')

class User {
    constructor(email, registerTime, loginType, linkIds) {
        this.email = email
        this.register_time = registerTime
        this.login_type = loginType
        this.link_ids = linkIds
    }

    static async saveGoogle(googleProfile) {
        const collection = await database.getCollection(constants.COLLECTION_USER)
        const user = new User(googleProfile.email, new Date(), 'google', [])
        await collection.insertOne(user)
        return user
    }

    static async findOne({ email }) {
        const collection = await database.getCollection(constants.COLLECTION_USER)
        const result = await collection.findOne({ email })
        return result
    }

    static async addLink(userEmail, linkId) {
        const collection = await database.getCollection(constants.COLLECTION_USER)
        const result = await collection.find({ email: userEmail, link_ids: ObjectID(linkId) }).toArray()
        if (result.length === 0) {
            await collection.updateOne(
                { email: userEmail },
                { '$push': { link_ids: linkId } }
            )
        }
    }

    static async removeLink(userEmail, linkId) {
        const collection = await database.getCollection(constants.COLLECTION_USER)
        if (linkId && userEmail) {
            await collection.updateOne(
                { email: userEmail },
                { '$pull': { link_ids: { '$in': [linkId] } } }
            )
        }
    }
}

module.exports = User