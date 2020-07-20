import LandingPage from '@/pages/LandingPage.vue';
import HomePage from '@/pages/HomePage.vue';
import UserInfo from '@/components/UserInfo.vue';
import Header from '@/components/Header.vue';
import ShortenLink from '@/components/ShortenLink.vue';

export const routes = [
    {
        path: '/landingpage',
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
        path: '/userinfo',
        components: {
            default: UserInfo,
            nav: Header,
        }
    },
    {
        path: '/shortenlink',
        components: {
            default: ShortenLink,
            nav: Header,
        }
    },
    {
        path: '*',
        redirect: '/'
    }
];
