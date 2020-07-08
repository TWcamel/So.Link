<template>
  <div id="homePage">
    <h1>This is full capcha's Demo</h1>
    <div class="output">
      Output
      <div class="tune-number">
        Tune Number:
        <i>{{ tuneNumber }}</i>
      </div>
      <div class="classes">
        Classes:
        <i>{{ classes }}</i>
      </div>
      <div class="abcelem">
        Struct returned from callback:
        <br />
        <i>{{ elem }}</i>
      </div>
    </div>
    <p class="instructions">
      Click around on the various parts of the sheet music and see what the
      resultant output is.
    </p>
    <div id="paper"></div>
  </div>
</template>

<script>
export default {
  data() {}
};
</script>

<style></style>