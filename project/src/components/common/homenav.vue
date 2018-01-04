<template>

    <div id="header">
      <div>
        <div class="logo">
          <img src="../../assets/logo.png" alt="">
        </div>
        <div class="search">
          <form action="" method="get" accept-charset="utf-8">
            <input class="l" type="text" name="search" :value="search" placeholder="搜索商品or品牌">
            <button class="r" type="button"><i class="iconfont">&#xe657;</i></button>
          </form>
          
        </div>
        <div class="my">
          <router-link to="/my"  activeClass="active"><i class="iconfont">&#xe502;</i></router-link>
        </div>

      
    </div>
   

  </div>

</template>

<script>
export default {
  name: 'navbar',
  data(){
    return{
      search:""
    }
  }
}

</script>
<style  lang="scss">
  
</style>
