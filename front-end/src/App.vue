<template>
  <div id="app">
    <b-row cols="12" id="headerBlock">
      <b-col cols="12">
        <router-view name="nav"/>
      </b-col>
    </b-row>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    document.title = "short link";
  },
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
}
</style>
