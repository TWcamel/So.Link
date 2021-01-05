<template>
    <div id="app">
        <vs-row vs-w="12" id="headerBlock">
            <vs-col
                :key="index"
                v-for="(col, index) in 3"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="2"
            >
                <router-view name="nav" />
            </vs-col>
        </vs-row>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        document.title = 'So . Link 縮 網 址'
    },
}
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

/* @import 'https://fonts.googleapis.com/icon?family=Material+Icons'; */

</style>
