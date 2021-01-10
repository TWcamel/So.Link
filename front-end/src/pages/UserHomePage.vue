<template>
    <vs-row>
        <vs-row id="userPage">
        </vs-row>
        <vs-row>
            <shorten-link />
        </vs-row>
        <vs-row>
            <vs-col cols="12" v-for="link in links" :key="link.id">
                <link-detail
                    :link="link"
                    @on-result-change="updateLinks()"
                    :messages="copyStatus"
                ></link-detail>
            </vs-col>
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
        return { links: [], copyStatus: '點擊以複製網址' }
    },
    methods: {
        async updateLinks() {
            const links = await linkService.getLinks()
            console.log(links)
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
        // document.getElementById('shortenBtn').onclick = await this.updateLinks
    },
}
</script>

<style scoped>
#userPage {
    padding-top: 10em;
}
</style>
