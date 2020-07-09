import Login from '@/components/Login.vue';
// import LandingPage from '@/pages/LandingPage.vue';
import HomePage from '@/pages/HomePage.vue';
// import UserInfo from '@/components/UserInfo.vue';
import Header from '@/components/Header.vue';
// import HelloWorld from '@/components/HelloWorld.vue';

export const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        components: {
            default: HomePage,
            nav: Header
        }
    },
    // {
    //     path: '/UserInfo',
    //     components: {
    //         default: UserInfo,
    //         nav: Header
    //     }
    // },
    {
        path: '*',
        redirect: '/'
    }
];
