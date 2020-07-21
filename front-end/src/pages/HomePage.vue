<template>
  <b-row id="HomePage">
    <b-col cols="12" class="hpgContainer-primary">
      <h1 class="mb-4 mt-4">Try Leadpages Risk-Free Today</h1>
      <h2>-------------Animates Here!!!!-------------</h2>
      <h5>Discover why more than 40,000 small business owners choose Leadpages.</h5>
      <h5>Select a plan to get started with your free 14-day trial.</h5>
    </b-col>
    <b-col cols="12" class="hpgContainer-secon "  id="shortenLink">
      <h1 class="mb-4 mt-4">發佈短鏈接</h1>
      <shorten-link />
    </b-col>
    <b-col cols="12" class="hpgContainer-primary" id="userInfo">
      <h1 class="mb-4 mt-4">使用者資訊</h1>
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
  position: relative;
  z-index: 0;
}
.hpgContainer-primary {
  background: var(--bgcolor-second);
}
</style>