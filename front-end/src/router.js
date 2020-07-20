import LandingPage from '@/pages/LandingPage.vue';
import HomePage from '@/pages/HomePage.vue';
import UserInfo from '@/components/UserInfo.vue';
import Header from '@/components/Header.vue';
import ShortenLink from '@/components/ShortenLink.vue';

export const routes = [
    {
        path: '/landing-page',
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
        path: '/user-info',
        components: {
            default: UserInfo,
            nav: Header,
        }
    },
    {
        path: '/shorten-link',
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
