<template>
    <div>


        <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1">
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

        }
    }
</script>

<style scoped>

</style>