import Vue from 'vue';

import App from './app/App.vue';
import store from './app/store';

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    store,
    render: h => h(App)
})