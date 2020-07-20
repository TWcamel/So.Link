import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import GAuth from 'vue-google-oauth2'
import VueCookies from 'vue-cookies'
import VueCliperboard from 'vue-clipboard2'
import VueAWN from 'vue-awesome-notifications'
import VueScrollTo  from 'vue-scrollto';

import config from '@/config.js';

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { routes } from './router'

// const gauthoption = {
//   clientId: '442821260347-p7um9gd1rui1toibkq1vccm7d8uq6ug0.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'select_account'
// }
// const VueAWNoptions = {maxNotifications:3};

const gauthoption = config.gauthoption;
const VueAWNoptions = config.VueAWNoptions;
VueCliperboard.config.autoSetContainer = true;
// VueAWNoptions.labels = {
//   success: "Prosperity",
//   alert: "Failure",
//   info: "This is info"
// }


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(GAuth, gauthoption)
Vue.use(VueCookies)
Vue.use(VueCliperboard)
Vue.use(VueAWN, VueAWNoptions)
Vue.use(VueScrollTo)


const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  const clientoken = VueCookies.get('service_token');
  if (clientoken) {
    next();
  } else {
    if (to.path !== '/landingPage' && clientoken === undefined) {
      next('/landingPage')
    }
    else
      next()
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


