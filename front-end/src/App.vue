<template>
  <div id="app">
    <b-container class="mt-4">
      <b-row class="mb-4" cols="12">
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
    document.title = 'short link'
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
