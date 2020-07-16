<template>
  <b-row id="HomePage">
    <b-col cols="12">
      <span>LEADPAGES PRICING</span>
      <h1 class="mb-4">Try Leadpages Risk-Free Today</h1>
      <h5>Discover why more than 40,000 small business owners choose Leadpages.</h5>
      <h5>Select a plan to get started with your free 14-day trial.</h5>
    </b-col>
    <b-col cols="12"></b-col>
    <links></links>
  </b-row>
</template>

<script>
import links from "@/components/ShortLink.vue";

export default {
  components: {
    links
  }
};
</script>

<style scoped>
#HomePage {
  /* background: #f9f9f9; */
}
</style>