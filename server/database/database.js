const mongo = require('mongodb').MongoClient;
const config = require('../config.js');

class Database {
    constructor(dbName) {
        this.databaseName = dbName;
    }

    set databaseName(value) {
        this._dbName = value;
        this._client = undefined;
        this._db = undefined;
        this.getDB();
        this._tranactionOptions = undefined;
    }

    async getClient() {
        return this._client
    }

    async getDB() {
        if (this._client === undefined || this._db === undefined) {
            try {
                this._client = await mongo.connect(config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
                this._db = await this._client.db(this._dbName);
                return this._db;
            } catch (error) {
                console.error(`connnected ${config.mongoUrl} error`);
                console.error(`error: ${error}`)
            }
        }
        return this._db;
    }

    async getCollection(collectionName) {
        if (this._client === undefined || this._db === undefined) {
            await this.getDB();
        }
        const collection = this._db.collection(collectionName);
        return collection;
    }

    async closeDB() {
        await this._client.close();
        this._client = undefined;
        this._db = undefined;
    }

    async getTransacation() {
        if (this._client === undefined || this.db === undefined) {
            const sus = await this.getDB()
        }
        const session = this._client.startSession()
        return session
    }

    getTransactionOptions() {
        this._tranactionOptions = {
            readPreference: 'primary',
            readConcern: { level: 'local' },
            writeConcern: { w: 'majority' }
        };
    }
}

const database = new Database(config.mongoDatabaseName);

module.exports = database;