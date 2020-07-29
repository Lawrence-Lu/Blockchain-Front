<template>
    <div id="navigation-bar-back">
        <div id="navigation-bar">
<!--            <navigation-item class="navigation-item" path="/"><img src="./src/assets/img/logo.svg" slot="item-text" alt="logo"></navigation-item>-->
            <navigation-item class="navigation-item" path="/home" style="margin-left: 150px">
                <span slot="item-text" :class="{ 'active': this.$route.path==='/home'|| this.$route.path==='/' }">首页</span>
            </navigation-item>
            <navigation-item class="navigation-item" path="/purchased">
                <span slot="item-text" :class="{ 'active': this.$route.path==='/purchased' }">我的策略</span>
            </navigation-item>
            <navigation-item class="navigation-item" path="/profile">
                <span slot="item-text" :class="{ 'active': this.$route.path==='/profile' }">个人信息</span>
            </navigation-item>

        </div>
    </div>
</template>

<script>
    import NavigationItem from "./NavigationItem";

    export default {
        name: "Navigator",
        components: {
            NavigationItem,
        }
    }
</script>

<style scoped>
    #navigation-bar-back {
        width:100%;
        height:80px;
        border-bottom: 1px solid #d3d3d3;
    }
    #navigation-bar {
        width:1100px;
        height: 80px;
        font-size:18px;
        line-height:80px;
        margin: 0 auto;
        display: flex;
    }
    .navigation-item {
        margin: 0 auto;
    }
    /*.navigation-item:hover {*/
    /*    background-color: #71dd8a;*/
    /*}*/
    .navigation-item img {
        height: 120px;
        margin-top: -20px;
    }
    .active {
        color: #483fff;
    }
</style>
