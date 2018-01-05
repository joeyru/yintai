<template>
  <div id="recommend">
    <div id="banner">
     <a href="#" title=""></a>
    </div>

    <div id="count">
    <p>佐奈美珍珠清仓专场</p>
    <p><i class="iconfont">&#xe602;</i>  <span>剩余12天</span></p>
    </div>

   <div id="subnav">
    <ul class="index">
      <li><a href="#" title="">首页</a></li>
      <li><a href="#" title="">分类</a></li>
      <li><a href="#" title="">购物车</a></li>
      <li><a href="#" title="">我的</a></li>
    </ul>

    <ul class="login">
      <li><a href="#" title="">登录｜注册</a></li>
      <li><a href="#" title="">客户端下载</a></li>
    </ul>

  </div>

  <div id="copyright">
    <p>客服电话：400-119-1111(8:00-24:00)
    浙ICP备10200233</p>
  </div>

<div id="n"></div>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return{
      search:"recommend"
    }
  }
}
</script>

<style lang="scss">
#recommend {
  #banner{
    img{width: 100%;}
    background: url(../../assets/banner.jpg);
    background-size:100%;
    height:2.76rem;
    margin-top: 0.22rem;

  }

  #count{
    display: flex;
    justify-content:space-between;
    padding: 0 0.34rem;
    height:0.56rem;
    line-height: 0.56rem;
    border-bottom:1px solid #c0c0c0;
    font-size:12px;
    color:#2d2d2d;
    span,i{
      font-size: 0.26rem;
      color:#9b9b9b;
    }
  }

  #subnav{
    margin-top:1.38rem;
    background:#ececec;
  
     ul{ display:flex;}
    .index{
      justify-content:space-around;
      padding:0 0.9rem;
      padding-top:0.33rem;
      a{color:#a4a4a4; font-size:12px;}
    }

   .login{
     padding:0 0.45rem;
      justify-content:space-between;
      height:0.8rem;
      line-height: 0.8rem;
      border-bottom:2px solid #e5e5e5;
     a{color:#676767; font-size:12px;}
   }
  }

  #copyright{
    height:2.2rem;
    background:#ececec;
    p{
      white-space:pre-wrap;
      text-align:center;
      padding-top:0.3rem;
      color:#a4a4a4;
    }
  }

  #n{ height:1.75rem; 
    background:#ccc;
    opacity: .3}

}

</style>
