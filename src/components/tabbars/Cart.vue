<template>
    <div class="shopcar-container">

        <div class="goods-list">

            <div class="mui-card" v-for="item in shopcarList" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner goods-item">
                        <!-- 开关 -->
                        <mt-switch v-model="$store.getters.goodsSelected[item.id]" @change="changeSelected(item.id)"></mt-switch>
                        <!-- 图片 -->
                        <img :src="item.thumb_path" alt="">
                        <!-- 信息区域 -->
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <div class="goods-info">
                                <span class="price">￥{{item.sell_price}}</span>
                                <!-- countObj[item.id] 表示这条商品对应的数量 -->
                                <div class="mui-numbox" data-numbox-min='1' style="height: 25px;">
                                    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                                    <!-- 监听文本框的 change 事件，来动态获取选择到的数量 -->
                                    <input id="test" class="mui-input-numbox" type="number"
                                           :value="$store.getters.goodsCount[item.id]"/>
                                    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                                </div>

                                <a href="#">删除</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 结算区域 -->
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner jiesuan">
                        <div class="left">
                            <p>总计（不含运费）</p>
                            <p>
                                已勾选商品<span class="danger">2</span>件，总价<span class="danger">￥2</span>
                            </p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
    import mui from "../../../lib/mui/js/mui.min.js"
    export default {
        name: "Cart",
        mounted() {
            // mui在mui.init()中会自动初始化基本控件,但是 动态添加的Numbox组件需要手动初始化
            mui('.mui-numbox').numbox()

        },
        data() {
            return {
                shopcarList: [],
            }
        },
        created() {
            this.getShopcarList()
        },
        methods: {
            getShopcarList() {
                var ids = []
                this.$store.state.cart.forEach(item => {
                    ids.push(item.id)
                })
                var _this = this
                this.axios.get('api/goods/getshopcarlist/' + ids.join(',')).then(function (res) {
                    _this.shopcarList = res.data.message
                })
            },
            changeSelected(id){
                this.$store.commit('changeSelected',id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .shopcar-container {
        background-color: #eee;
        overflow: hidden;

        .goods-item {
            display: flex;

            img {
                width: 60px;
                height: 60px;
            }

            h1 {
                font-size: 13px;
            }

            .info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .goods-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .price {
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                }
            }
        }
    }

    .danger {
        color: red;
        font-weight: bold;
        font-size: 16px;
    }

    .jiesuan {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>