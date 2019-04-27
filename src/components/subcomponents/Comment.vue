<template>
    <div id="com">
        <h4>发表评论</h4>
        <hr>
        <textarea placeholder="最多吐槽120字" maxlength=120 v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment(id)">发表评论</mt-button>
        <div v-for="item in comments">
            <p>
                <span>{{item.user_name}}</span>
                <span>{{item.add_time|dateFormat}}</span></p>
            <div>{{item.content === 'undefined'?"此用户很懒，啥也没说":item.content}}
                {{item.content === ''?"此用户很懒，啥也没说":""}}
            </div>

        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "comment",
        data() {
            return {
                comments: [],
                msg: '',
                pageindex: 1,
            }
        },
        created() {
            if (this.$route.params.newid) {
                this.id = this.$route.params.newid
                this.getComments(this.id, 1)
            } else if (this.$route.params.imgid) {
                this.id = this.$route.params.imgid
                this.getComments(this.id, 1)
            }
        },
        methods: {
            getComments(artid, pageindex) {
                var _this = this;
                this.axios.get('api/getcomments/' + artid, {
                    params: {
                        pageindex: this.pageindex
                    }
                })
                    .then(function (response) {
                        if (response.data.status === 0) {
                            _this.comments = _this.comments.concat(response.data.message)
                        }
                    })
            },
            getMore() {
                this.pageindex++
                this.getComments(this.id, this.pageindex)
            },
            postComment(newid) {
                var _this = this
                if (this.msg.trim() === '') {
                    Toast('请输入评论内容')
                } else {
                    this.axios.post('api/postcomment/' + newid, {
                        content: _this.msg,
                    })
                        .then(function (response) {
                            _this.comments = []
                            _this.msg = ''
                            _this.getComments(newid, 1)
                        })
                        .catch(function (error) {
                            console.log(error);
                            Toast('发表评论失败')
                        })
                    ;
                }
            }
        },
    }
</script>

<style scoped>

</style>