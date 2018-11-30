<template>
    <!-- 主页头部组件（不是轮播哦） -->
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe660;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe651;</span>
            输入城市/景点/游玩
        </div>
        <router-link to="/city">
            <div class="header-right">{{this.$store.state.city}}
                <span class="iconfont arrow-icon">&#xe65e;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'Header',
    props:{
        city:String
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
        display flex
        height .86rem
        line-height .86rem
        background $bgColor
        color #fff
        .header-left
            width .64rem
            float right
            .back-icon
                text-align center
                font-size .4rem
        .header-input
            flex 1
            margin-top .12rem
            margin-left .2rem
            line-height .64rem
            color #808080
            height .64rem
            background #fff
            border-radius .1rem
            padding-left .2rem
        .header-right
            min-width 1.04rem
            padding:0 .1rem
            float right
            text-align center
            color #fff
            .arrow-icon
                font-size .24rem
        
        
</style>

