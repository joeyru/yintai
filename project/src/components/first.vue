<template>
  <div id="all">
    <div class="header">
      <navbar @event="sidebarEvent" text="抢先" :dot-show="true" > </navbar>
      <sidebar v-show="sidebarShow" ></sidebar>
    </div>
    <div class="main" >
          <div id="first">
            <ul>
              <router-link to="/first/recommend" tag="li" activeClass="active">推荐</router-link>
              <router-link to="/first/new" tag="li" activeClass="active">最新</router-link>
              <router-link to="/first/countdown" tag="li" activeClass="active">倒计时</router-link>
            </ul>

            <router-view></router-view>

          </div>
    </div>
    <div class="footer">
      <footerbar></footerbar>
    </div>

  </div>
</template>

<script>
import navbar from "./common/returnnav";
import footerbar from "./common/footer";
import sidebar from "./common/sidebar";

export default {
  name: 'home',
  data () {
    return{
      sidebarShow:false
    }
  },
  components:{
    navbar,
    footerbar,
    sidebar

  },
  methods:{
    sidebarEvent(){
      this.sidebarShow=!this.sidebarShow;

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
