<template>
  <div id="app">
    <b-container class="mt-4">
      <b-row class="mb-4" cols="12" id="headerBlock">
        <router-view name="nav"></router-view>
      </b-row>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    document.title = "short link";
  }
};
</script>

<style>
@import "~vue-awesome-notifications/dist/styles/style.css";
:root {
  --bgcolor-primary: #e9eaec;
  --bgcolor-second: #f9f9f9;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  background-color: #ffffff;
}
#headerBlock {
  margin: 0 auto;
  z-index: 1;
  position: relative;
}
</style>
