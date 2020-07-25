import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import GAuth from 'vue-google-oauth2'
import VueCliperboard from 'vue-clipboard2'
import VueAWN from 'vue-awesome-notifications'
import VueScrollTo  from 'vue-scrollto';

import config from '@/config.js';

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {router, chkToken }from './router'

const gauthoption = config.gauthoption;
const VueAWNoptions = config.vueAWNoptions;
VueCliperboard.config.autoSetContainer = config.vueCliperboardConf;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(GAuth, gauthoption)
Vue.use(VueCliperboard)
Vue.use(VueAWN, VueAWNoptions)
Vue.use(VueScrollTo)
Vue.use(library)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

chkToken()


