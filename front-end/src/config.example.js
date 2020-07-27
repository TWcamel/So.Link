export default {
    serverUrl: 'http://localhost:3000',
    linkBaseUrl: 'http://localhost:3000',
    gauthoption: {
        client_id: '123.com',
        scope: 'profile email',
        prompt: 'select_account',
    },
    vueAWNoptions: {
        maxNotifications: 3,
        labels: {
            success: "成功",
            alert: "失敗，請您再試一次",
            info: "貼心小提醒",
        },
        icons: {
            prefix: "<i class='",
            suffix: "'></i>",
        },
        messages: { "async-block": "頁面載入中" },
    },
    vueCliperboardConf: true,
}