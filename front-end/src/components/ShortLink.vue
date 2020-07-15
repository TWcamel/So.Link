<template>
  <b-col cols="12" id="linkApp" class="mt-4">
    <linkDetail
      v-for="link in links_raw"
      :key="link.id"
      :longLinks="link.longLink"
      :shortLinks="link.shortLink"
    ></linkDetail>
    <!-- TODO: -->
    Track the total of clicks in real-time from your shortened URL.
    Create other shortened URL.
  </b-col>
</template>

<script>
import Vue from "vue";
const linkDetail = Vue.component("showLinks", {
  props: ["longLinks", "shortLinks"],
  template: `
  <div style="margin:0 auto; padding:1rem 1.5rem">
  <b-input-group prepend="Short URL" style="place-content: center;">
    <b-form-input type="text" v-model="shortLinks" style="max-width:400px"/>  
      <b-input-group-append>
        <b-button variant="outline-primary" @click.prevent="copyFunction"> <b-icon-clipboard/> </b-button>
      </b-input-group-append>
  </b-input-group>
    <div>Long URL: {{ longLinks }} </div>
    <div>Short URL: {{ shortLinks }} </div>
  </div>
  `,
  methods: {
    copyFunction() {
      alert("This is a copy function!");
    }
  }
});
export default {
  name: "linkApp",
  components: {
    linkDetail
  },
  data() {
    return {
      links_raw: [
        { id: 1, longLink: "https://google.com", shortLink: "asdlsakjh" },
        { id: 2, longLink: "https://medium.com", shortLink: "213521234" }
      ]
    };
  }
};
</script>

<style scoped>
#linkApp {
  background: #f9f9f9;
  padding: 1%;
}
</style>