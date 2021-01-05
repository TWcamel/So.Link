
export default {
    // serverUrl: 'https://short-link.nctu.me',
    // linkBaseUrl: 'https://short-link.nctu.me',
    serverUrl: 'http://localhost:3000',
    linkBaseUrl: 'http://localhost:3000',
    gauthoption: {
        client_id: '636876250614-jsocudg6jd4lb7engnfrv18mdl0o588p.apps.googleusercontent.com',
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
        messages: { "async-block": "頁面載入中" },
        icons: {
            prefix: "<i class='",
            suffix: "'></i>",
        }
    },
    vueCliperboardConf: true,
}