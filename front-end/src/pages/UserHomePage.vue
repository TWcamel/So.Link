<template>
    <vs-row>
        <vs-row class="UserHome">
            <vs-row id="UserHome-block"> </vs-row>
            <vs-row>
                <shorten-link :links="links" />
            </vs-row>
            <vs-row vs-justify="space-around" vs-align="center">
                <h2 id="UserHome-block" class="UserHome-item">使用者資訊</h2>
                <vs-row vs-w="5" v-for="link in links" :key="link.id">
                    <link-detail
                        :link="link"
                        @on-result-change="updateLinks()"
                        :messages="copyStatus"
                        :links="links"
                    />
                </vs-row>
            </vs-row>
            <vs-row vs-justify="center" vs-align="center">
                <h2 id="UserHome-block" class="UserHome-item">聯絡資訊</h2>
            </vs-row>
            <vs-row id="UserHome-block" vs-justify="center" vs-align="center">
                <!-- <vs-avatar
                    size="100px"
                    src="https://avatars0.githubusercontent.com/u/19822513?s=460&u=55d1398ce141efe5583c5ead2a9187f0a8bba290&v=4"
                /> -->
                <vs-avatar
                    v-for="(contact, idx) in contacts"
                    :key="idx"
                    size="100px"
                    :src="contact"
                />
            </vs-row>
        </vs-row>
    </vs-row>
</template>

<script>
import LinkDetail from '../components/LinkDetail'
import ShortenLink from '../components/ShortenLink'
import linkService from '@/services/linkService.js'
import config from '../config.js'

export default {
    components: { LinkDetail, ShortenLink },
    data() {
        return {
            links: [],
            copyStatus: '點擊以複製網址',
            contacts: [
                'https://avatars0.githubusercontent.com/u/19822513?s=460&u=55d1398ce141efe5583c5ead2a9187f0a8bba290&v=4',
                'https://avatars1.githubusercontent.com/u/37062662?s=400&u=f18540c67e83ea46bcdaa1c72b75c17aff1d80ce&v=4',
            ],
        }
    },
    methods: {
        async updateLinks() {
            const links = await linkService.getLinks()
            if (links.length !== 0) {
                links.forEach(link => {
                    link.short_link = `${config.linkBaseUrl}/${link.short_hash}`
                })
                this.links = links
            }
        },
    },
    async created() {
        await this.updateLinks()
    },
}
</script>

<style scoped>
.UserHome:nth-child(odd) {
    background-image: url('../assets/user_home.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-position: center;
}

#UserHome-block {
    padding: 2em 0em 2em 0em;
    margin: 0em 0em 3em 0em;
    align-content: center;
    width: 100%;
}

.UserHome-item:nth-child(odd) {
    color: rgb(80, 78, 78);
    background: var(--greyLight);
}
.UserHome-item:nth-child(even) {
    color: rgb(80, 78, 78);
    background: var(--links-bgcolor-second);
}

.UserHome::before {
    background: rgba(0, 0, 0, 0.3);
}
</style>
