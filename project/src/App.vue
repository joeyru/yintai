<template>
  <router-view></router-view>

</template>

<script>


export default {
  name: 'all',
  data(){
    return{

    }
  }
}

</script>
<style src="./assets/css/common.scss"></style>
<style  lang="scss">
  @font-face {
    font-family: 'iconfont';
    src: url('./assets/font/iconfont.eot');
    src: url('./assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('./assets/font/iconfont.woff') format('woff'),
    url('./assets/font/iconfont.ttf') format('truetype'),
    url('./assets/font/iconfont.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  #all{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;

    #header{
      width: 100%;
      height: 55px;
      background: #ffffff;
      >div{
        box-sizing: border-box;
        padding: 6px;
        padding-left: 0;
        width: 100%;
        height: 100%;
        // box-shadow: 0px 1px 6px rgba(0,0,0,.2);
        display: flex;
        justify-content:space-between;
        .logo{
          height:100%;
          img{
            height:100%;
          }
        }
        .search{
          height:100%;
          width: 6rem;
          border:1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
          padding-left: 8px;
          form{
            height: 100%;
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
        .my{
          margin-left: 10px;
          a{
            .iconfont{
              font-size: 30px;
              color:#ccc;
              line-height:55px;
            }
            
        }
          
        
      }
    }
      

      

    }
    .main{
      width: 100%;
      max-width: 640px;
      margin:0 auto;
      flex:1;
      overflow: auto;
      background: #ffffff;
    }
    .footer{
      font-size: 14px;
      box-sizing: border-box;
      padding-top: 10px;
      width: 100%;
      height:55px;
      box-shadow: 0px -1px 6px rgba(0,0,0,.2);
      background: #ffffff;
      ul{
        display:flex;
        li{
          text-align: center;
          flex:1;
        }
      }
    }
  }
  .active{
    color:#e5004f;
  }
  .mint-indicator{
    display:none;
  }
  
</style>
