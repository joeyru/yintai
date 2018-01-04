<template>
  
      <ul id="footerbar">
        <router-link to="/home" tag="li" activeClass="active"><i class="iconfont">&#xe608;</i><br>首页</router-link> 
        <router-link to="/first" tag="li" activeClass="active"><i class="iconfont">&#xe674;</i><br>抢先</router-link> 
        <router-link to="/sort" tag="li" activeClass="active"><i class="iconfont">&#xe610;</i><br>分类</router-link> 
        <router-link to="/cart" tag="li" activeClass="active"><i class="iconfont">&#xe6eb;</i><br>购物车</router-link> 
        <router-link to="/my" tag="li" activeClass="active"><i class="iconfont">&#xe502;</i><br>我的</router-link> 
      </ul>

</template>

<script>

export default {
  name: 'footerbar',
  data(){
    return{

    }
  }

}

</script>

<style  lang="scss">

</style>
