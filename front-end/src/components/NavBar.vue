<template>
    <vs-navbar type="gradient" v-model="activeItem" id="navBar" color="var(--blue)" >
        <div slot="title">
            <vs-navbar-title> So . Link 縮 網 址 </vs-navbar-title>
        </div>
        <vs-navbar-item index="1" style="color: var(--white)"><a id="navBtn" href="#">Home</a></vs-navbar-item>
        <vs-navbar-item index="2" style="color: var(--white)"><a id="navBtn" href="#">News</a></vs-navbar-item>
        <vs-navbar-item index="3" style="color: var(--white)"><a id="navBtn" href="#">Update</a></vs-navbar-item>
        <vs-navbar-item style="color: var(--white)"><loggin-in /></vs-navbar-item>
    </vs-navbar>
</template>

<script>
import LogginIn from '@/components/LogginIn'

export default {
    data() {
        return { activeItem: 1 }
    },
    components:{
        LogginIn,
    }
}
</script>

<style scoped>
#navBar {
    color: var(--white);
}

.vs-navbar--title {
    font-size: 1.5em;
    padding: 1em;
}

#navBtn {
    padding: 1em;
}

</style>
