<template>
  <div id="app">
  	<div id="wrap">
  		<div class="inputWrap">
  			<i class="iconfont">&#xe921;</i>
  			<input type="text" placeholder="请输入手机号" />
  		</div>
  		<div class="inputWrap" id="inputBot">
  			<i class="iconfont">&#xe618;</i>
  			<input type="text" placeholder="请输入密码" />
  		</div>
  		<button>登&nbsp录</button>
  		<div id="bottom_reg">
  			<span>忘记密码?</span>
  			<router-link tag="span" to="/register">注册</router-link>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return{
      search:"zhanghao"
    }
  }
}
</script>

<style>
	#wrap{
		margin-top: 18px;
	}
	.inputWrap{
		width: 100%;
		height: 56px;
		line-height: 56px;
		border: 1px solid #ddd;
		padding-left: 19px;
	}
	.inputWrap i{
		font-size: 26px;
	}
	.inputWrap input{
		width: 80%;
		height: 14px;
		border: none;
		margin-left: 13px;
	}
	#inputBot{
		border-top: 0px;
	}
	#wrap button{
		width: 95%;
		height: 50px;
		background: #e5004f;
		outline: none;
		border: none;
		border-radius: 5px;
		font-size: 18px;
		color: #fff;
		margin-top: 10px;
		margin-left: 2.5%;
	}
	#bottom_reg{
		height: 50px;
		line-height: 50px;
		font-size: 14px;
	}
	#bottom_reg span:nth-child(1){
		color: #ccc;
		float: left;
		margin-left: 19px;
	}
	#bottom_reg span:nth-child(2){
		float: right;
		margin-right: 12px;
		color: #e5004f;
	}
</style>
