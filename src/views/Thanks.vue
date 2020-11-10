<template>
  <div id="thanks_wrap">
 <img src="../assets/img/icon15.png" alt="" class="duihao_img">
     <div class="thanks_tip">您已提交成功，再次感谢您的反馈！</div>
     <div class="thanks_tip">我们会委托快递小哥将礼品寄送到您的手中</div>
  </div>
</template>
<script>
export default {
  name: "Thanks",
  data() {
    return {
      
    };
  },
  methods: {
   
  },
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

