<template>
  <b-col cols="12" id="linkApp" class="mt-4">
    <link-detail
      v-for="link in links"
      :key="link.id"
      :longLink="link.longLink"
      :shortLink="link.shortLink"
    ></link-detail>
    <!-- TODO: -->
    Track the total of clicks in real-time from your shortened URL.
    Create other shortened URL.
  </b-col>
</template>

<script>
import LinkDetail from '@/components/LinkDetail.vue'

export default {
  name: "linkApp",
  components: {
    LinkDetail
  },
  data() {
    return {
      links: [
        { id: 1, longLink: "https://google.com", shortLink: "asdlsakjh" },
        { id: 2, longLink: "https://medium.com", shortLink: "213521234" }
      ]
    };
  }
};
</script>

<style scoped>
#linkApp {
  background: #f9f9f9;
  padding: 1%;
}
</style>