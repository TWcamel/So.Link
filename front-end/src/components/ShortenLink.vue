<template>
  <b-col cols="12" id="linkApp" class="mt-4">
    <b-input-group prepend="URL" style="max-width:80%;" class="mt-1">
      <b-form-input type="text" v-model="userLink" :placeholder="'請輸入您的網址'" />
      <b-input-group-append>
        <b-button
          variant="primary"
          @click.prevent="regxLink(userLink, userIdentity)"
          v-b-tooltip.hover
          id="shortenBtn"
        >Shorten!</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-input-group prepend="ShortURL" style="max-width:80%;" class="mt-1">
      <b-form-input type="text" v-model="userShortSequence" :placeholder="'您的網址'" />
      <b-input-group-append>
        <b-button variant="primary" @click.prevent="copyText" v-b-tooltip.hover>
          <b-icon-clipboard />
        </b-button>
      </b-input-group-append>
    </b-input-group>
    <b-input-group class="mt-4" style="place-content: center;">
      <h5>
        清空以立即創建另一個
        <a href @click.prevent="clearInputBlock">短連結</a>
      </h5>
    </b-input-group>
  </b-col>
</template>

<script>
import linkService from "@/services/linkService.js";
export default {
  async mounted() {
    const token = await linkService.getToken();
    if (token) this.userIdentity = "user";
    else if (token === null) this.userIdentity = "guest";
  },
  components: {},
  data() {
    return {
      userLink: "",
      userShortSequence: "",
      userIdentity: "",
    };
  },
  methods: {
    async regxLink(userLink, userIdentity) {
      try {
        const vaildURL =
          userLink.indexOf("https://") + userLink.indexOf("http://") === -1
            ? true
            : false;
        if (vaildURL) {
          const link = await linkService.registerLink(userLink, userIdentity);
          this.userShortSequence = link;
          this.$awn.success(`${link}`);
        } else if (!vaildURL) {
          this.$awn.alert(`您輸入的 ${userLink} 不是一個合法的網址 😢`);
          if (userLink === "") this.$awn.info(` 請確認您已將網址填上哦 😉`);
        }
      } catch (e) {
        this.$awn.alert(`${e}`);
      }
    },
    clearInputBlock() {
      const len = this.userLink.toString().length;
      if (len > 0) {
        this.userLink = "";
        this.$awn.success(`您可以再次發佈短鏈接了 😊`);
      } else if (len === 0) this.$awn.info(`您尚未填入網址哦 😉`);
    },
    copyText() {
      this.$copyText(this.userShortSequence).then(
        (ele) => {
          this.$awn.success(`📎 ${ele.text}`);
        },
        (ele) => {
          this.$awn.alert(`Fail to copy`);
          console.log(ele);
        }
      );
    },
  },
};
</script>

<style scoped>
#linkApp {
  /* background: #f9f9f9; */
  /* padding: 1%; */
  text-align: -webkit-center;
}
p {
  text-align: center;
}
</style>