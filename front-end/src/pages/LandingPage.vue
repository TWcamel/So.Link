<template>
  <b-container id="landingPageWrap">
    <span id="logoLandingPage">
      <p>
        <img style="max-width:5%" src="@/assets/logo.png" />
      </p>
    </span>
    <b-row cols="12" class="mb-4">
      <b-col>
        <h1>Welcome to our website🐈</h1>
        <h1>Here, a handy short link tool is paparing for you</h1>
        <h3>Easily create your short link with simple steps</h3>
        <b-button class="mt-4" pill variant="primary" @click.prevent="signIn()">現在立即開始</b-button>
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col></b-col>
    </b-row>
    <router-view></router-view>
  </b-container>
</template>

<script>
import authService from "@/services/authService";
export default {
  name: "landingPage",
  components: {},
  mounted() {
    const promise = new Promise((resv, rejt) => {
      resv(5000);
    });
    const waitPageLoad = promise.then(val =>
      setTimeout(() => {
        val;
      }),
    )
    this.$awn.asyncBlock(waitPageLoad, () => this.$awn.info("頁面載入完成 😄"))
  },
  methods: {
    async signIn() {
      const success = await authService.signIn(this.$gAuth);
      if (success) await this.$router.push("/");
      else this.$awn.alert("登入失敗，請您再試一次");
    }
  }
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