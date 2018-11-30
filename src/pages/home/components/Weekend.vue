<template>
    <!-- 主页周末去哪儿界面组件 -->
   <div>
        <div class="recommend-title">周末去哪儿</div>   
        <ul>
            <li class="item border-bottom" v-for="item in list" :key="item.id"> 
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl"  class="item-img"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div> 
</template>

<script>
export default {
    name:"Weekend",
    props:{
        list:Array
    },
    data(){
        return {
        }
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
    .item-img-wrapper
        height 0
        overflow hidden
        padding-bottom 37.09%
    .item-img
        width 100%
    .item-info
        padding .1rem
    .item-title
        line-height .54rem
        font-size .32rem
        textoverflow()
    .item-desc
        line-height .4rem
        color:#ccc
        textoverflow()
</style>
