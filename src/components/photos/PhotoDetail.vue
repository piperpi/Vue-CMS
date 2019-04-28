<template>
    <div>

        <h3>{{msg.title}}</h3>
        <p class="mui-subtitle" style="display: flex;justify-content: space-between;">
            <span>发表时间:{{msg.add_time |dateFormat}}</span>
            <span>点击:{{msg.click}}次</span>
        </p>
        <hr>
        <div>{{msg.content}}</div>

        <!--缩略图-->
            <div>
                <vue-preview :list="list" :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}" :previewBoxStyle="{border: '1px solid #eee'}" :tapToClose="true"/>
            </div>


        <!--评论-->
        <comment></comment>


    </div>
</template>

<script>
    import comment from '../subcomponents/Comment.vue'

    export default {
        name: "PhotoDetail",
        data() {
            return {
                msg: '',
                thumimages: [],
                list: [
                    {
                        src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                        msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                        w: 600,
                        h: 400
                    },
                ]
            }
        },
        created() {
            var imgid = this.$route.params.imgid
            this.getimageInfo(imgid)
            this.getthumimages(imgid)
        },
        methods: {
            getimageInfo(imgid) {
                var _this = this;
                this.axios.get('api/getimageInfo/' + imgid)
                    .then(function (response) {
                        if (response.data.status === 0) {
                            _this.msg = response.data.message[0]
                        }
                    })
            },
            getthumimages(imgid) {
                var _this = this;
                this.axios.get('api/getthumimages/' + imgid)
                    .then(function (response) {
                        if (response.data.status === 0) {
                            _this.thumimages = response.data.message
                            _this.thumimages.forEach(item=>{
                                item.w = 600
                                item.h=400
                                // item.msrc = item.src
                            })
                            _this.list = _this.thumimages
                        }
                    })
            }
        },
        components: {
            comment
        }


    }
</script>

<style scoped>
    h3 {
        font-size: 16px;
        color: #007aff;
        text-align: center;
    }
</style>