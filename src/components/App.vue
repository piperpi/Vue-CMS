<template>
    <div id="app">
        <mt-header fixed title="Vue项目-CMS" id="title">
            <mt-button icon="back" slot="left" @click="goBack" v-if="goBackFlag">返回</mt-button>
        </mt-header>

        <transition>
            <router-view></router-view>
        </transition>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-llb" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="/member">
                <span class="mui-icon mui-icon-contact"></span>

                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>


    </div>


</template>

<script>
    export default {
        data() {
            return {
                goBackFlag: false
            }
        },
        created() {
            this.hasGoBack()
        },
        beforeUpdate() {
            this.hasGoBack()
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            hasGoBack() {
                if (this.$route.fullPath.split('/').length - 1 > 1) {
                    this.goBackFlag = true
                } else {
                    this.goBackFlag = false
                }
            }
        },


    }
</script>

<style scoped>

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
        position: absolute;
    }

    #app {
        padding-top: 40px;
        padding-bottom: 50px;

    }

    #title {
        z-index: 99;
    }


       .mui-bar-tab .mui-tab-item-llb.mui-active {
           color: #007aff;
       }

    .mui-bar-tab .mui-tab-item-llb {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }

    .mui-bar-tab .mui-tab-item-llb .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>