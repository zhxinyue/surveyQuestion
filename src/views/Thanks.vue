<template>
  <div id="thanks_wrap">
 <img src="../assets/img/icon15.png" alt="" class="duihao_img">
     <div class="thanks_tip">{{tip1}}</div>
     <div class="thanks_tip">{{tip2}}</div>
  </div>
</template>
<script>
import list from '../../static/questionList.json'
export default {
  name: "Thanks",
  data() {
    return {
      tip1:'',
      tip2:''
    };
  },
  created(){
    if(this.$route.query.idx == 1){
      this.tip1 = list.cnThanks1
      this.tip2 = list.cnThanks2

    }else if(this.$route.query.idx == 2){
      this.tip1 = list.enThanks1
      this.tip2 = list.enThanks2
    }

  }
};
</script>
<style>
@import url("../assets/css/reset.css");
#thanks_wrap{
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background: rgb(245, 192, 192);

}
.duihao_img{
display: block;
width:0.42rem;
height:0.4rem;
margin: 1rem auto 0.3rem;
}
.thanks_tip{
    color:#fff;
    font-size: 0.18rem;
    text-align: center;
    line-height:0.3rem;
}

</style>

