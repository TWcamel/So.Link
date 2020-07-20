import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import chMsg from './modules/chMsg'

export default new Vuex.Store({
    modules:{
        chMsg
    },
    strict: process.env.NODE_ENV !== 'production'
})