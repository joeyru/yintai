<template>
  <div id="all">
    <div class="header">
      <navbar @event="sidebarEvent" text="分类" :dot-show="true" >
        <i class="iconfont" @click="sidebarShow = !sidebarShow">&#xe501;</i>
      </navbar >
      <sidebar v-show="sidebarShow">
        
      </sidebar>
    </div>
    <div class="main">
          <div class="sort-search">
           <form action="" method="get" accept-charset="utf-8">
            <input class="l" type="text" name="search" :value="sortSearch" placeholder="搜索商品or品牌">
            <button class="r" type="button"><i class="iconfont">&#xe657;</i></button>
          </form>
          </div>
          <!-- <router-view></router-view> -->
    </div>


  </div>
</template>

<script>
import navbar from "./common/returnnav";
import sidebar from "./common/sidebar";

export default {
  name: 'home',
  data () {
    return{
      sortSearch:"",
      sidebarShow:false

    }
  },
  components:{
    navbar,
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
.main{
  .sort-search{
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    border-bottom:1px solid #ccc;
    padding: 10px;
    border-top:1px solid #ccc;
    form{
      box-sizing: border-box;
      height:100%;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding-left: 10px;
      input{
              display:block;
              border:0;
              height:100%;
              width: 150px;
              line-height: 42px
            }
            button{
              height:100%;
              background: none;
              border: 0;
              outline: none;


              i{
                font-size: 30px;
                line-height: 20px;
                color: #ccc;

              }
            }
    }

  }
}
</style>
