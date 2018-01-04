<template>
  <div id="all">
    <div class="header">
      <navbar text="购物车" :dot-show="false"></navbar>
      
    </div>
    <div class="main" style="background: #f1f1f1;">

          <!-- <router-view></router-view> -->
    </div>


  </div>
</template>

<script>
import navbar from "./common/returnnav";
import footerbar from "./common/footer";

export default {
  name: 'home',
  data () {
    return{
      sortSearch:""
    }
  },
  components:{
    navbar,
    footerbar

  }
}
</script>

<style lang="scss">
.main{

}
</style>
