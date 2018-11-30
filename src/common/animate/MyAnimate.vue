<template>
    <!-- 详情页banner轮播渐隐渐显组件 -->
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name:"MyAnimate"
}
</script>

<style lang='stylus' scoped>
    .v-enter ,.v-leave-to
        opacity 0
    .v-enter-active,.v-leave-active
        transition opacity .5s

</style>
