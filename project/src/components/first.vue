<template>
  <div id="first">
    <ul>
      <router-link to="/first/recommend" tag="li" activeClass="active">推荐</router-link>
      <router-link to="/first/new" tag="li" activeClass="active">最新</router-link>
      <router-link to="/first/countdown" tag="li" activeClass="active">倒计时</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return{
      
    }
  }
}
</script>
<style lang="scss">

#first {
  >ul{
    height: 36px;
    width: 100%;
    box-sizing: border-box;
    padding: 4px 0 0 0;
    border-top: 1px solid #ccc;
    
    display: flex;
    li{
      flex:1;
      text-align: center;
      line-height: 28px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 4px;

    }
    li.active{
      border-bottom: 1px solid #de2e6f;
    }
    li:nth-of-type(2){
      
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;

 
    }
  }
}
</style>
