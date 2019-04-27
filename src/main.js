import Vue from 'vue/dist/vue.js'
import app from './components/App.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// import {Swipe, SwipeItem,Lazyload} from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.use(Lazyload);


import router from './router.js'
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
axios.defaults.baseURL = "http://www.liulongbin.top:3005"

import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

new Vue({
    el: '#app',
    render: c => c(app),
    router
})