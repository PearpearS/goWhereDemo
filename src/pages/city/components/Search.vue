<template>
    <!-- 城市界面，搜索组件 -->
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市">
        </div>
        <div v-show="keyword " class="search-content" ref="search">
            <ul>
                <li class="search-item border-bottom" 
                v-for="item in list" 
                :key="item.id"
                @click='handleSearchClick(item.name)'
                >{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData" >没有找到匹配数据</li>
                
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:"Search",
    props:{
        cities:Object
    },
    computed:{

        //如果没有数据，则显示  没有找到匹配的数据
        hasNoData(){
            return !this.list.length
        }
    },
    data(){
        return{
            keyword:'', //输入的搜索信息（城市名字或者城市字母）
            list:[],
            timer:null
        }
    },
    methods:{
        handleSearchClick(city){

            //vuex状态管理，点击搜索后的城市后，将切换之该城市信息，并且back出去界面
            this.$store.commit('changeCity',city);
            this.$router.push('/');
        }
    },
    watch:{

        //字截流（优化性能，防止一直要搜索）
        //观察者模式，观察搜索框信息的变化，把符合要求的放在list数组里，并且显示出去
        keyword(){
            if(this.timer){
                clearTimeout(this.timer);
            }
            if(!this.keyword){
                return this.list=[];
            }
            this.timer=setTimeout(()=>{
                const result=[];
                for(let i in this.cities){
                    this.cities[i].forEach((value)=>{
                        if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                            result.push(value);
                        }
                    })
                }
                this.list=result;
            },100)
        }
    },
    mounted(){

        //better-scroll插件，优化界面上下滚动效果（如果匹配的城市过多，超出一个屏幕）
        //所以这里用插件优化下效果
        this.scroll=new Bscroll(this.$refs.search);
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor
        touch-action: none 
        .search-input
            box-sizing border-box
            width 100%
            height .62rem
            line-height .62rem
            text-align center 
            border-radius .06rem
            padding 0 .1rem
            color #666
    .search-content
        position absolute 
        z-index 1
        overflow hidden
        top 1.58rem
        bottom 0
        left 0
        right 0
        background #eeeeee
        .search-item
            line-height .62rem
            padding-left .2rem
            background #fff
            color #666



</style>
