<template>
    <vs-row vs-justify="center" id="introBlock">
        <vs-col id="introBox">
            <h1>鏈接分析，品牌網址，URL 縮網址服務</h1>
            <h3>Link analytics, branded urls, URL shortener</h3>
        </vs-col>
        <vs-col id="introBox">
            <vs-divider> So. Link </vs-divider>
            <h3>
                不要讓鏈接限制你。讓你的鏈接支持你的品牌。縮短鏈接的新標准。鏈接分析的新標准。發現獨特的重定向分析-與您的團隊一起工作，建立您的品牌粘性。像專業人士一樣管理你的鏈接。
            </h3>
            <h5>
                Don't let the links limit you. Make your links support your
                brand. The new standard of shortening links. A new standard for
                link analytics. Discover unique redirects analytics - work with
                your team together building your brand engagment. Manage your
                links like a pro.
            </h5>
        </vs-col>
    </vs-row>
</template>

<script>
export default {
    data() {
        return {}
    },
}
</script>

<style scoped>
#introBlock {
    background: var(--blockWhiteBgColor);
    padding: var(--blockAndBlock);
}

#introBox {
    margin-bottom: var(--boxSize);
    color: var(--black);
}

#introBox > h5 {
    color: var(--grey);
}
</style>
