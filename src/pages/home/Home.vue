<template>
    <!-- 主程序入口界面 -->
    <div>
        <home-header ></home-header>
        <Swiper :list="swiperList"></Swiper>
        <icons :list="iconList"></icons>
        <recommend :list="recommendList"></recommend>
        <weekend :list="weekendList"></weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
export default {
    name:"Home",
    data(){
        return{
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    components:{
        HomeHeader,
        Swiper,
        Icons,
        Recommend,
        Weekend
    },
    mounted (){
        this.getHomeInfo()
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            //console.log(res.data.data.city)
            res=res.data
            if(res.ret&&res.data){
                const data=res.data;
                this.swiperList=data.swiperList;
                this.iconList=data.iconList;
                this.recommendList=data.recommendList;
                this.weekendList=data.weekendList;
            }
        }
    }
};
</script>

<style>
</style>

