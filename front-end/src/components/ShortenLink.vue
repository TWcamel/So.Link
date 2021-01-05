<template>
    <vs-row
        id="linkText"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="12"
    >
        <vs-row vs-justify="center" vs-align="center">
            <vs-input
                icon-no-border
                type="text"
                icon="link"
                size="large"
                label-placeholder="請輸入您的網址"
            />
            <vs-button
                style="margin-top: 17px"
                type="relief"
                size="large"
                @click.prevent="regxLink(userLink, userIdentity)"
                >Primary</vs-button
            >
        </vs-row>
        <vs-row vs-justify="center" vs-align="center">
            <vs-input
                icon-no-border
                type="text"
                icon="link"
                size="large"
                label-placeholder="您的短網址"
            />
            <vs-button
                style="margin-top: 17px"
                type="relief"
                size="large"
                @click.prevent="copyText"
                >Primary</vs-button
            >
        </vs-row>
        <h5 style="color: white">
            清空以立即創建另一個
            <a href @click.prevent="clearInputBlock">短連結</a>
        </h5>
    </vs-row>
</template>

<script>
import linkService from '@/services/linkService.js'
export default {
    async mounted() {
        const token = await linkService.getToken()
        if (token) this.userIdentity = 'user'
        else if (token === null) this.userIdentity = 'guest'
    },
    components: {},
    data() {
        return {
            userLink: '',
            userShortSequence: '',
            userIdentity: '',
        }
    },
    methods: {
        async regxLink(userLink, userIdentity) {
            try {
                const vaildURL =
                    userLink.indexOf('https://') +
                        userLink.indexOf('http://') ===
                    -1
                        ? true
                        : false
                if (vaildURL) {
                    const link = await linkService.registerLink(
                        userLink,
                        userIdentity
                    )
                    this.userShortSequence = link
                    // this.$awn.success(`${link}`)
                    this.$vs.notify({
                        title: 'Success',
                        text: `${link}`,
                        color: 'success',
                    })
                } else if (!vaildURL) {
                    // this.$awn.alert(
                    //     `您輸入的 ${userLink} 不是一個合法的網址 😢`
                    // )
                    this.$vs.notify({
                        title: 'Danger',
                        text: `您輸入的 ${userLink} 不是一個合法的網址 😢`,
                        color: 'danger',
                    })
                    if (userLink === '')
                        this.$vs.notify({
                            title: 'Info',
                            text: `請確認您已將網址填上哦 😉`,
                            color: 'primary',
                        })
                    //     this.$awn.info(` 請確認您已將網址填上哦 😉`)
                }
            } catch (e) {
                this.$awn.alert(`${e}`)
            }
        },
        clearInputBlock() {
            const len = this.userLink.toString().length
            if (len > 0) {
                this.userLink = ''
                this.$vs.notify({
                    title: 'Success',
                    text: `您可以再次發佈短鏈接了 😊`,
                    color: 'success',
                })
                // this.$awn.success(`您可以再次發佈短鏈接了 😊`)
            } else
                this.$vs.notify({
                    title: 'Info',
                    text: `您尚未填入網址哦 😉`,
                    color: 'primary',
                })
            // this.$awn.info(`您尚未填入網址哦 😉`)
        },
        copyText() {
            this.$copyText(this.userShortSequence).then(
                ele => {
                    // this.$awn.success(`📎 ${ele.text}`)
                    this.$vs.notify({
                        title: 'Success',
                        text: `📎 ${ele.text}`,
                        color: 'success',
                    })
                },
                ele => {
                    // this.$awn.alert(`Fail to copy`)
                    this.$vs.notify({
                        title: 'Danger',
                        text: `無法複製 ${this.userLink} 😢 請通知作者`,
                        color: 'danger',
                    })
                    console.log(ele)
                }
            )
        },
    },
}
</script>

<style>

@import 'https://fonts.googleapis.com/icon?family=Material+Icons';

#linkApp {
    /* background: #f9f9f9; */
    /* padding: 1%; */
    text-align: -webkit-center;
}
p {
    text-align: center;
}

#linkText {
    color: black;
}

</style>
