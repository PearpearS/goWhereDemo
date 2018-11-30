<template>
    <!-- 切换城市/搜索城市的主界面 -->
    <div>
        <Header></Header>
        <Search :cities="cities"></Search>
        <list :cities="cities" :hot="hotCities"
        :letter="letter"></list>
        <alphabet :cities="cities"
            @change="handleLetterChange"
        ></alphabet>


    </div>
   
</template>

<script>
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
export default {
    name:'City',
    data(){
        return{
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    components:{
        Header,
        Search,
        List,
        Alphabet
    },
    methods:{

        //axios插件，获取所有城市信息
        getCityInfo(){
            axios.get('/api/city.json') //详细说明 config=>index.js文件
                .then(this.handleGetCityInfo)
        },

        //将接口获取到的城市信息进行赋值
        handleGetCityInfo(res){
            res=res.data;
            if(res.ret&&res.data){
                const data=res.data;
                this.cities=data.cities;
                this.hotCities=data.hotCities;
            }
        },

        //监听到子组件传来的事件（子组件点击了哪个字母）
        handleLetterChange(letter){
            //console.log(letter);
            this.letter=letter; //更新此时的字母（这里会传给子组件letter，子组件会滚动）
        }
    },

    //组件挂载后，调用接口
    mounted(){
        this.getCityInfo()
    }
}
</script>

<style lang='stylus' scoped> 

</style>
