<template>
  <div class="headerParallax">
    <img class="header-items parallax" src="@/assets/texts_without_girl.png" alt />
    <div class="header-items parallax moto">
      <!-- <h1>Title Here</h1> -->
    </div>
    <img class="header-items parallax" src="@/assets/girl_with_logo.png" alt />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    window.addEventListener("scroll", this.handleScroll, {
      capture: false,
      passive: true,
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      document
        .querySelector(".headerParallax")
        .style.setProperty("--y_value", `${window.scrollY}px`);

      // console.log(
      //   `in scroll handler now, and the Y value now is ${window.scrollY}px`
      // );
    },
  },
};
</script>

<style scoped>
.headerParallax {
  width: 0vw;
  height: 100vh;
  --y_value: 0px;
}
img {
  max-width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: top;
}
.header-items {
  position: absolute;
  will-change: transform;
}
.header-items:nth-child(1) {
  transform: translateY(calc(var(--y_value) * -0.6));
  z-index: 1;
}
.header-items:nth-child(2) {
  transform: translateY(calc(var(--y_value) * -0.8));
  z-index: 2;
}
.header-items:nth-child(3) {
  transform: translateY(calc(var(--y_value) * -0.99));
  z-index: 3;
}
.parallax {
  position: fixed;
}
</style>