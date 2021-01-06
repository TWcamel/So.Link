import Vue from 'vue'
import Router from 'vue-router'
import VueCookies from 'vue-cookies'

Vue.use(Router)
Vue.use(VueCookies)

import MainPage from '@/pages/MainPage.vue';
import LandingPage from '@/pages/LandingPage.vue';
import NavBar from '@/components/NavBar.vue';

export const router = new Router({
    mode: 'history',
    base: __dirname,
    routes:
        [
            {
                path: '/',
                name: 'main-page',
                components: {
                    default: MainPage,
                    nav: NavBar,
                },
                children: [
                    {
                        path: '/',
                        name: 'landing-page',
                        component: LandingPage,
                    },
                    // {
                    //     path: '/homepage',
                    //     name: 'home-page',
                    //     component: HomePage,
                    // },
                    // {
                    //     path: '/userinfo',
                    //     name: 'user-info',
                    //     component: UserInfo
                    // },
                ]
            }
        ]
})

export const chkToken = router.beforeEach((to, from, next) => {
    const clientoken = VueCookies.get('service_token');
    if (clientoken) {
        next();
    } else {
        if (to.path !== '/' && clientoken === null) {
            next('/')
        }
        else
            next()
    }
})

