<template>
  <b-card-group deck>
    <b-card bg-variant="light" text-variant="black" header="發表過的短連結🔗" class="text-center">
      <link-detail
        v-for="link in links"
        :key="link.id"
        :longLink="link.longLink"
        :shortLink="link.shortLink"
        :messages="copyStatus"
      ></link-detail>
    </b-card>
  </b-card-group>
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