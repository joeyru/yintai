<template>
  <div id="app">
    <div>
      {{search}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return{
      search:"搜索商品or品牌"
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0
}
#app {

}
</style>
