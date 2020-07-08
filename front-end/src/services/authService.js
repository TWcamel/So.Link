import api from '@/services/api.js'
import VueCookies from 'vue-cookies'

export default {

    async getProfile() {
        try {
            const result = (await api().get('user/profile')).data
            return result.profile
        } catch (e) {
            return null
        }
    },

    async signIn(gauth) {
        try {
            const googleUser = await gauth.signIn()
            const access_token = googleUser.getAuthResponse().access_token
            console.log(access_token)
            const loginResult = (await api().post('login', {
                token: access_token,
                type: 'google'
            })).data
            VueCookies.set('service_token', loginResult.service_token, Infinity);
            return true
        } catch (e) {
            return false
        }
    },

    async signOut() {

    }
}