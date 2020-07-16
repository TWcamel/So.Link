<template>
    <b-card class="mb-2">
        <b-row>
            <b-col cols="12" sm="8">
                <b-input-group prepend="Short URL" style="place-content: center;" class="mt-1">
                    <b-form-input type="text" v-model="link.short_link" />
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
                <b-input-group prepend="Long URL" style="place-content: center;" class="mt-1">
                    <b-form-input type="text" v-model="link.long_link"/>
                    <b-input-group-append>
                        <b-button variant="outline-primary" @click.prevent="copyText">
                        <b-icon-clipboard />
                        </b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-col>
            <b-col cols="12" sm="4" style="text-align: left;">
                <b-input-group style="place-content: center;" class="mt-1">
                    <b-form-input type="text" :placeholder="'點擊次數: ' + link.click_number" 
                        style="border: none; cursor: default; pointer-events: none;"/>
                </b-input-group>
                <b-input-group style="place-content: center;" class="mt-1">
                    <b-form-input type="text" :placeholder="'創立時間: ' + link.register_time" 
                    style="border: none; cursor: default; pointer-events: none;"/>
                </b-input-group>
            </b-col>
        </b-row>

    </b-card>
</template>

<script>
// import config from '../config.js'

export default {
    props: ["link", "messages"],

    data () {
        return {
            // link: {}
        }
    },

    mounted () {

    },

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