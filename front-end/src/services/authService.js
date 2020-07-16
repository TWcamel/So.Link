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
            const response = googleUser.getAuthResponse()
            const access_token = response.access_token
            const token_type = 'access_token'
            const loginResult = (await api().post('auth/login', {
                type: 'google',
                token: access_token,
                token_type,
            })).data
            VueCookies.set('service_token', loginResult.service_token, Infinity);
            return true
        } catch (e) {
            return false
        }
    },

    async signOut() {
        try {
            VueCookies.remove('service_token')
            return true
        }
        catch (e) {
            console.error(e)
            return false
        }
    }
}