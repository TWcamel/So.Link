<template>
  <div id="login">
    <div id="description">
      <h1>請登入以繼續</h1>
      <p>
        By logging in you agree to the ridiculously long terms that you didn't
        bother to read.
      </p>
    </div>
    <b-button variant="primary" @click="signIn()">Sign in with Google</b-button>
  </div>
</template>
<script>
import authService from "@/services/authService";
export default {
  methods: {
    async signIn() {
      const success = await authService.signIn(this.$gAuth);
      if (success) await this.$router.push("/");
      else alert("Sign in Failed! Plz try again");
    }
  }
};
</script>

<style scoped>
</style>
