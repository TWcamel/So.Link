import api from '@/services/api.js'
import VueCookies from 'vue-cookies'

export default {

    async registerLink(longLink, userIdentity) {
        let url
        if (userIdentity === "user") url = 'link'
        else if (userIdentity === "guest") url = 'link/guest'
        const result = (await api().post(`${url}`, {
            long_link: longLink
        })).data
        return result.short_link
    },

    async getLinks() {
        const result = (await api().get('link')).data
        return result
    },

    async getToken() {
        return VueCookies.get('service_token');
    }
}