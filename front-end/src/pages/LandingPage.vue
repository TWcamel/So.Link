<template>
    <div id="landing-page" :style="{ opacity: allOpacity }">
        <vs-row>
            <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
            >
                <h1
                    class="mb-4"
                    id="title"
                    :style="{ opacity: titleOpacity, 'padding-top': '233px' }"
                >
                    {{ title }}
                </h1>
            </vs-col>
            <vs-row>
                <shorten-link />
            </vs-row>
            <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
            >
                <h3 class="mt-4 mb-4" style="font-weight: bold;">
                    縮網址，讓您縮爆網址
                </h3>
            </vs-col>
            <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
            >
                <loggin-in />
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import ShortenLink from '@/components/ShortenLink'
import LogginIn from '@/components/LogginIn'

export default {
    components: {
        ShortenLink,
        LogginIn,
    },
    data() {
        return {
            userURL: '',
            title: '縮網址',
            allOpacity: 0,
            titleOpacity: 100,
        }
    },
    mounted() {
        const promise = new Promise((resv, rejt) => {
            resv(5000)
        })
        const waitPageLoad = promise.then(val =>
            setTimeout(() => {
                val
            })
        )
        this.$vs.notify({
            title: 'Success',
            text: '頁面載入完成 😄',
            color: 'success',
        })
        setTimeout(() => {
            this.allOpacity = 100
        }, 200)
        setTimeout(() => {
            this.titleOpacity = 0
        }, 1400)
        setTimeout(() => {
            this.titleOpacity = 100
            this.title = 'So . Link '
        }, 2400)
    },
}
</script>

<style scoped>
#landing-page {
    background-image: url('../assets/landing-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-position: center;
    transition-property: opacity;
    transition-duration: 1.2s;
    transition-timing-function: ease-in-out;
    color: white;
}

#landing-page::before {
    background: rgba(0, 0, 0, 0.3);
}

#title {
    transition-property: opacity;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
    font-weight: bold;
}

#startbutton {
    transition-property: opacity;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
}
</style>
