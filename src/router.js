import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from './components/tabbars/Home.vue'
import Member from './components/tabbars/Member.vue'
import Cart from './components/tabbars/Cart.vue'
import Search from './components/tabbars/Search.vue'
import NewsList from './components/news/NewsList.vue'
import NewsDetail from './components/news/NewsDetail.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoDetail from './components/photos/PhotoDetail.vue'
const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/home/newslist', component: NewsList},
        {path: '/home/newsdetail/:newid', component: NewsDetail},
        {path: '/home/photolist', component: PhotoList},
        {path: '/home/photodetail/:imgid', component: PhotoDetail},
        {path: '/member', component: Member},
        {path: '/cart', component: Cart},
        {path: '/search', component: Search}
    ],
    linkActiveClass: 'mui-active'
})

export default router