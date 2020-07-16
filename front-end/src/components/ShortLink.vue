<template>
  <b-col cols="12" id="linkApp" class="mt-4">
    <linkDetail :longLinks="links_raw.longLink" :shortLinks="links_raw.shortLink"></linkDetail>
    <!-- TODO: -->
    Track the total of clicks in real-time from your shortened URL.
    Create other shortened URL.
  </b-col>
</template>

<script>
import Vue from "vue";
const linkDetail = Vue.component("showLink", {
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
      links_raw: {
        longLink: "https://google.com",
        shortLink: "asdlsakjh"
      }
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