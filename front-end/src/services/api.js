import axios from 'axios'
import VueCookies from 'vue-cookies'
import config from '../config.js'

export default () => {
    const service_token = VueCookies.get('service_token')
    return axios.create({
        baseURL: `${config.serverUrl}/api`,
        headers: {'Authorization': `Bearer ${service_token}`}
    })
}