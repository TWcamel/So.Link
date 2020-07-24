<template>
  <b-button
    variant="primary"
    class="mt-4"
    id="startbutton"
    :style="{opacity: startButtonOpacity, 'margin-bottom': '245px'}"
    @click="signIn()"
  >立即開始</b-button>
</template>

<script>
import authService from "@/services/authService";

export default {
  data() {
    return {
      startButtonOpacity: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.startButtonOpacity = 100;
    }, 3000);
  },
  methods: {
    async signIn() {
      const success = await authService.signIn(this.$gAuth);
      if (success) await this.$router.push("/");
      else this.$awn.alert("登入失敗，請您再試一次");
    },
  },
};
</script>