<template>
  <b-row class="mb-4 mt-4" id="burgerBlock" v-burgerPosition:[direction]="2">
    <Slide disableOutsideClick :closeOnNavigation="true" noOverlay>
      <span>
        <b-button block variant="light" @click.prevent="redirectURL('/')">首頁</b-button>
      </span>
      <span>
        <b-button
          block
          variant="light"
          @click.prevent="redirectURL('shortenlink')"
          v-scroll-to="'#shortenLink'"
        >縮網址去!</b-button>
      </span>
      <span>
        <b-button
          block
          variant="light"
          @click.prevent="redirectURL('userinfo')"
          v-scroll-to="'#userInfo'"
        >使用者資訊</b-button>
      </span>
      <span>
        <b-button block variant="light" @click.prevent="logout">登出</b-button>
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
        await this.$router.push("landingpage");
      } else this.$awm.alert("登入失敗😢");
    },
    redirectURL(url) {
      if (this.$router.currentRoute.path !== "/") this.$router.push(`${url}`);
    }
  },
  components: {
    Slide
  },
  directives: {
    burgerPosition: {
      bind(el, binding, vnode) {
        el.style.position = "fixed";
        const s = binding.arg == "left" ? "left" : "top";
        el.style[s] = binding.value + "vw";
        el.style['z-index'] = "10000";
      }
    }
  },
  data(){
     return {
      direction: 'left'
    }
  }
};
</script>

<style scoped>
/* #btn_headBar {
  display: inline-table;
} */
</style>