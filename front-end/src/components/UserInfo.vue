<template>
  <b-row>
    <b-col cols="12" v-for="link in links" :key="link.id">
      <link-detail :link="link" v-on:update:link="link" :messages="copyStatus"></link-detail>
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
import config from "../config.js";
import LinkDetail from "@/components/LinkDetail.vue";
import linkService from "@/services/linkService.js";

export default {
  components: {
    LinkDetail,
  },
  async created() {
    await this.updateLinks();
    document.getElementById("removeLinksBtn").onclick = await this.renderLinks;
    document.getElementById("shortenBtn").onclick = await this.updateLinks;
  },
  data() {
    return {
      links: [],
      copyStatus: "點擊以複製網址",
    };
  },
  methods: {
    async updateLinks() {
      const links = await linkService.getLinks();
      if (links.length !== 0) {
        links.forEach((link) => {
          link.short_link = `${config.linkBaseUrl}/${link.short_hash}`;
        });
        this.links = links;
      }
    },
    async renderLinks() {
      const links = await linkService.getLinks();
      this.links = links;
    },
  },
};
</script>

<style scoped>
#UserInfoCardContainer {
  display: block;
  margin: 0 auto;
}
</style>