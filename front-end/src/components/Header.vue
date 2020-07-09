<template>
  <b-container id="headBar">
    <b-row cols="12">
      <b-col>
        <b-button id="btn_headBar" block variant="outline-info" @click.prevent="logout">Logout</b-button>
      </b-col>
    </b-row>
    <Slide disableOutsideClick :closeOnNavigation="true">
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>
  </b-container>
</template>
<script>
import authService from "@/services/authService";
import {Slide } from "vue-burger-menu";
export default {
  methods: {
    async logout() {
      const logOut = await authService.signOut();
      if (logOut) {
        await this.$router.push("login");
      } else {
        alert("fail to log out!");
      }
    }
  },
  components: {
    Slide
  }
};
</script>

<style scoped>
#headBar {
  margin-top: 2em;
  margin-bottom: 4em;
}
#btn_headBar {
  display: inline-table;
}
.vnb {
  background: #fcd1d1;
}
</style>