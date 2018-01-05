<template>
  <div id="all">
    <div class="header">
      <navbar @event="sidebarEvent" text="注册护照" :dot-show="true" ></navbar>
      <sidebar v-show="sidebarShow"></sidebar>
      
    </div>
    <div class="main">
          <div id="inputWrap">
          	 <div class="wrap" id="yintaiTel">
          	 	 <input type="text" placeholder="请输入手机号"/>
          	 </div>
          	 <div class="wrap" id="yintaiPsd">
          	 	<input type="text" placeholder="请设置银泰护照密码" />
          	 </div>
          	 <div class="wrap">
          	 	<input type="text" id="spdAgain" placeholder="请再次确认银泰护照密码" />
          	 </div>
          	 <button>创建银泰护照</button>
          </div>
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
      sidebarShow:false
    }
  },
  components:{
    navbar,
    sidebar

  },
  methods:{
    sidebarEvent(){
      this.sidebarShow = !this.sidebarShow;
    }
  }
}
</script>

<style lang="scss">
#inputWrap {
	width: 100%;
  .wrap{
  	width: 100%;
  	height: 46px;
  	line-height: 46px;
  	border-top: 1px solid #ccc;
  	border-bottom: 1px solid #ccc;
  	/*padding-left:21px;*/
  	input{
  		border: 0;
  		margin-left: 21px;
  	}
  }
  #yintaiTel{
  	border-top: 2px solid #ccc;
  	border-bottom: 0;
  }
  #yintaiPsd{
  	border-bottom: 0;
  }
  button{
  	width: 80%;
  	height: 35px;
  	border: 0;
  	outline: none;
  	background: #CCCCCC;
  	margin-top: 55px;
  	margin-left: 10%;
  }
}
</style>
