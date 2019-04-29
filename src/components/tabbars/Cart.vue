<template>
    <div class="shopcar-container">

        <div class="goods-list" v-if="hasgoods">

            <div class="mui-card" v-for="item in shopcarList" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner goods-item">
                        <!-- 开关 -->
                        <mt-switch v-model="$store.getters.goodsSelected[item.id]"
                                   @change="changeSelected(item.id)"></mt-switch>
                        <!-- 图片 -->
                        <img :src="item.thumb_path" alt="">
                        <!-- 信息区域 -->
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <div class="goods-info">
                                <span class="price">￥{{item.sell_price}}</span>
                                <div class="mui-numbox" data-numbox-min='1' style="height: 25px;">
                                    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                                    <input class="mui-input-numbox" type="number"
                                           :value="$store.getters.goodsCount[item.id]"
                                           @change="goodsCountChange(item.id)" :ref="'goodsCount'+item.id"/>
                                    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                                </div>

                                <a href="#" @click.prevent="deleteGood(item.id)">删除</a>
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
                                已勾选商品<span class="danger">{{$store.getters.goodsTotalCount}}</span>件，总价<span
                                    class="danger">￥{{$store.getters.goodsTotalPrice}}</span>
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

    import {Toast} from 'mint-ui';

    export default {
        name: "Cart",
        updated() {
            mui('.mui-numbox').numbox()
        },
        data() {
            return {
                hasgoods: false,
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
                if (ids.length > 0) {
                    this.axios.get('api/goods/getshopcarlist/' + ids.join(',')).then(function (res) {
                            _this.shopcarList = res.data.message
                        }
                    )
                    _this.hasgoods = true
                } else {

                    this.hasgoods = false
                    Toast('请加入商品入购物车');
                }
            },
            changeSelected(id) {
                this.$store.commit('changeSelected', id)
            },
            goodsCountChange(id) {
                var count = this.$refs['goodsCount' + id][0].value
                var goodsCount = {
                    id,
                    count
                }
                this.$store.commit('updateGoodsCount', goodsCount)
            },
            deleteGood(id) {
                this.$store.commit('deleteGood', id)
                this.getShopcarList()
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