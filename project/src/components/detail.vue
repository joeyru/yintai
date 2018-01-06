<template>
  <div id="all">
    <div class="header" style="	border-bottom: 1px solid #ccc;">
      <navbar @event="sidebarEvent" text="商品详情" :dot-show="true" ></navbar>
      <sidebar v-show="sidebarShow"></sidebar>
      
    </div>
    <div class="main">
	    <mt-swipe :auto="0" class="my-swipe">
	      <mt-swipe-item v-for="(data,index) in swipeurl" :key="index"><img :src="data" alt="" ></mt-swipe-item>
	    </mt-swipe>
	    <div class="title">
	    	<div class="floor1">
	    		<span >{{product.longname}}</span>
	    		<span >
	    			<a href="" title=""><i class="iconfont">&#xe631;</i></a>
	    		</span>	
	    	</div>
	    	<div class="floor2">
	    		<span>{{'￥'+product.ytprice+'.00'}}</span>
	    		<span>{{'￥'+product.marketprice+'.00'}}</span>
	    		<span>{{'商品编号：'+product.itemcode}}</span>
	    	</div>
	    	
	    </div>
	    <div class="gray"></div>
	    <ul class="choose">
	    	<li>已选：1件</li>
	    	<li v-for="data in product.skuproperty">
	    		<p>{{data.name+':'}}</p>
	    		<p>
	    			<span>{{data.value}}</span>
	    		</p>
	    	</li>
	    	<li>
	    		<p>数量：</p>
	    		<p >
	    			<div class="number">
	    				<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>

	    			</div>
	    			
	    		</p>
	    	</li>
	    </ul>
	    <div class="gray"></div>
	    <div class="logo">
	    	<span>{{'品牌：'+datalist.brandname}}</span>
	    	<span><img :src="datalist.brandurl" alt=""><i class="iconfont">&#xe518;</i></span>
	    	
	    </div>
	    <div class="gray"></div>
	    <div class="introduce">
	    	图文介绍
	    	
	    </div>
	    <div class="gray"></div>
	    <div class="table">
	    	
	    	<iframe name="iframe1" onload="this.height=this.contentWindow.document.body.scrollHeight" :src="datalist.productparamsurl" frameborder="0" width="100%"></iframe>
	    </div>

	    <div class="homesubnav">
          <ul class="index">
            <li><a href="/#/home" title="">首页</a></li>
            <li><a href="/#/sort" title="">分类</a></li>
            <li><a href="/#/cart" title="">购物车</a></li>
            <li><a href="/#/my" title="">我的</a></li>
          </ul>

          <ul class="login">
            <li><a href="#" title="">登录｜注册</a></li>
            <li><a href="#" title="">客户端下载</a></li>
          </ul>



        	<div id="copyright">
          	<p>客服电话：400-119-1111(8:00-24:00)
          浙ICP备10200233</p>
        	</div>

      </div>

          

            
            
          
    </div>
    <div class="detailfooter">
    	<div id="footerbar">
    	    <router-link to="/cart" tag="div" activeClass="active"><i class="iconfont">&#xe6eb;</i><br>购物车</router-link> 
    	    <div><a href="#">加入购物车</a></div>
    	    <div><a href="#">立即购买</a></div>

    	  </div>
    </div>
    

  </div>

</template>

<script>
import navbar from "./common/returnnav";
import sidebar from "./common/sidebar";

import axios from "axios";
import Vue from "vue";
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);




export default {
  name: 'detail',
  data () {
    return{
      sidebarShow:false,
      datalist:[],
      product:[],
      swipeurl:[],
      num1: 1,
      iframeheight:''

    }
  },
  components:{
    navbar,
    sidebar

  },
  
  mounted(){
  	// console.log(this.$route.params.id);
  	axios.get(`/Services/Proxy.ashx?data=%7B%22itemcode%22%3A%22${this.$route.params.id}%22%2C%22userid%22%3A%22%22%7D&userid=&methodName=products.getproductdetail_1.0.0&method=products.getproductdetail&ver=1.0.0&r=201801051210`).then(res=>{
  		this.datalist = res.data.data;
  		this.product = this.datalist.products[0];

  		this.swipeurl = this.product.middleimgurls;
  		var iframes = document.getElementsByTagName('iframe');
  		axios.get(`/h5/${this.$route.params.id}.html`).then(res=>{
  			for (var i = 0, j = iframes.length; i < j; ++i) {
  			    // 放在闭包中，防止iframe触发load事件的时候下标不匹配
  			    (function(_i) {
  			        iframes[_i].onload = function() {
  			            // 提前还原高度
  			            this.setAttribute('height', 'auto'); // 或设为''
  			            // 再在下一轮事件循环中设置新高度
  			            setTimeout(function() {
  			                iframes[_i].setAttribute('height', iframes[_i].contentWindow.document.body.scrollHeight);
  			            }, 0);
  			        }
  			    })(i);
  			}
  		})
        


  		
  		

  	});

  },
  methods:{
    sidebarEvent(){
      this.sidebarShow = !this.sidebarShow;
    },
    handleChange(value) {
           console.log(value);
    },
    iframeAutoHeight(){  
    	
  		  

  		    
  	}  
  }
}
</script>

<style lang="scss" scoped>
#all{
	.main{
		.title{
			.floor1{
				width: 100%;
				box-sizing: border-box;
				padding:0px 10px 0 10px;
				display:flex;
				height:45px;
				span:nth-of-type(1){
					flex:1;
					padding-right: 10px;
					height: 100%;
					overflow: hidden;
					font-size: 16px;
					color:#333333;
				}
				span:nth-of-type(2){
					width: 40px;
					height:100%;
					overflow:hidden;
					padding-left: 9px;
					border-left: 1px solid #ccc;
					i{
						font-size: 40px;
						color:#ccc;
					}
				}

			}
			.floor2{
				line-height: 30px;
				padding: 10px;
				display: flex;
				color: #999999;
				font-size: 14px;
				justify-content:space-between;
				span:nth-of-type(1){
					font-size: 24px;
					color: #e5004f;
				}
				span:nth-of-type(2){
					text-decoration: line-through;
				}



			}	
		}
		.gray{
			height: 10px;
			width: 100%;
			background: #f1f1f1;
		}
		.choose{
			line-height: 40px;
			padding:0 10px 0 10px;
			width: 100%;
			font-size: 14px;
			box-sizing: border-box;
			li{
				width: 100%;
				border-bottom: 1px dashed #ccc;
				padding-bottom: 10px;
				p{
					span{
						margin-left: 15px;
						border:1px solid #ccc;
						border-radius: 5px;
						padding:8px ;

					}
					
				}
				.number{
					width: 100%;
					box-sizing: border-box;
					padding-left: 15px;
				}
			}
			li:nth-of-type(4){
				border:0;
			}
		}
		.logo{
			width: 100%;
			line-height: 40px;
			height: 40px;
			display: flex;
			justify-content:space-between;
			font-size: 14px;
			padding:0 10px 0 10px;
			box-sizing: border-box;
			img{
				display: inline-block;
				height: 40px;
			}
			i{
				transform:rotate(180deg); 
			}
		}
		.introduce{
			width: 100%;
			line-height: 40px;
			font-size: 14px;
			text-align: center;
		}
		.table{
			width: 100%;
			iframe{
				height: 6822px;
			}
		}
		.homesubnav{

		   background:#ececec;
		   font-size: 14px;
		 
		    ul{ display:flex;}
		   .index{
		     justify-content:space-around;
		     padding:0 0.9rem;
		     padding-top:0.33rem;
		     a{color:#a4a4a4; font-size:14px;}
		   }

		  .login{
		    padding:0 0.45rem;
		     justify-content:space-between;
		     height:0.8rem;
		     line-height: 0.8rem;
		     border-bottom:2px solid #e5e5e5;
		    a{color:#676767; font-size:14px;}
		  }
		 }
	}
	.detailfooter{
		font-size: 12px;
		box-sizing: border-box;
		width: 100%;
		height:42px;
		background: #ffffff;

		#footerbar{
			overflow: hidden;
			height:42px;
			display: flex;
			box-sizing: border-box;

			>div{
				text-align: center;
				height:42px;
				box-sizing: border-box;
				a{
					display: inline-block;
					background: #e5004f;
					width: 100%;
					height: 100%;
					color: #ffffff;
					line-height: 42px;
				}
				i{
					color:#e5004f;
				}
			}
			>div:nth-of-type(1){
				width: 50px ;
				box-sizing: border-box;
				padding-top: 6px;
			}
			>div:nth-of-type(2){
				flex:1 ;
			}
			>div:nth-of-type(3){
				flex:1 ;
				a{
					width: 100%;
					height: 100%;
					background: #ff7039;
				}
				
			}
		}
	}

}
.my-swipe {
	width: 100%;
	height:320px;
	color: #fff;
	font-size: 30px;
	text-align: center;
	padding-top: 10px;
	padding-bottom: 10px;

	img{
		display: inline-block;
		height:320px;
	}
}

</style>
