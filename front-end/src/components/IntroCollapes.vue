<template>
    <vs-collapse :type="type" id="introCollapes">
        <vs-collapse-item icon-arrow="arrow_downward">
            <div slot="header">So . Link - URL Shortner</div>
            用戶友好的URL縮網址服務和鏈接管理平台，帶有品牌URL，許多功能和詳細的實時分析。
            我們的短鏈接知道有人單擊或觸摸您縮短的鏈接的方式，時間和地點，甚至更多。
            <br /><br />
            <b>Long URL:</b>
            <br />
            https://www.google.com/search?sxsrf=ALeKk02C7lFoZcREOJoTmjFGvDFozI_Hfw%3A1609949003217&ei=S9_1X5XqDJ2Dr7wPvqmuwAU&q=baby&oq=baby&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIGCCMQJxATMgUIABCxAzIHCAAQsQMQQzICCAAyCAgAELEDEIMBMgUIABCxAzIECAAQQzICCAAyBQgAELEDUKIKWIgNYNQOaABwAHgAgAHjAogBvwWSAQczLjEuMC4xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwjVu8Wz14fuAhWdwYsBHb6UC1gQ4dUDCA0&uact=5
            <br /><br />
            <b>Short / tiny URL:</b>
            <br />
            <a href="http://solink/MjE1">http://solink/MjE1</a>
        </vs-collapse-item>
        <vs-collapse-item icon-arrow="arrow_downward">
            <div slot="header">鏈接分析的新標準</div>
            不要讓鏈接限制您。 使您的鏈接支持您的品牌。
            以直觀，簡單的方式縮短和管理鏈接的新標準。
            最先進，最實用的選擇集於一身。
            如果可以將所有內容都放在一個地方，為什麼要使用多個應用程序。
            大多數選項是完全免費的，沒有任何隱藏費用。
        </vs-collapse-item>
        <vs-collapse-item icon-arrow="arrow_downward">
            <div slot="header">鏈接管理平台</div>
            So . Link
            是帶有品牌URL的鏈接管理平台和URL縮短器，可為您提供許多有用的功能。
            <br /><br />
            <li>free and fast URL shortening</li>
            <li>Branded URLs</li>
            <li>cutt URL button</li>
        </vs-collapse-item>
        <vs-collapse-item icon-arrow="arrow_downward">
            <div slot="header">分析 - 我們的鏈接了解更多</div>
            讓您的鏈接獲取有關有人單擊或觸摸鏈接的方式，位置和時間的有用信息。
            <br /><br />
            <li>Real-time analytics</li>
            <li>Total and daily clicks</li>
        </vs-collapse-item>
    </vs-collapse>
</template>

<script>
export default {
    data() {
        return {
            type: 'margin',
        }
    },
}
</script>

<style scoped>
#introCollapes {
    background: var(--blockWhiteBgColor);
    color: var(--blue);
}

li {
    display: inline-block;
}
</style>
