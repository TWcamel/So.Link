import Vue from 'vue'
import VueRouter from 'vue-router'
import GAuth from 'vue-google-oauth2'
import Vuesax from 'vuesax'
import VueCliperboard from 'vue-clipboard2'
// import VueScrollTo  from 'vue-scrollto';

import config from '@/config.js';
import 'vuesax/dist/vuesax.css'

import App from './App.vue'
import {router, chkToken } from './router'

const gauthoption = config.gauthoption;
VueCliperboard.config.autoSetContainer = config.vueCliperboardConf;

Vue.use(VueRouter)
Vue.use(GAuth, gauthoption)
Vue.use(Vuesax)
Vue.use(VueCliperboard)
// Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

chkToken()



