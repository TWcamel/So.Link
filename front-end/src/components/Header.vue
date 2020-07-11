<template>
  <Slide disableOutsideClick :closeOnNavigation="true" noOverlay>
    <span>
      <b-button block variant="light" @click.prevent="redirectToHome">Home</b-button>
    </span>
    <span>
      <b-button block variant="light" @click.prevent="redirectToUserInfo">UserInfo</b-button>
    </span>
    <span>
      <b-button block variant="light" @click.prevent="logout">Logout</b-button>
    </span>
  </Slide>
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
      } else {
        alert("fail to log out😢");
      }
    },
    redirectToUserInfo() {
      if (this.$router.currentRoute.path !== "/UserInfo")
        this.$router.push("UserInfo");
    },
    redirectToHome() {
      if (this.$router.currentRoute.path !== "/") this.$router.push("/");
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