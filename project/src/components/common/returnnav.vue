<template>

    <div id="returnHeader">
      <div>
        <div class="return">
          <a href="/" title=""><i class="iconfont">&#xe518;</i></a>
        </div>
        <div class="text">
          {{text}}
        </div>
        <div class="more">

          <span v-if="dotShow"><i class="iconfont" v-show="dotShow" @click="handleClick()" >&#xe501;</i></span>
          <span v-else> <a href="/" title=""><i class="iconfont">&#xe608;</i></a></span> 
        </div>

      
    </div>
   

  </div>

</template>

<script>
export default {
  name: 'navbar',
  data(){
    return{
      search:""
      
    }
  },
  props:["text","dotShow"],
  methods:{
    handleClick(){
      this.$emit("event");
    }
  }
}

</script>
<style  lang="scss">
    #returnHeader{
      width: 100%;
      height: 40px;
      background: #ffffff;
      >div{
        box-sizing: border-box;
        padding: 6px;
        
        width: 100%;
        height: 100%;
        // box-shadow: 0px 1px 6px rgba(0,0,0,.2);
        display: flex;
        justify-content:space-between;
        .return{
            padding-top: 7px;
        }
        .text{
          line-height: 28px;
          font-size: 14px
        }
        .more{
            padding-top: 7px;
        }

        
        
        
      }
      

      

    }
</style>
