<template>
  <!-- <div style="margin:0 auto; padding:1rem 1.5rem">
        <b-input-group prepend="Short URL" style="place-content: center;">
        <b-form-input type="text" v-model="shortLink" style="max-width:400px"/>  
            <b-input-group-append>
                <b-button variant="outline-primary" @click.prevent="copyFunction"> <b-icon-clipboard/> </b-button>
            </b-input-group-append>
        </b-input-group>
        <div>Long URL: {{ longLink }} </div>
        <div>Short URL: {{ shortLink }} </div>
  </div>-->

  <div style="margin:0 auto; padding:0.5rem 0rem; max-width: 400px;">
    <b-input-group prepend="Short URL" style="place-content: center;" class="mb-2">
      <b-form-input type="text" v-model="shortLink" />
      <b-input-group-append>
        <b-button
          variant="outline-primary"
          @click="copyTextFunction"
          v-b-tooltip.hover
          :title="messages"
        >
          <b-icon-clipboard />
        </b-button>
      </b-input-group-append>
    </b-input-group>
    <b-input-group prepend="Long URL" style="place-content: center;" class="mb-2">
      <b-form-input type="text" v-model="longLink" />
      <b-input-group-append>
        <b-button variant="outline-primary" @click.prevent="copyTextFunction">
          <b-icon-clipboard />
        </b-button>
      </b-input-group-append>
    </b-input-group>
    <b-card-text>Total count of this link: {{}}</b-card-text>
  </div>
</template>

<script>
export default {
  props: ["longLink", "shortLink", "messages"],
  methods: {
    copyFunction() {
      alert("This is a copy function!");
    },
    copyTextFunction: function() {
      this.$copyText(this.longLink).then(
        ele => {
          this.title = "copied!";
          console.log(ele);
        },
        ele => {
          alert("Fail to copy");
          console.log(ele);
        }
      );
    }
  }
};
</script>

<style>
</style>