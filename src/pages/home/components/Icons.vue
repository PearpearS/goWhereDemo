<template>
    <!-- 主页菜单栏组件 -->
    <div class="icons">
         <swiper :options="swiperOption" >
            <swiper-slide style="margin-top:6px" v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <img :src= 'item.imgUrl' class="iconImg">
                    <p class="desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
         </swiper>
    </div>
</template>

<script>
export default {
    name:"Icons",
    props:{
        list:Array
    },
    data(){
        return{

            //vue-awesome-swiper轮播插件， 不要自动轮播
            swiperOption:{autoplay:false},
        }
    },
    computed:{

        //观察pages属性，如果菜单栏超过8个，则右边再开一个界面
        pages(){
            const pages=[];
            this.list.forEach((item,index)=>{
                const page=Math.floor(index/8);
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item);
            })
            return pages; 
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/textoverflow.styl'
    .icon
        height 0
        box-sizing border-box
        width 25%
        float left
        padding-bottom 18%  
        overflow hidden
        .iconImg
            display block
            margin 0 auto
            width 50%
        .desc
            padding-top .08rem
            text-align center
            textoverflow()

       
       
</style>
