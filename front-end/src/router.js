import Vue from 'vue'
import Router from 'vue-router'
import VueCookies from 'vue-cookies'

import LandingPage from '@/pages/LandingPage.vue';
import HomePage from '@/pages/HomePage.vue';
import UserInfo from '@/components/UserInfo.vue';
import SideNavBar from '@/components/SideNavBar.vue';
import ShortenLink from '@/components/ShortenLink.vue';

Vue.use(Router)
Vue.use(VueCookies)

export const router = new Router({
    mode: 'history',
    base: __dirname,
    routes:
        [
            {
                path: '/landingpage',
                component: LandingPage,
                children: []
            },
            {
                path: '/',
                components: {
                    default: HomePage,
                    nav: SideNavBar,
                },
            },
            {
                path: '/userinfo',
                components: {
                    default: UserInfo,
                    nav: SideNavBar,
                }
            },
            {
                path: '/shortenlink',
                components: {
                    default: ShortenLink,
                    nav: SideNavBar,
                }
            },
            {
                path: '*',
                redirect: '/'
            }
        ]

});

export const chkToken = router.beforeEach((to, from, next) => {
    const clientoken = VueCookies.get('service_token');
    if (clientoken) {
        next();
    } else {
        if (to.path !== '/landingPage' && clientoken === null) {
            next('/landingPage')
        }
        else
            next()
    }
})

