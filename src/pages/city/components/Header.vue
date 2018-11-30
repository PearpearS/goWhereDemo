<template>
    <!-- 城市界面头部组件 -->
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont back-icon">&#xe660;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang='stylus' scooped> 
@import '~styles/varibles.styl'
    .header
        position relative
        overflow hidden
        height .86rem
        line-height .86rem
        text-align center
        color #ffffff
        background $bgColor
        font-size .32rem
        .back-icon
            position absolute
            top 0
            left 0
            width .64rem
            text-align center 
            font-size .4rem
            color #fff

</style>
