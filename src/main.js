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

import Vuex from 'vuex'
Vue.use(Vuex)

var cart = JSON.parse(localStorage.getItem('cart')||'[]')
const store = new Vuex.Store({
    state: {
        cart: cart
    },
    mutations: {
        addToCart (state,goodsinfo) {
            //如之前此商品未加入购物车，flag为false
            var flag = false
            state.cart.some(item=>{
                if(item.id ===goodsinfo.id){
                    item.count += goodsinfo.count
                    flag = true
                }
            })
            if(!flag){
                state.cart.push(goodsinfo)
            }

            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        changeSelected(state,id){
            state.cart.some(item=>{
                if(item.id ==id){
                    item.selected = !item.selected
                }
            })
            localStorage.setItem('cart',JSON.stringify(state.cart))
        }
    },
    getters:{
        cartCount:function (state) {
            var totalCount = 0
            state.cart.forEach(item=>{
                totalCount+=item.count
            })
            return totalCount
        },
        goodsCount:function (state) {
            var o = {}
            state.cart.forEach(item=>{
                o[parseInt(item.id)] = item.count
            })
            return o
        },
        goodsSelected:function (state) {
            var o = {}
            JSON.parse(localStorage.getItem('cart')||'[]').forEach(item=>{
                o[item.id] = item.selected
            })
            return o
        },
    }
})

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})