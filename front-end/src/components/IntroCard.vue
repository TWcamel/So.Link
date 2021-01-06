<template>
    <vs-row vs-justify="center" id="introCardText">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4">
            <vs-card actionable class="cardx">
                <div slot="header">
                    <h3>
                        網址縮短服務
                    </h3>
                </div>
                <div slot="media">
                    <img :src="urlShortner" />
                </div>
                <div>
                    <span>
                        免費自定義URL縮短與許多功能，為您提供更好的質量縮短鏈接。縮短的url永遠不會過期。我們不會在直接重定向到原始url期間顯示廣告。</span
                    >
                </div>
            </vs-card>
        </vs-col>
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4">
            <vs-card actionable class="cardx">
                <div slot="header">
                    <h3>
                        詳細的分析
                    </h3>
                </div>
                <div slot="media">
                    <img :src="datailedAnalytics" />
                </div>
                <div>
                    <span>
                        實時跟踪每一個縮短的鏈接，並測量其性能以了解它。詳細分析為您提供關於點擊，社會媒體點擊，頁面引用，設備，瀏覽器，系統，地理位置的信息。</span
                    >
                </div>
            </vs-card>
        </vs-col>
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4">
            <vs-card actionable class="cardx">
                <div slot="header">
                    <h3>
                        鏈接管理平台
                    </h3>
                </div>
                <div slot="media">
                    <img :src="linkMgmtPlatform" />
                </div>
                <div>
                    <span>
                        優化和定制每個短URL以利用其潛力。設置您的自定義別名(名稱)，上傳、縮網址、複製、貼上，簡單易懂的服務可隨心所欲的使用，現在立即享有無限制縮網址的服務吧。</span
                    >
                </div>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
export default {
    data() {
        return {
            urlShortner: require('@/assets/shortner_url.png'),
            datailedAnalytics: require('@/assets/detailed_analytics.png'),
            linkMgmtPlatform: require('@/assets/link-mgmt-platform.png'),
        }
    },
}
</script>

<style scoped>
#introCardText {
    color: var(--blue);
    padding: 0.25em;
    line-height: 1.5;
}
.vs-card--media img {
    display: inline;
    max-width: 20%;
}

.con-vs-card {
    max-width: 80%;
    display: inline-grid;
}
</style>
