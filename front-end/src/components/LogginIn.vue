<template>
    <vs-button
        type="relief"
        class="mt-4"
        id="startbutton"
        :style="{ opacity: startButtonOpacity, 'margin-bottom': '245px' }"
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
            if (success) await this.$router.push('homepage')
            else
                this.$vs.notify({
                    title: 'Danger',
                    text: '登入失敗，請您再試一次',
                    color: 'danger',
                })
        },
    },
}
</script>
