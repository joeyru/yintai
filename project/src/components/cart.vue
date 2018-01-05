<template>
  <div id="all">
    <div class="header">
      <navbar text="购物车" :dot-show="false"></navbar>
      
    </div>
    <div class="main" style="background: #f1f1f1;">
       <img src="../assets/car.png">
       <p>购物车空空地!
       快去随便逛逛把~
       </p>
          <!-- <router-view></router-view> -->
          <h2>随便逛逛</h2>
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
  img{width:45%; margin:0.5rem auto; padding-top:1rem;}
  p{white-space:pre; 
    text-align:center;
    font-size: 14px;
    line-height:0.5rem;
  }
  h2{
    width:50%;
    height:0.8rem;
    line-height:0.8rem;
    border-radius:5px;
    margin:0 auto;
    border: 1px solid #e71e63;
    text-align: center;
    color: #e71e63;
    font-weight: 100;
    font-size: 14px;

  }
}
</style>
