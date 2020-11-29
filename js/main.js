var app = new Vue({
    //options
    //オプション名: 値
    el: '#app',
    data: {
        message: 'Hello Vue.js', //messageが変数名
        count: 0,
        user: {
            lastName: 'Yamada',
            firstNmae: 'Tarou',
            prefecture: 'Tokyo'
        },
        colors: ['Red', 'Green', 'Blue'],
        toggle: true
    }



})