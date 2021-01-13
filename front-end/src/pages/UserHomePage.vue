<template>
    <vs-row>
        <vs-row id="UserPage-block"> </vs-row>
        <vs-row>
            <shorten-link :links="links" />
        </vs-row>
        <vs-row vs-justify="center" vs-align="center" class="UserPage-item">
            <h2 id="UserPage-block">使用者資訊</h2>
            <vs-col style="width:70%;" v-for="link in links" :key="link.id">
                <link-detail
                    :link="link"
                    @on-result-change="updateLinks()"
                    :messages="copyStatus"
                />
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
#UserPage-block {
    padding: 2em 0em 2em 0em;
    align-content: center;
    width: 100%;
}

.UserPage-item:nth-child(odd) {
    color: rgb(80, 78, 78);
    background: var(--links-bgcolor-primary);
}
.UserPage-item:nth-child(even) {
    color: rgb(80, 78, 78);
    background: var(--links-bgcolor-second);
}

/* #UserPage::before {
    background: rgba(0, 0, 0, 0.3);
} */
</style>
