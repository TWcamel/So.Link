<template>
    <div id="main-page">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <main-footer/>
    </div>
</template>

<script>
import MainFooter from '../components/MainFooter'
export default {
    components: {MainFooter},
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.9s;
    transition-property: height, opacity;
    transition-timing-function: ease;
    transition-delay: 0s;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
