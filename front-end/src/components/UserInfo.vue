<template>
  <b-row>
    <b-col cols="12" v-for="link in links" :key="link.id">
      <link-detail :link="link" :messages="copyStatus"></link-detail>
    </b-col>
  </b-row>
</template>

<script>
import config from '../config.js'
import LinkDetail from '@/components/LinkDetail.vue'
import linkService from '@/services/linkService.js'

export default {
  components: {
    LinkDetail
  },

    async mounted() {
        const links = await linkService.getLinks()
        links.forEach(link => {
            link.short_link = `${config.linkBaseUrl}/${link.short_hash}`
        })
        this.links = links
    },

    data() {
        return {
          links: [],
          copyStatus: "Tap to copy URL"
        }
  },
  watch: {
    copyStatus: {
      immediate: true,
      handler(newValue, oldValue) {
        let newStatus = newValue || "no new value";
        let oldStatus = oldValue || "no old value";

        console.log("old value: " + oldStatus);
        console.log("new value: " + newStatus);
      }
      // this.copyStatus = value;
    }
  }
};
</script>

<style scoped>
#UserInfoCardContainer {
  display: block;
  margin: 0 auto;
}
</style>