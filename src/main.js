import Vue from 'vue/dist/vue.js'
import app from './components/App.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import router from './router.js'
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'
// import  '../lib/mui/js/mui.min'
new Vue({
    el:'#app',
    render:c=>c(app),
    router
})