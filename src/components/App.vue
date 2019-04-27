<template>
    <div id="app">
        <mt-header fixed title="Vue-CMS" id="title"></mt-header>
        <transition>
            <router-view></router-view>
        </transition>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>

                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>


    </div>


</template>

<script>
    export default {
        data() {
            return {}
        },

    }
</script>

<style scoped>

    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.5s ease;
        position: absolute;
    }
    #app{
        padding-top:40px;
        padding-bottom: 50px;

    }
    #title{
        z-index: 99;
    }
</style>