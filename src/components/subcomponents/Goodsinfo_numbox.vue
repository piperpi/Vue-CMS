<template>
    <div>


        <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="numbox_max">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" ref="count" @change="setSelectedCount">
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>

    </div>
</template>

<script>
    import mui from "../../../lib/mui/js/mui.min.js"

    export default {
        name: "Goodsinfo_numbox",
        mounted() {
            // mui在mui.init()中会自动初始化基本控件,但是 动态添加的Numbox组件需要手动初始化
            mui('.mui-numbox').numbox()

        },
        methods:{
            setSelectedCount(){
                this.$emit('setCount',this.$refs.count.value)
            }
        },
        props:['numbox_max'],
        watch:{
            numbox_max:function (newVal,oldVal) {
                mui(".mui-numbox")
                    .numbox()
                    .setOption("max", newVal);
            }
        }
    }
</script>

<style scoped>

</style>