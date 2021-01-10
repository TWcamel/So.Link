<template>
    <vs-row
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="12"
        id="inputBox"
    >
        <vs-row vs-justify="center" vs-align="center" id="linkText">
            <vs-input
                type="text"
                icon="http"
                size="large"
                loading
                label-placeholder="請輸入您的網址"
                v-model="userLink"
            />
            <vs-button
                style="margin-top: 17px"
                type="relief"
                @click.prevent="regxLink(userLink, userIdentity)"
            >
                <span class="material-icons">
                    post_add
                </span>
            </vs-button>
        </vs-row>
        <vs-row vs-justify="center" vs-align="center" id="linkText">
            <vs-input
                type="text"
                icon="link"
                size="large"
                label-placeholder="您的短網址"
                v-model="userShortSequence"
            />
            <vs-button
                style="margin-top: 17px"
                type="relief"
                @click.prevent="copyText"
                ><span class="material-icons">
                    content_paste
                </span></vs-button
            >
        </vs-row>
        <h5 style="color: white">
            清空以立即創建另一
            <a href @click.prevent="clearInputBlock">短網址</a>
        </h5>
    </vs-row>
</template>

<script>
import linkService from '@/services/linkService.js'
export default {
    async mounted() {
        const token = await linkService.getToken()
        if (token) this.userIdentity = 'user'
        else this.userIdentity = 'guest'
    },
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
                if (userLink === '') {
                    this.$vs.notify({
                        title: '錯誤（ Wrong ）',
                        text: `您輸入的網址爲空，請重新輸入 🙂`,
                        color: 'danger',
                    })
                    this.$vs.notify({
                        title: '通知（ Info ）',
                        text: `請確認您已將網址填上哦 😉`,
                        color: 'primary',
                    })
                } else if (!vaildURL) {
                    this.$vs.notify({
                        title: '錯誤（ Wrong ）',
                        text: `您輸入的 " ${userLink} " 不是一個合法的網址 😢 `,
                        color: 'danger',
                    })
                    this.userLink = ''
                    this.$vs.notify({
                        title: '通知（ Info ）',
                        text: `請重新輸入 😆`,
                        color: 'primary',
                    })
                } else {
                    const link = await linkService.registerLink(
                        userLink,
                        userIdentity
                    )
                    this.userShortSequence = link
                    this.$vs.notify({
                        title: '成功縮網址（ Success ）',
                        text: `${link}`,
                        color: 'success',
                    })
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
                    title: '成功（ Success ）',
                    text: `您可以再次發佈短鏈接了 😊`,
                    color: 'success',
                })
            } else
                this.$vs.notify({
                    title: '通知（ Info ）',
                    text: `您尚未填入網址哦 😉`,
                    color: 'primary',
                })
        },
        copyText() {
            this.$copyText(this.userShortSequence).then(
                ele => {
                    this.$vs.notify({
                        title: '成功複製（ Success ）',
                        text: `📎 ${ele.text}`,
                        color: 'success',
                    })
                },
                ele => {
                    this.$vs.notify({
                        title: '錯誤（ Wrong ）',
                        text: `無法複製 ${this.userLink} 😢 請通知作者`,
                        color: 'danger',
                    })
                    console.error(ele)
                }
            )
        },
    },
}
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';

#linkText {
    color: black;
    margin-bottom: var(--boxSize);
}

#inputBox {
    background-color: var(--blue);
    padding: var(--blockAndBlock);
}

.vs-input--placeholder {
    /* font-size: 1em; */
    margin-left: 1.3rem;
    width: auto !important;
}

.vs-con-input-label {
    width: 50%;
}

.vuesax-app-is-ltr .vs-input--input.hasIcon {
    padding-left: 3.6em;
}

.vuesax-app-is-ltr .vs-input--icon {
    border-right: 2px solid rgba(0, 0, 0, 0.1);
}

.vuesax-app-is-ltr .vs-input--icon {
    padding-right: 0.5em;
}
</style>
