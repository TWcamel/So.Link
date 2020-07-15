import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import GAuth from 'vue-google-oauth2'
import VueCookies from 'vue-cookies'

const gauthoption = {
  clientId: '992404826895-b9uhfv728468lnqa1tne87drhb6svdfa.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(GAuth, gauthoption)
Vue.use(VueCookies)

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { routes } from './router'

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  const clientoken = VueCookies.get('service_token');
  if (clientoken) {
    next();
  } else {
    if (to.path !== '/landingPage' || clientoken === undefined) {
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


