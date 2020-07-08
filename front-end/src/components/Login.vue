<template>
  <!-- <div id="login">
    <div id="description">
      <h1>Login</h1>
      <p>
        By logging in you agree to the ridiculously long terms that you didn't
        bother to read.
      </p>
    </div>
    <div id="form">
      <form @submit.prevent="login">
        <label for="userName">Your Name</label>
        <input
          type="text"
          id="userName"
          v-model="userName"
          placeholder="Donald Trump"
          autocomplete="off"
        />
        <label for="password">Password</label>&nbsp;
        <i class="fas" :class="[passwordIcon]" @click="hidePassword = !hidePassword"></i>
        <input :type="passwordType" id="password" v-model="password" placeholder="**********" />
        <button type="submit">Log in</button>
      </form>
    </div>
    <div id="captcha"></div>
  </div>-->
  <div>
    <h2 id="login-title">代購系統</h2>
    <h4 id="login-prompt">請登入以繼續</h4>
    <b-button variant="primary" @click="signIn()">Google Sign in</b-button>
  </div>
</template>
<script>
import authService from "@/services/authService";
export default {
  name: "login-page",
  data() {
    return {
      userName: "",
      password: "",
      hidePassword: true
    };
  },
  computed: {
    passwordType() {
      return this.hidePassword ? "password" : "text";
    },
    passwordIcon() {
      return this.hidePassword ? "fa-eye" : "fa-eye-slash";
    }
  },
  methods: {
    async signIn() {
      // if (this.userName === 'qq' && this.password === 'qq') {
      //   localStorage.setItem('token', 'ImLogin')
      //   this.$router.push('/')
      // } else alert('login failed')
      const success = await authService.signIn(this.$gAuth);
      if (success) this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
