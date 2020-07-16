<template>
    <div style="margin:0 auto; padding:1rem 1.5rem">
        <b-input-group prepend="Short URL" style="place-content: center;">
        <b-form-input type="text" v-model="shortLink" style="max-width:400px"/>  
            <b-input-group-append>
                <b-button variant="outline-primary" @click.prevent="copyFunction"> <b-icon-clipboard/> </b-button>
            </b-input-group-append>
        </b-input-group>
        <div>Long URL: {{ longLink }} </div>
        <div>Short URL: {{ shortLink }} </div>
    </div>
</template>

<script>
export default {
    props: ["longLink", "shortLink"],
    methods: {
    copyFunction() {
        alert("This is a copy function!");
    }
}
}
</script>

<style>

</style>