<template>
    <b-card class="mb-2">
        <b-input-group prepend="Short URL" style="place-content: center;" class="mb-2">
        <b-form-input type="text" v-model="shortLink" />
        <b-input-group-append>
            <b-button
            variant="outline-primary"
            @click="copyText"
            v-b-tooltip.hover
            :title="messages"
            >
            <b-icon-clipboard />
            </b-button>
        </b-input-group-append>
        </b-input-group>
        <b-input-group prepend="Long URL" style="place-content: center;" class="mb-2">
        <b-form-input type="text" v-model="longLink"/>
        <b-input-group-append>
            <b-button variant="outline-primary" @click.prevent="copyText">
            <b-icon-clipboard />
            </b-button>
        </b-input-group-append>
        </b-input-group>
        <b-card-text>Total count of this link: {{}}</b-card-text>
    </b-card>
</template>

<script>
export default {
  props: ["longLink", "shortLink", "messages"],
  methods: {
    copyText() {
        this.$copyText(this.longLink).then(
            ele => {
                this.title = "copied!";
                console.log(ele);
            },
            ele => {
            alert("Fail to copy");
            console.log(ele);
            }
        )
    }
  }
};
</script>

<style>
</style>