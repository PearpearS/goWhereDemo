
<template>
    <!-- 详情页的banner组件（轮播） -->
    <div class="container" @click="handleGoBack">
       <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item">
                </swiper-slide>
                    <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
       </div>
    </div>
</template>

<script>
export default {
    name:'Gallary',
    props:{
        imgs:{
            type:Array,
            // default(){
            //     return []
            // }
        }
    },
    data(){
        return{
            swiperOptions:{
                pagination:".swiper-pagination",
                paginationType:"fraction",
                observeParents:true,
                observer:true
            }
        }
    },
    methods:{
        //banner随便点一个地方，返回出去
        handleGoBack(){
            this.$emit('handleBack');
        }
    }
}
</script>

<style lang='stylus' scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 2
        position fixed
        bottom 0
        left 0
        right 0
        top 0
        background #000
        .wrapper
            width 100%
            height 0
            padding-bottom 50%
            .gallary-img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem
</style>
