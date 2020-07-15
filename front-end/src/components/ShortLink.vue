<template>
  <div id="app1">
    <HelloWorld
      v-for="link in links_raw"
      :key="link.id"
      :longLinks="link.longLink"
      :shortLinks="link.shortLink"
    ></HelloWorld>
  </div>
</template>

<script>
import Vue from "vue";
const HelloWorld = Vue.component("showLinks", {
  props: ["longLinks", "shortLinks"],
  template: `
  <div>
    <h1>Hello world</h1>
    <div>{{ longLinks }}</div>
    <div>{{ shortLinks }}</div>
  </div>
  `
});
export default {
  name: "app1",
  components: {
    HelloWorld
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
</style>