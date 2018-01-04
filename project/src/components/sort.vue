<template>
  <div id="wrap">
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
    <div id="container">
    	<ul id="navLeft">
    		<li v-for="data in datalist">
    			 {{data.name}}
    		</li>
    	</ul>
    	<div id="introRight">
    		<div id="sortIntro">
    			<div class="area-title">
    				<span>推荐类目</span>
    			</div>
    			<div class="sortItem" v-for="data in looplist">
    				<img :src="data.imageurl" />
    				<span>{{data.name}}</span>
    			</div>
    		</div>
    		<div id="introBrand">
    			<div class="area-title">
    				<span>推荐品牌</span>
    			</div>
    			<div class="sortItem" v-for="data in introBrand">
    				<img :src="data.imageurl" />
    			</div>
    		</div>
    	</div>
    	
    	
    </div>
  </div>
</template>

<script>
import navbar from "./common/returnnav";
import sidebar from "./common/sidebar";
import axios from "axios";

export default {
  name: 'home',
  data () {
    return{
      sortSearch:"",
      sidebarShow:false,
      datalist:[],
      looplist:[],
      introBrand:[]

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
  },
  mounted () {

  	//console.log(this.$route.params.id);


  	axios.get('/Services/Proxy.ashx?r=0.975833589629095&methodName=products.category.getcategory_3.0.0&method=products.category.getcategory&ver=3.0.0').then(res=>{
  	console.log(res.data);
		this.datalist= res.data.data.data
		//console.log(res.data.data)
  	})
  	axios.get('/Services/Proxy.ashx?r=0.7582535102473444&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=88').then(res=>{
  	console.log(res.data);
		this.looplist= res.data.data.recommend.categoryrecommend
		this.introBrand = res.data.data.brand.brandrecommend
		//console.log(res.data.data)
  	})
  	
  }
}
</script>

<style lang="scss">
	#wrap{
		background: #FFFFFF;
		#container{
			display: flex;
		}
		#introRight{
			width: 75%;
			overflow: hidden;
			/*padding: 0 10px;*/
			.sortItem{
				text-align: center;
				width: 33%;
				float: left;
				img{
					width: 60px;
					height: 60px;
				}
			}
		 #introBrand{
		 	width: 100%;
		 }
		 #sortIntro{
		 	height: 311px;
		 }
		}
		.area-title{
			display: block;
			height: 60px;
			line-height: 60px;
			font-size: 14px;
			text-align: center;
			margin-top: 10px;
			margin-bottom: 10px;
		}
	}
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
#navLeft{
	width: 25%;
	background: #f5f5f5;
}
#navLeft li{
	font-size: 14px;
	padding: 18px 12px;
}
</style>
