<template>
    <div>
        <!--        轮播图-->
        <mt-swipe :auto="4000" id="swipe">
            <mt-swipe-item><img src="../../images/cbd.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="../../images/muwu.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="../../images/shuijiao.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="../../images/yuantiao.jpg"></mt-swipe-item>
        </mt-swipe>


        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <img src="../../images/home_news.png">
                <div class="mui-media-body">新闻资讯</div>
            </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src="../../images/home_photos.png">
                <div class="mui-media-body">图片分享</div>
            </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <img src="../../images/home_shop.png">
                <div class="mui-media-body">商品购买</div>
            </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/home_feedback.png">
                <div class="mui-media-body">留言反馈</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/home_video.png">
                <div class="mui-media-body">视频专区</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/home_contactus.png">
                <div class="mui-media-body">联系我们</div>
            </a></li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "Home"
    };
</script>

<style scoped>
    #swipe {
        height: 200px;
    }

    img {
        width: 100%;
        height: 100%;

    }
    li img {
        width: 60px;
    }
</style>