<template>
    <vs-button
        type="relief"
        id="loginBtn"
        :style="{ opacity: startButtonOpacity }"
        @click="signIn()"
        >以Google登入以繼續</vs-button
    >
</template>

<script>
import authService from '@/services/authService'

export default {
    data() {
        return {
            startButtonOpacity: 0,
        }
    },
    mounted() {
        setTimeout(() => {
            this.startButtonOpacity = 100
        }, 3000)
    },
    methods: {
        async signIn() {
            const success = await authService.signIn(this.$gAuth)
            if (success) await this.$router.push('user-home-page')
            else
                this.$vs.notify({
                    title: '錯誤（ Wrong ）',
                    text: '登入失敗，請您再試一次',
                    color: 'danger',
                })
        },
    },
}
</script>

<style scoped>
/* #loginBtn {
    margin: var(--blockAndBlock);
} */
</style>