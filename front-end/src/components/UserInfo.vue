<template>
  <b-card-group deck>
    <b-card bg-variant="light" text-variant="black" header="發表過的短連結🔗" class="text-center">
      <allLinks
        v-for="link in links"
        :key="link.id"
        :longLinks="link.longLink"
        :shortLinks="link.shortLink"
        :messages="copyStatus"
      ></allLinks>
    </b-card>
  </b-card-group>
</template>

<script>
import Vue from "vue";
const allLinks = Vue.component("showUserLinks", {
  props: ["longLinks", "shortLinks", "messages"],
  template: `
  <div style="margin:0 auto; padding:0.5rem 0rem; max-width: 400px;">
    <b-input-group prepend="Short URL" style="place-content: center;" class="mb-2">
      <b-form-input type="text" v-model="shortLinks"/>  
      <b-input-group-append>
        <b-button variant="outline-primary" @click="copyTextFunction" v-b-tooltip.hover :title="messages"> 
          <b-icon-clipboard/> 
        </b-button>
      </b-input-group-append>
    </b-input-group>
    <b-input-group prepend="Long URL" style="place-content: center;" class="mb-2">
      <b-form-input type="text" v-model="longLinks"/>  
      <b-input-group-append>
        <b-button variant="outline-primary" @click.prevent="copyTextFunction"> <b-icon-clipboard/> </b-button>
      </b-input-group-append>
    </b-input-group>
    <b-card-text>Total count of this link: {{}} </b-card-text>
  </div>
  `,
  methods: {
    copyTextFunction: function() {
      this.$copyText(this.longLinks).then(
        ele => {
          this.title = "copied!";
          console.log(ele);
        },
        ele => {
          alert("Fail to copy");
          console.log(ele);
        }
      );
    }
  },
  watch: {
    copyStatus: function(value) {
      this.messages = value;
    }
  }
});
export default {
  components: {
    allLinks
  },
  data: function() {
    return {
      links: [
        {
          id: 1,
          longLink: "https:gohaskfjhogle.com",
          shortLink: "https:google.com"
        },
        { id: 2, longLink: "https:google.com", shortLink: "https:google.com" }
      ],
      copyStatus: "Tap to copy URL"
    };
  }
};
</script>

<style scoped>
#UserInfoCardContainer {
  display: block;
  margin: 0 auto;
}
</style>