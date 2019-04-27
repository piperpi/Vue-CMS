<template>
    <div>
        <h4 v-text="title" style="text-align: center"></h4>
        <p style="display: flex;justify-content: space-between;">
            <span >{{add_time|dateFormat}}</span>
            <span>点击数：{{click}}</span>
        </p>

        <hr>
        <div v-html="content"></div>


        <comment></comment>
    </div>
</template>

<script>
    import comment from '../subcomponents/Comment.vue'
    export default {
        name: "NewsDetail",
        data() {
            return {
                msg: {},
                content: '',
                title: '',
                click: '',
                add_time: '',
            }
        },
        created() {
            this.getNewsDetail(this.$route.params.newid)
        },
        methods: {
            getNewsDetail(newid) {

                var _this = this;
                this.axios.get('api/getnew/' + newid)
                    .then(function (response) {
                        if (response.data.status === 0) {
                            _this.msg = response.data.message[0];
                            _this.content = _this.msg.content;
                            _this.title = _this.msg.title;
                            _this.click = _this.msg.click;
                            _this.add_time = _this.msg.add_time
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

</style>