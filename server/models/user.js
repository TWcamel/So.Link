const users = []

class User {
    constructor(email, registerTimestamp, loginType) {
        this.email = email
        this.registerTimestamp = registerTimestamp
        this.loginType = loginType
    }

    static async saveGoogle(googleProfile) {
        users.push(new User(googleProfile.email, Date.now(), 'google'))
    }

    static async findOne({email, loginType}) {
        for (const user of users) {
            if (user.email === email && user.loginType === loginType) {
                return user
            }
        }
    }
}

module.exports = User