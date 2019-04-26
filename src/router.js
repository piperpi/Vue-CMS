import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from './components/tabbars/Home.vue'
import Member from './components/tabbars/Member.vue'
import Cart from './components/tabbars/Cart.vue'
import Search from './components/tabbars/Search.vue'

const router = new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/member',component:Member},
        {path:'/cart',component:Cart},
        {path:'/search',component:Search}
    ],
    linkActiveClass:'mui-active'
})

export default router