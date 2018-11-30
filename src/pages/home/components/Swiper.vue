<template>
    <!-- 主页轮播组件 -->
    <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
        <swiper-slide v-for="item in list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" >
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
    name:'HomeSwiper',
    data(){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true,
                autoplay:true,
                speed:2800
            },
        }       
    },
    props:{
        list:Array
    },
    computed:{

        //如果首页轮播数组里有图片显示（图片从接口拿过来的）
        showSwiper(){
            return this.list.length
        }
    }
}
</script>

<style lang='stylus' scoped>
.swiper-img
    width 100%
.swiper-pagination-bullet-active
    background #fff!important
</style>

