<template>
    <b-row>
      <b-col cols="12" v-for="link in links" :key="link.id">
        <link-detail
          :longLink="link.longLink"
          :shortLink="link.shortLink"
          :messages="copyStatus"
        ></link-detail>
      </b-col>
    </b-row>
</template>

<script>
import LinkDetail from '@/components/LinkDetail.vue'

export default {
  components: {
    LinkDetail
  },
  data: function() {
    return {
      links: [
        {
          id: 1,
          longLink: "https:gohaskfjhogle.com",
          shortLink: "https:google.com"
        },
        { id: 2, longLink: "https:google.com", shortLink: "https:google.com" }
      ],
      copyStatus: "Tap to copy URL"
    };
  }
};
</script>

<style scoped>
#UserInfoCardContainer {
  display: block;
  margin: 0 auto;
}
</style>