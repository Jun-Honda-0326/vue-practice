Vue.component('hello-component', {
    template: '<p>これはコンポーネントです</p>'
})

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
            age: '20'
        },
        colors: ['Red', 'Green', 'Blue'],
        toggle: true,
        colors: ['Red', 'Green', 'Blue'],
        now: ''
    },
    methods: {
        onclick: function() {
            this.now = new Date().toLocaleString();
        }
    }



})