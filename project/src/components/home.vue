<template>
  <div id="all">
    <div class="header">
      <navbar></navbar>
      
    </div>
    <div class="main">
          <!-- <router-view></router-view> -->
    </div>
    <div class="footer">
      <footerbar></footerbar>
    </div>

  </div>
</template>

<script>
import navbar from "./common/homenav";
import footerbar from "./common/footer";

export default {
  name: 'home',
  data () {
    return{
      
    }
  },
  components:{
    navbar,
    footerbar

  }
}
</script>

<style lang="scss">

</style>
