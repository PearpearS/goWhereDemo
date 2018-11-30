<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- exclude name为Detail的组件，每次进入都会请求ajax -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
