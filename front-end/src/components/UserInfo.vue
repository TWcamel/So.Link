<template>
    <b-row>
      <b-col cols="12" v-for="link in links" :key="link.id">
        <link-detail
          :link=link
          :messages="copyStatus"
        ></link-detail>
      </b-col>
    </b-row>
</template>

<script>
import LinkDetail from '@/components/LinkDetail.vue'
// import linkService from '@/services/linkService.js'

export default {
    components: {
        LinkDetail
    },

    async mounted() {
        // const links = await linkService.getLinks()
        // this.links = links
    },

    data() {
        return {
          links: [
            {
                _id: 1,
                long_link: "https://gohaskfjhogle.com",
                short_link: "https://google.com",
                click_number: 2357,
                register_time: new Date()
            },
            { 
                _id: 2,
                long_link: "https://gohaskfjhogle.com",
                short_link: "https://google.com",
                click_number: 7768,
                register_time: new Date()
            }
          ],
          copyStatus: "Tap to copy URL"
        }
    }
}
</script>

<style scoped>
#UserInfoCardContainer {
  display: block;
  margin: 0 auto;
}
</style>