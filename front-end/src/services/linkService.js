import api from '@/services/api.js'

export default {

    async registerLink (longLink) {
        const result = (await api().post('link', {
            long_link: longLink
        })).data
        return result.short_link
    },

    async getLinks () {
        const result = (await api().get('link')).data
        console.log(result)
        return result
    }
}