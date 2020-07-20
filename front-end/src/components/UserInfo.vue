<template>
  <b-row>
    <b-col cols="12" v-for="link in links" :key="link.id">
      <link-detail :link="link" :messages="copyStatus"></link-detail>
      <!-- <link-detail :link="link" @on-result-change="chMsg('Taped')" :messages="copyStatus"></link-detail> -->
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
    LinkDetail
  },

  async mounted() {
    const links = await linkService.getLinks();
    links.forEach(link => {
      link.short_link = `${config.linkBaseUrl}/${link.short_hash}`;
    });
    this.links = links;
  },

  data() {
    return {
      links: [],
      copyStatus: "Tap to get URL"
    };
  },
  methods: {
    chMsg(val) {
      this.copyStatus = val;
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