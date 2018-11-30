<template>
    <!-- 城市列表ABCD...列表组件 -->
    <ul class="list"> 
        <li class="item" v-for="item in letters" 
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">{{item}}</li>     
    </ul>
</template>

<script>
export default {
    name:'Alphabet',
    props:{
        cities:Object
    },
    data(){
        return{
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    updated(){

        //检测手指滑动的距离
         this.startY=this.$refs['A'][0].offsetTop;
    },
    computed:{

        //把ABCDED...全部放在数组里面，显示出来
        letters(){
            const letters=[];
            for(let i in this.cities){
                letters.push(i);
            }
            return letters
        }
    },
    methods:{

        //点击了哪个字母，将事件以及参数传给父组件，
        handleLetterClick(e){
            this.$emit('change',e.target.innerText);
        },
        
        handleTouchStart(){
            this.touchStatus=true;
        },

        //算出手指滑动的距离
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer);
                }
                this.timer=setTimeout(()=>{
                    const touchY=e.touches[0].clientY-79;
                    const index=Math.floor((touchY-this.startY)/20);
                    if(index >= 0 && index< this.letters.length)
                    this.$emit('change',this.letters[index]);
                },20)
                
            }
        },
        handleTouchEnd(){
             this.touchStatus=false;
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column 
        justify-content center
        position: absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item 
            line-height .4rem
            text-align center
            color $bgColor
</style>
