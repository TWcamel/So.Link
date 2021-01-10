<template>
    <vs-card >
        <vs-row vs-w="12">
            <vs-row vs-justify="center" vs-align="center">
                <vs-input
                    type="text"
                    icon="link"
                    size="large"
                    label-placeholder=" "
                    v-model="link.long_link"
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
            <vs-row vs-justify="center" vs-align="center">
                <vs-input
                    type="text"
                    icon="http"
                    size="large"
                    label-placeholder=" "
                    loading
                    v-model="link.short_link"
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
        </vs-row>
    </vs-card>
</template>

<script>
import linkService from '@/services/linkService'

export default {
    props: ['link', 'messages'],
    data() {
        return {}
    },
    methods: {
        copyText(val) {
            if (val === 1) {
                this.$copyText(this.link.short_link).then(
                    ele => {
                        this.$vs.notify({
                            title: '您的短網址（ Shortened URL ）',
                            text: `📎 ${ele.text}`,
                            color: 'success',
                        })
                    },
                    ele => {
                        this.$vs.notify({
                            title: '錯誤（ Wrong ）',
                            text: `無法複製 😢 請通知作者`,
                            color: 'danger',
                        })
                        console.error(ele)
                    }
                )
            } else if (val === 2) {
                this.$copyText(this.link.long_link).then(
                    ele => {
                        this.$vs.notify({
                            title: '複製短網址（ Copy Shortened URL ）',
                            text: `📎 ${ele.text}`,
                            color: 'success',
                        })
                    },
                    ele => {
                        this.$vs.notify({
                            title: '錯誤（ Wrong ）',
                            text: `無法複製 😢 請通知作者`,
                            color: 'danger',
                        })
                        console.error(ele)
                    }
                )
            }
        },
        async deleteLink() {
            const shortHash = this.link.short_link.split('/')[
                this.link.short_link.split('/').length - 1
            ]
            if (shortHash) {
                const removeComponent = this.$emit(
                    'on-result-change',
                    this.title
                )._vnode.tag
                if (removeComponent === 'div') {
                    await linkService.deleteLink(shortHash)
                    this.$vs.notify({
                        title: '移除（ Delete URL ）',
                        text: `${this.link.short_link} 已移除`,
                        color: 'Info',
                    })
                }
            }
        },
    },
}
</script>

<style scoped></style>
