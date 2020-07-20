<template>
  <b-row id="HomePage">
    <b-col cols="12" class="hpgContainer-primary">
      <h1 class="mb-4 mt-4">Try Leadpages Risk-Free Today</h1>
      <h5>Discover why more than 40,000 small business owners choose Leadpages.</h5>
      <h5>Select a plan to get started with your free 14-day trial.</h5>
    </b-col>
    <b-col cols="12" class="hpgContainer-secon "  id="shortenLink">
      <h1 class="mb-4 mt-4">Post Short Link</h1>
      <shorten-link />
    </b-col>
    <b-col cols="12" class="hpgContainer-primary" id="userInfo">
      <h1 class="mb-4 mt-4">User Info</h1>
      <user-info />
    </b-col>
  </b-row>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
import ShortenLink from "@/components/ShortenLink.vue";

export default {
  components: {
    ShortenLink,
    UserInfo
  }
};
</script>

<style scoped>
#HomePage {
  background: var(--bgcolor-primary);
}
.hpgContainer-primary {
  background: var(--bgcolor-second);
}
</style>