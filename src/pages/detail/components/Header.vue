<template>
    <!-- 详情页header组件 -->
    <div>
        <div class="header-abs" 
        v-show="showAbs">
            <router-link 
            class="header-abs-back"
            tag="div"
            to="/">
                <span class="iconfont">&#xe660;</span>
            </router-link>
        </div>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe660;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailHeader',
    methods:{

        //滚动到一定距离，header的显示与隐藏效果，包括返回按钮的效果
        //（这里有渐隐渐显效果）
        handleScroll(){
            //console.log('scolrr');
            const top=document.documentElement.scrollTop;
            if(top>60){
                let opacity=top/140;
                opacity=opacity>1?1:opacity;
                this.opacityStyle={opacity};
                this.showAbs=false;
            }else{
                this.showAbs=true;
            }
            
        }
    },
    data(){
        return {
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },

    //如果用了<keep-alive></keep-alive>则会多出一个activated勾子
    //这个勾子，他会在每次页面展示的时候，执行
    //全局window绑定滚动事件（所有组件都会监听，一定要解绑）
    activated(){
        window.addEventListener('scroll',this.handleScroll);
    },

    //同样因为<keep-alive>这个标签有了后，会多处的一个勾子
    //页面即将被隐藏，或者被替换到新页面的时候，执行
    //离开界面时，把滚动事件解绑
    deactivated(){
        window.removeEventListener('scroll',this.handleScroll)
    }
     
    
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header-abs 
        position absolute 
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        border-radius .4rem
        text-align center
        background rgba(0,0,0,0.8)
        .header-abs-back
            color #fff
            font-size .4rem
    .header-fixed
        z-index 2
        position fixed
        top 0
        right 0
        left 0
        height .86rem
        line-height .86rem
        text-align center
        color #ffffff
        background $bgColor
        font-size .32rem
        .header-fixed-back
            position absolute
            top 0
            left 0
            width .64rem
            text-align center 
            font-size .4rem
            color #fff

         
</style>
