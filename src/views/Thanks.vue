<template>
  <div id="thanks_wrap" :class="[lanIdx==1?'cnbg':'enbg']">
  </div>
</template>
<script>
export default {
  name: "Thanks",
  data() {
    return {
      lanIdx:''
    };
  },
  created(){
    this.lanIdx = this.$route.query.idx

  }
};
</script>
<style>
@import url("../assets/css/reset.css");
#thanks_wrap{
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height:100vh;
    background-color: #229eff;
}
.cnbg{
  background: url(../assets/img/cnthanks.jpg) no-repeat top center;
  background-size: 100% 6.67rem;
}
.enbg{
  background: url(../assets/img/enthanks.jpg) no-repeat top center;
  background-size: 100% 6.67rem;
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

