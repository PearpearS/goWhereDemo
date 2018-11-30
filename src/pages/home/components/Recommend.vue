<template>
    <!-- 主页热销推荐组件 -->
   <div>
        <div class="recommend-title">热销推荐</div>   
        <ul>
            <router-link tag='li' 
            class="item border-bottom" 
            v-for="item in list" 
            :key="item.id"
            :to="'/detail/' +item.id"> 
                <img :src="item.imgUrl"  class="item-img"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div> 
</template>

<script>
export default {
    name:"Recommend",
    props:{
        list:Array
    }
}
</script>

<style lang='stylus' scoped >
@import '~styles/varibles.styl'
@import '~styles/textoverflow.styl'
    .recommend-title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex:1
            padding .1rem
            min-width 0
        .item-title
            line-height .54rem
            font-size .32rem
            textoverflow()
        .item-desc
            line-height .4rem
            color:#ccc
            textoverflow()
        .item-btn
            line-height .44rem
            background $bgColor
            padding 0 .2rem
            border-radius .06rem
            margin-top .2rem
            color #fff
</style>
