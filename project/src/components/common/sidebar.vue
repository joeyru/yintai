<template>
  <transition name="fade">
  <div id="sidebar">
    <div class="black">
      
    </div>
    <ul class="menu">
      <router-link to="/home" tag="li" activeClass="active"><i class="iconfont">&#xe608;</i>银泰首页</router-link> 
      <router-link to="/sort" tag="li" activeClass="active"><i class="iconfont">&#xe610;</i>分类</router-link> 
      <router-link to="/cart" tag="li" activeClass="active"><i class="iconfont">&#xe6eb;</i>购物车</router-link> 
      <router-link to="/my" tag="li" activeClass="active"><i class="iconfont">&#xe502;</i>我的银泰</router-link>
        
    </ul>
  </div>
  </transition>
</template>

<script>

export default {
  name: 'sidebar',
  data () {
    return{

    }
  },

}
</script>

<style lang="scss">
#sidebar{
  width: 100%;
  height: 100%;
  margin-top: 40px;
  position: absolute;
  top: 0px;
  left: 0px;
  border-top: 1px solid #ccc;
  .black{
    height:100%;
    width: 100%;
    background: rgba(0,0,0,.3);
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .menu{
    width: 100px;
    height:163px;
    padding: 5px;
    background: #ffffff;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    li{
      width: 90px;
      height:30px;
      padding: 5px;
      border-bottom: 1px solid #ccc;
      text-align: center;
      line-height: 30px
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
