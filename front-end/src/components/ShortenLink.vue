<template>
  <b-col cols="12" id="linkApp" class="mt-4" style="text-align: -webkit-center">
    <b-input-group prepend="URL" style="max-width:80%;" class="mt-1">
      <b-form-input type="text" v-model="userLink" :placeholder="'Put Your URL here'" />
      <b-input-group-append>
        <b-button variant="primary" @click.prevent="regxLink(userLink)" v-b-tooltip.hover>Shorten!</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-input-group class="mt-4" style="place-content: center;">
      <h6>
        <p>Track the total of clicks in real-time from your shortened URL.</p>
        <p>
          Create other
          <a href="" @click.prevent="clearInputBlock">shortened URL.</a>
        </p>
      </h6>
    </b-input-group>
  </b-col>
</template>

<script>
import linkService from "@/services/linkService.js";
export default {
  components: {},
  data() {
    return {
      userLink: ""
    };
  },
  methods: {
    async regxLink(userLink) {
      const link = await linkService.registerLink(userLink);
      this.$awn.success(`${link}`);
    },
    clearInputBlock() {
      const len = this.userLink.toString().length;
      if (len > 0) {
        this.userLink = "";
        this.$awn.success(`Cleared! plz try to shorten URL again!`);
      } else if (len === 0) this.$awn.info(`plz shorten URL first!`);
    }
  }
};
</script>

<style scoped>
#linkApp {
  /* background: #f9f9f9; */
  padding: 1%;
}
p {
  text-align: center;
}
</style>