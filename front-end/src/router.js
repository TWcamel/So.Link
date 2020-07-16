import LandingPage from '@/pages/LandingPage.vue';
import HomePage from '@/pages/HomePage.vue';
import UserInfo from '@/components/UserInfo.vue';
import Header from '@/components/Header.vue';

export const routes = [
    {
        path: '/landingPage',
        component: LandingPage,
        children: []
    },
    {
        path: '/',
        components: {
            default: HomePage,
            nav: Header,
        },
    },
    {
        path: '/UserInfo',
        components: {
            default: UserInfo,
            nav: Header,
        }
    },
    {
        path: '*',
        redirect: '/'
    }
];
