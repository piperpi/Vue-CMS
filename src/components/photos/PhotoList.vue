<template>
    <div>

        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
                 data-scroll="1">
                <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                    <router-link class="mui-control-item" to="#">
                        全部
                    </router-link>
                    <router-link class="mui-control-item"  v-for="item in msg" :key="item.id" :to="'#'+item.id">
                        {{item.title}}
                    </router-link>
                </div>
            </div>

        </div>


        <ul class="photo-list">
            <li v-for="item in list" :key="item.id">
                <router-link :to="'/home/photodetail/'+item.id">
                <img v-lazy="item.img_url">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    // import mui from '../../../lib/mui/js/mui.js'




    export default {
        name: "PhotoList",
        data(){
            return{
                msg:[],
                list:[]
            }
        },
        created(){
            this.getimgcategory()
            // 获取全部图片
            this.getimages(0)
        },
        methods:{
            getimgcategory(){
                var _this = this
                this.axios.get('api/getimgcategory').then(
                    function (response) {
                        _this.msg = response.data.message
                    }
                )
            },
            getimages(imgid){
                var _this = this
                this.axios.get('api/getimages/'+imgid).then(
                    function (response) {
                        _this.list = response.data.message
                    }
                )
            }
        }

    }
</script>

<style scoped>
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .photo-list{
        list-style: none;
        margin: 10px;
        padding: 5px;

    }
    .photo-list li{
        text-align: center;
        margin-bottom: 10px;
    }
    .photo-list  li img {
        width: 100%;
    }
</style>