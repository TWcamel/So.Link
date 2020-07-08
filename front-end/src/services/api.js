import axios from 'axios'
import VueCookies from 'vue-cookies'

export default () => {
    const service_token = VueCookies.get('service_token')
    return axios.create({
        baseURL: 'http://localhost:3000/api',
        headers: {'Authorization': `Bearer ${service_token}`}
    })
}