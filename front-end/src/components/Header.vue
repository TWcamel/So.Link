<template>
  <b-row class="mb-4 mt-4">
    <Slide disableOutsideClick :closeOnNavigation="true" noOverlay>
      <span>
        <b-button block variant="light" @click.prevent="redirectToHome">Home</b-button>
      </span>
      <span>
        <b-button
          block
          variant="light"
          @click.prevent="redirectToShortenLink"
          v-scroll-to="'#shortenLink'"
        >Shorten Link</b-button>
      </span>
      <span>
        <b-button
          block
          variant="light"
          @click.prevent="redirectToUserInfo"
          v-scroll-to="'#userInfo'"
        >User Info</b-button>
      </span>
      <span>
        <b-button block variant="light" @click.prevent="logout">Logout</b-button>
      </span>
    </Slide>
  </b-row>
</template>
<script>
import authService from "@/services/authService";
import { Slide } from "vue-burger-menu";
export default {
  methods: {
    async logout() {
      const logOut = await authService.signOut();
      if (logOut) {
        await this.$router.push("landingPage");
      } else this.$awm.alert("Fail to log out😢");
    },
    redirectToUserInfo() {
      if (this.$router.currentRoute.path !== "/") this.$router.push("UserInfo");
    },
    redirectToHome() {
      if (this.$router.currentRoute.path !== "/") this.$router.push("/");
    },
    redirectToShortenLink() {
      if (this.$router.currentRoute.path !== "/")
        this.$router.push("shortenLink");
    }
  },
  components: {
    Slide
  }
};
</script>

<style scoped>
/* #btn_headBar {
  display: inline-table;
} */
</style>