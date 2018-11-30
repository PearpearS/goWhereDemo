<template>
    <div>
        <div class="item" v-for="(item,index) in list"
        :key="index">
            <div class="item-title">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>

            <!-- 这里有递归组件 -->
            <div v-if="item.children" class="item-children">
                <detail-list2 :list="item.children"></detail-list2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailList2", //递归组件，需要用到name
    props:{
        list:Array
    }
}
</script>

<style lang='stylus' scoped>
    .item-title
        line-height .8rem
        font-size .32rem
        padding 0 .2rem
        .item-title-icon
            position relative
            left .06rem
            top .06rem
            display inline-block
            width .36rem
            height .36rem
            background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png)0 -.45rem no-repeat
            margin-right .1rem
            background-size .4rem 3rem
    .item-children
            padding 0 .2rem


</style>
