<template>
    <div :style="{ opacity: allOpacity }">
        <vs-row id="landing-page-bg1">
            <vs-col vs-justify="center" vs-align="center" id="titleBlock">
                <h1 id="title" :style="{ opacity: titleOpacity }">
                    {{ title }}
                </h1>
                <br/>
                <h3>在這裡，您可以完全控制自己的鏈接</h3>
                <h3>Here you take full control of your links</h3>
            </vs-col>
            <vs-row>
                <shorten-link />
            </vs-row>
            <vs-col vs-justify="center" vs-align="center" id="loginBtn">
                <h3 style="font-weight: bold;">
                    So . Link 縮 網 址，讓您縮爆網址
                </h3>
                <loggin-in />
            </vs-col>
            <vs-col vs-justify="center" vs-align="center">
                <introduce />
            </vs-col>
        </vs-row>
        <vs-row id="landing-page-bg2">
            <vs-col vs-justify="center" vs-align="center" id="introBlock ">
                <intro-card />
            </vs-col>
            <vs-col vs-justify="center" vs-align="center" id="introBlock ">
                <intro-collapes />
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import ShortenLink from '@/components/ShortenLink'
import Introduce from '@/components/Introduce'
import IntroCard from '@/components/IntroCard'
import IntroCollapes from '@/components/IntroCollapes'
import LogginIn from '@/components/LogginIn'

export default {
    components: {
        ShortenLink,
        LogginIn,
        Introduce,
        IntroCard,
        IntroCollapes,
    },
    data() {
        return {
            userURL: '',
            title: '縮 網 址',
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
            title: '成功（ Success ）',
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
#title {
    transition-property: opacity;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
    font-weight: bold;
}

#titleBlock {
    padding: var(--pageMiddle);
}

#loginBtn {
    margin: var(--blockAndBlock);
}

#introBlock {
    background: var(--blockWhiteBgColor);
}

#landing-page-bg1 {
    background-image: url('../assets/landing-background2.jpg');
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

#landing-page-bg1::before {
    background: rgba(0, 0, 0, 0.3);
}

#landing-page-bg2 {
    padding: var(--gridAndGrid);
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

#landing-page-bg2::before {
    background: rgba(0, 0, 0, 0.3);
}
</style>
