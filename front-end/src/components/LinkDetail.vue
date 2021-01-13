<template>
    <vs-card>
        <vs-col vs-w="10">
            <vs-row vs-justify="center">
                <vs-input
                    type="text"
                    icon="http"
                    size="large"
                    label-placeholder=" "
                    loading
                    v-model="link.long_link"
                />
                <vs-button
                    style="margin-top: 17px"
                    type="relief"
                    @click.prevent="copyText('copyLong')"
                    ><span class="material-icons">
                        content_paste
                    </span></vs-button
                ><vs-input
                    type="text"
                    icon="link"
                    size="large"
                    label-placeholder=" "
                    v-model="link.short_link"
                />
                <vs-button
                    style="margin-top: 17px"
                    type="relief"
                    @click.prevent="copyText('copyShort')"
                    ><span class="material-icons">
                        content_paste
                    </span></vs-button
                >
            </vs-row>
            <vs-row vs-justify="center">
                <h2 id="LinkDetailText">
                    點擊次數： {{ link.click_number }} || 創立時間：
                    {{ link.register_time.toLocaleString() }}
                </h2>
            </vs-row>
        </vs-col>
        <vs-col vs-w="2" vs-justify="center" id="LinkDeleteBtn">
            <vs-button
                radius
                icon="delete_forever"
                color="danger"
                type="gradient"
                @click="showModal = true"
            />
        </vs-col>
        <modal-window
            :visible="showModal"
            :close-on-escape="true"
            :close-on-outside-click="true"
            :show-x-mark="true"
            @close="showModal = false"
        >
            <vs-row vs-justify="center" id="modalContext">
                <h2>確認刪除?</h2>
            </vs-row>
            <vs-divider color="danger">警告</vs-divider>

            <vs-row vs-justify="center" id="modalContext">
                <h4>這將會永久刪除您的短連結（不可復原），您確定要刪除嗎？</h4>
            </vs-row>
            <vs-row vs-justify="center" id="modalContext">
                <vs-col vs-w="6">
                    <vs-button type="border" @click.native="showModal = false"
                        >取消</vs-button
                    >
                </vs-col>
                <vs-col vs-w="6">
                    <vs-button
                        color="danger"
                        type="border"
                        @click="deleteLink(link.short_link)"
                        >確定</vs-button
                    >
                </vs-col>
            </vs-row>
        </modal-window>
    </vs-card>
</template>

<script>
import linkService from '@/services/linkService'
import ModalWindow from '@vuesence/modal-window'

export default {
    components: { ModalWindow },
    props: ['links', 'link', 'messages'],
    data() {
        return { showModal: false }
    },
    methods: {
        copyText(val) {
            if (val === 'copyLong') {
                this.$copyText(this.link.long_link).then(
                    ele => {
                        this.$vs.notify({
                            title: '複製長網址（ Copy Long URL ）',
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
            } else if (val === 'copyShort') {
                this.$copyText(this.link.short_link).then(
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
        async deleteLink(link) {
            let shortHash = link.split('/')[link.split('/').length - 1]
            const res = await linkService.deleteLink(shortHash)
            if (res === 200) {
                this.$vs.notify({
                    title: '移除（ Delete URL ）',
                    text: `${this.link.short_link} 已移除`,
                    color: 'Info',
                })
                const idx = this.links.findIndex(ele => ele.short_link === link)
                this.links.splice(idx, 1)
                this.showModal = false
            } else {
                this.$vs.notify({
                    title: '錯誤（ Wrong ）',
                    text: `無法移除 😢 請通知作者`,
                    color: 'danger',
                })
                console.error('Fail to delete this link')
            }
        },
    },
}
</script>

<style>
.vs-card--content {
    padding: 15px;
    font-size: 0.8rem;
    margin-bottom: 15px;
}

.con-vs-card {
    margin-bottom: 2em;
    padding-bottom: 1em;
}

#LinkDetailText {
    margin-top: 17px;
    color: var(--grey);
}

#LinkDeleteBtn {
    padding-top: 4em;
}

#modalContext {
    margin: 1em 0em 1em 0em;
}
</style>
