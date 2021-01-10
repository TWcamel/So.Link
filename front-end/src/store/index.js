import Vue from 'vue'
import Vuex from 'vuex'

import LinkState from './modules/LinkState'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        LinkState,
    },
    strict: process.env.NODE_ENV !== 'production',
})
