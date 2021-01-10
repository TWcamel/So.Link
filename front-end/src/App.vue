<template>
    <div id="app">
        <vs-row vs-w="12">
            <router-view name="nav" />
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
:root {
    --blue:#19294bab;
    --boxSize: 0.8em;
    --pageMiddle: 5em;
    --white: #fff;
    --black: #19294b;
    --grey: #7e889f;
    --greyLight: #f8f9fa;
    --blockAndBlock: 1em 0px 1em 0px;
    --gridAndGrid: 5em 0px 5em 0px;
    --blockWhiteBgColor: linear-gradient(
        -135deg,
        var(--greyLight) 0%,
        var(--white) 100%
    );
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}


</style>
