<template>
  <b-container id="landingPageWrap">
    <span id="logoLandingPage">
      <p>
        <img style="max-width:5%" src="@/assets/logo.png" />
        LeadPages
      </p>
    </span>
    <b-row cols="12" class="mb-4">
      <b-col>
        <h1>Welcome to our website🐈</h1>
        <h1>Here, a handy short link tool is paparing for you</h1>
        <h3>Easily create your short link with simple steps</h3>
        <b-button pill variant="primary">Let's Get Started</b-button>
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col>
        <Login></Login>
      </b-col>
    </b-row>
    <router-view></router-view>
  </b-container>
</template>

<script>
import Login from "@/components/Login.vue";
export default {
  name: "landingPage",
  components: {
    Login
  },
  methods: {}
};
</script>

<style scoped>
#landingPageWrap {
  text-align: center;
}
#logoLandingPage {
  margin: 0 auto;
  text-align: left;
}
h3 {
  color: grey;
}
</style>