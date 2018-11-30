<template>
    <!-- 详情页主页面入口-->
    <div>
        <banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="bannerImgs"
        ></banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name:'Detail',
    components:{
        Banner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
                sightName:'',
                bannerImg:'',
                bannerImgs:[],
                list:[]
        }
    },
    methods:{

        //获取详情页接口
        getDetailInfo(){
             axios.get('/api/detail.json',{
             params:{
                 id:this.$route.params.id
             }
             })
                .then(this.handleGetDataSucc)
        },

        //赋值
        handleGetDataSucc(res){
            res=res.data;
            if(res.ret&&res.data){
                const data=res.data;
                console.log(data)
                this.sightName=data.sightName;
                this.bannerImg=data.bannerImg;
                this.bannerImgs=data.gallaryImgs;
                this.list=data.categoryList;
            }
        }
    },

    //挂载后调用详情接口
    mounted(){
        this.getDetailInfo();
    }
}
</script>

<style lang='stylus' scoped>
    .content
        height 50rem
</style>
