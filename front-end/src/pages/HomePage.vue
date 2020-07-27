<template>
  <b-container>
    <b-row id="HomePage" :style="{opacity: allOpacity}">
      <b-col cols="12">
        <h1
          class="mt-4 mb-4"
          id="title"
          :style="{opacity: titleOpacity, 'padding-top': '233px'}"
        >{{title}}</h1>
        <shorten-link />
      </b-col>
      <b-col cols="12" id="userInfo" class="HomePage-item">
        <h1 class="mb-4 mt-4">使用者資訊</h1>
        <user-info/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
import ShortenLink from "@/components/ShortenLink.vue";

export default {
  components: {
    ShortenLink,
    UserInfo,
  },
  data() {
    return {
      title: "縮網址",
      allOpacity: 0,
      titleOpacity: 100,
      startButtonOpacity: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.allOpacity = 100;
    }, 200);
    setTimeout(() => {
      this.titleOpacity = 0;
    }, 1400);
    setTimeout(() => {
      this.titleOpacity = 100;
      this.title = "So . Link ";
    }, 2400);
    setTimeout(() => {
      this.startButtonOpacity = 100;
    }, 3000);
  },
};
</script>

<style scoped>
#HomePage {
  background-image: url("../assets/chain.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-position: center;
  transition-property: opacity;
  transition-duration: 1.2s;
  transition-timing-function: ease-in-out;
  color: white;
}
.HomePage-item:nth-child(odd) {
  color: rgb(80, 78, 78);
  background: var(--bgcolor-primary);
}
.HomePage-item:nth-child(even) {
  color: rgb(80, 78, 78);
  background: var(--bgcolor-second);
}

#HomePage::before {
  background: rgba(0, 0, 0, 0.3);
}

#title {
  transition-property: opacity;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  font-weight: bold;
}

#startbutton {
  transition-property: opacity;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
</style>