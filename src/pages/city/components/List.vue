<template>
    <!-- 城市界面 城市列表组件 -->
    <div class="list" ref='wrapper'>
        <div>
            <div class="area">
                <div class="title border-topbottom">
                    当前城市
                </div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hot" 
                    :key="item.spell"
                    @click="handleCityClick(item.name)"

                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>

            <div class="area" v-for="(item,key) in cities" 
            :key="key"
            :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem in item"
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:"List",
    props:{
        cities:Object,
        hot:Array,
        letter:String
    },
    mounted(){

        //better-scroll插件，优化界面上下滑动效果
        this.scroll=new Bscroll(this.$refs.wrapper)
    },
    watch:{

        //better-scroll插件，接收父组件传给来的字母，并且滚到这个字母的位置，更新list城市列表
        letter(){
            if(this.letter){
                const element=this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    methods:{

        //vuex状态管理，切换城市，切换好了之后，back出界面
        handleCityClick(city){
            //this.$store.dispatch('changeCity',city);两种方式，一种是调用actions
            this.$store.commit('changeCity',city)//另一种直接通过组件传给mutations
            this.$router.push('/');
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .border-topbottom   
        &:before
            border-color #cccccc
        &:after
            border-color #ccc
    .border-bottom  
        &:before    
            border-color #ccccc
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
    .title
        line-height .54rem
        background #eeeeee
        padding-left .2rem
        color #666
        font-size .26rem
    .button-list
        overflow hidden
        padding .1rem .6rem .1rem .1rem
        .button-wrapper
            float left 
            width 33.33%
            .button 
                margin .1rem
                padding .1rem 0
                text-align center
                border .02rem solid #cccccc
                border-radius .06rem
    .item-list
        .item
            line-height .76rem
            padding-left .2rem

</style>
