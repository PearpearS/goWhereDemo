<template>
    <!-- 详情页banner组件 -->
    <div>
        <div class="banner" @click='handleBannerClick'>
            <img class="banner-img" :src="bannerImg" />
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe62b;
                    {{this.bannerImgs.length}}</span></div>
            </div>
        </div>

        <my-animate>
            <common-gallary 
            :imgs="bannerImgs" 
            v-show="showGallary"
            @handleBack="hiddenImg">
            </common-gallary>
        </my-animate>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import MyAnimate from 'common/animate/MyAnimate'
export default {
    name:"Banner",
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array
    },
    components:{
        CommonGallary,
        MyAnimate
    },
    data(){
        return{
            showGallary:false,
        }
    },
    methods:{

        //详情页banner，点击显示banner大图组件
        handleBannerClick(){
            this.showGallary=true;
        },

        //banner大图组件，点击隐藏
        hiddenImg(){
            this.showGallary=false;
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute 
            left 0
            right 0
            bottom 0
            line-height .6rem
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex:1
                padding 0 .2rem
                font-size .32rem
                color #fff
            .banner-number   
                line-height .32rem
                height .32rem
                margin-top .14rem
                padding:0 .4rem
                border-raduis .2rem
                background rgba(0,0,0,.8)
                font-size .24rem
                color #fff
                .banner-icon
                    font-size .24rem
</style>
