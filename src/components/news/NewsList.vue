<template>
    <div>

        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsdetail/' +item.id">
                    <img class="mui-media-object mui-pull-right" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class="mui-ellipsis">{{item.zhaiyao}}</p>
                    </div>
                </router-link>
            </li>
        </ul>

    </div>
</template>

<script>

    export default {
        name: "NewsList",
        data() {
            return {
                newsList: []
            }
        },
        created() {
            this.getnewsList()
        },
        methods: {
            getnewsList() {
                var _this = this;
                this.axios.get('api/getnewslist')
                    .then(function (response) {
                        if (response.data.status === 0) {
                            _this.newsList = response.data.message
                        }

                    })
            }
        },

    }
</script>

<style scoped>

</style>