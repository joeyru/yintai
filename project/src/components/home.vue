<template>
  <div id="all">
    <div class="header">
      <navbar></navbar>
      
    </div>
    <div class="main" >
      <swipe class="my-swipe homeslider" id="swipe"> 
        <swipe-item class="slide1" v-for="data in swipelist" :key="data.id">
          <a href="#" title=""><img :src="data.imgurl" alt="" id="img"></a>
        </swipe-item>

      </swipe>
      <ul class="four">
        <li v-for="data in four" >
          <a href="#" title=""><img :src="data.imgurl" alt="">
            <span>{{data.imgname}}</span>
          </a>
          
        </li>
      
      </ul>
      <div class="stop">
        <a href="#" title=""><img :src="stop.imgurl" alt=""></a>
      </div>
      <div class="recommend">
        <img :src="recommend.imgurl" alt="">
        <div class="floor1">
          <a href="#" title="" v-for="data in recommendimg"><img :src="data.imgurl" alt=""></a>
          
        </div>
        
      </div>
      <ul class="sortItems">
        <li v-for="(data,index) in sortItems" >
          <h1><img :src="data[0].imgurl" alt=""></h1>
          <div class="floor1" v-if="index%2==0">
            <div class="l">
              <img :src="data[1].imgurl" alt="">
            </div>
            <div class="r">
              <img :src="data[2].imgurl" alt="">
              <img :src="data[3].imgurl" alt="">
            </div>            
          </div>
          <div class="floor1" v-if="index%2!==0">
            <div class="l">
              <img :src="data[1].imgurl" alt="">
              <img :src="data[2].imgurl" alt="">
            </div>
            <div class="r">
              
              <img :src="data[3].imgurl" alt="">
            </div>            
          </div>
          <div class="floor2" v-if="index!==4">
            <div><img :src="data[4].imgurl" alt=""></div>
            <div><img :src="data[5].imgurl" alt=""></div>
            <div><img :src="data[6].imgurl" alt=""></div>             
          </div>
          <div class="floor2" v-if="index==4">
            <div><img :src="data[4].imgurl" alt=""></div>
            <div><img :src="data[5].imgurl" alt=""></div>

          </div>
        </li>
      </ul>
      <img :src="specialTitle.imgurl" alt="">
      <ul class="specialList">
        <li v-for="data in specialList">
          <a :href="data.jumpurl" title="">
            <img :src="data.imgurl" alt="" v-if="data.imgurl">
            <img src="../assets/logo.png" alt="" v-else>
            <p>{{data.extra.productdetail.name}}</p>
            <p>
              <span>￥{{data.extra.productdetail.marketprice+".00"}}</span>
              <span>￥{{data.extra.productdetail.price+".00"}}</span>
            </p>
          </a>
        </li>
      </ul>
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
    <div class="footer">
      <footerbar></footerbar>
    </div>

  </div>
</template>

<script>

import axios from "axios";

import navbar from "./common/homenav";
import footerbar from "./common/footer";

import slider from "./home/slider";

require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';



export default {
  name: 'home',
  data () {
    return{
      swipelist:[],
      four:[],
      stop:[],
      recommend:[],
      recommendimg:[],
      sortItems:[],
      specialTitle:[],
      specialList:[]
    }
  },
  components:{
    navbar,
    footerbar,
    slider,
    "swipe":Swipe,
    "swipe-item":SwipeItem

  },
  mounted(){
    
    axios.get("/Services/Proxy.ashx?r=201801041312&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1").then(res=>{
      var datalist = res.data.data;
      this.swipelist= datalist.bannerlist;
      var templatelist = datalist.templatelist;
      this.four= templatelist[0].items;
      this.stop= templatelist[1].items[0];
      this.recommend = templatelist[3].items[0];
      this.recommendimg = [...templatelist[4].items,...templatelist[5].items];
      var market = [templatelist[7].items[0],...templatelist[8].items,...templatelist[9].items];
      var beauti = [templatelist[11].items[0],...templatelist[12].items,...templatelist[13].items];
      var expenssive = [templatelist[14].items[0],...templatelist[15].items,...templatelist[16].items];
      var shoes = [templatelist[17].items[0],...templatelist[18].items,...templatelist[19].items];
      var sports = [templatelist[23].items[0],...templatelist[24].items,...templatelist[25].items];
      var bags = [templatelist[27].items[0],...templatelist[28].items,...templatelist[30].items];
      this.sortItems.push(market,beauti,expenssive,shoes,bags,sports);
      this.specialTitle =templatelist[33].items[0];
      for(let i=34;i<templatelist.length;i++){
        this.specialList.push(...templatelist[i].items);

      }

    })
  }
}
</script>

<style lang="scss" >
.main{
  .homeslider{
      max-height: 260px;
      width: 100%;
      font-size: 30px;
      overflow: hidden;
      text-align: center;
      .slide1{
        width: 100%;
        a{
          img{
          width: 100%;
          }
        }
      }
  }
  .four{
    width: 100%;
    display: flex;
    padding-bottom: 10px;
    li{
      flex:1;
      text-align: center;
      a{
        color:#666666;
        font-size: 14px;

        img{
          width: 100%;
          margin-bottom: 6px;
        }
      }
      
    }
  }
  .stop{
    background: #f1f1f1;
    padding-bottom: 6px;
    img{
      width: 100%
    }
  }
  .recommend{
    width: 100%;
    background: #f1f1f1;
    padding-bottom: 6px;
    >img{
      width: 100%;
    }
    >.floor1{
      width: 100%;
      background: #ffffff;
      >a{

        >img{
          display:inline-block;                                                                                     
          width: 50%;
          padding:2px;
          padding-top: 0;
          box-sizing: border-box;

        }
      }
    }
    
  }
  .sortItems{
    width: 100%;
    li{
      width: 100%;
      background: #f1f1f1;
      padding-bottom: 6px;
      img{
        box-sizing: border-box;
        border: 1px solid #f1f1f1;
      }
      h1{
        img{
          width: 100%
        }
      }
      >.floor1{
        width: 100%;
        display: flex;
        >.l{
          flex:1;
          img{
            width: 100%;
          }
        }
        >.r{
          flex:1;
          img{
            width: 100%;
          }
        }
        
      }
      .floor2{
        display:flex;
        >div{
          flex:1;
          img{
            width:100%;
          }
        }
        
      }
    }
  }
  >img{
    width: 100%;
  }
  .specialList{
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    li{
      width: 50%;
      border:2px solid #f1f1f1;
      box-sizing: border-box;
      img{
        width: 100%;
      }
      p:nth-of-type(1){
        padding-left: 8px;
        padding-right: 8px;
        color:#333333;
        font-size: 14px;
        height:44px;
        overflow: hidden;
        line-height: 22px;
        word-wrap:break-word;
        white-space:pre-wrap;
      }
      p:nth-of-type(2){
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        line-height: 20px;
        span:nth-of-type(1){
          font-size: 16px;
          color:#e5004f;
          font-weight: bold;

        }
        span:nth-of-type(2){
          float: right;
          font-size: 12px;
          color:#666666;
          text-decoration: line-through;
        }
      }
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

   #copyright{
     height:1.2rem;
     background:#ececec;
     p{
       white-space:pre-wrap;
       text-align:center;
       padding-top:0.3rem;
       color:#a4a4a4;
     }
   }

}



</style>
