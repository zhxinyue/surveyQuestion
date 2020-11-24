<template>
  <div id="personal_wrap" class="personal">
    <img src="../assets/img/icon3.png" alt="" class="top_img" />
    <div class="personal_content">
      <div class="personal_title">{{title}}</div>
      <img src="../assets/img/icon12.png" alt="" class="img_icon" />
      <div class="personal_tip">{{tip}}</div>

      <div class="heng"></div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon13.png" alt="" class="img_pos" />
          {{dataList.suCompany}}
          <i style="color:red">*</i> ：
         
        </div>
        <input type="text" class="box_dec" :placeholder="iptPlace" v-model="suCompany"/>
      </div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon13.png" alt="" class="img_pos" />
          {{dataList.suBumen}}
           <i style="color:red">*</i> ：
          
        </div>
        <input type="text" class="box_dec" :placeholder="iptPlace" v-model="suBumen"/>
      </div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon13.png" alt="" class="img_pos" />
          {{dataList.suName}}
           <i style="color:red">*</i> ：
        </div>
        <input type="text" class="box_dec" :placeholder="iptPlace" v-model="suName"/>
      </div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon13.png" alt="" class="img_pos" />
          {{dataList.suTelephone}}
          <i style="color:red">*</i> ：
        </div>
        <input type="number" class="box_dec" :placeholder="iptPlace" v-model="suTelephone"/>
      </div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon13.png" alt="" class="img_pos" />
          {{dataList.suAddress}}
           <i style="color:red">*</i> ：
        </div>
        <input type="text" class="box_dec" :placeholder="iptPlace" v-model="suAddress"/>
      </div>
    

    <span class="circle circle1"></span>
    <span class="circle circle2"></span>
    <span class="circle circle3"></span>
    <span class="circle circle4"></span>
    </div>

    <div class="bottom_btn">
      <div :class="[lanIdx==1?'left_btn':'left_btn1']" @click="lastStep"></div>
      <div :class="[lanIdx==1?'right_btn':'right_btn1']" @click="nextStep"></div>
     
    </div>
  </div>
</template>
<script>
import list from '../../static/questionList.json'
export default {
  name: "PersonalInfo",
  data() {
    return {
      lanIdx:'',
      title:'',
      tip:'',
       dialogText:'',
       errorMsg:'',
       dataList:{},
       iptPlace:'',
        suCompany:'',
        suBumen:'',
        suName:'',
        suTelephone:'',
        suAddress:'',
telTip:'',
confirmTxt:""
    };
  },
  created(){
    this.lanIdx = this.$route.query.idx
    if(this.$route.query.idx == 1){
      this.dataList = list.cnPerlist
       this.title = list.cnPerTitle
       this.tip = list.cnPerTip
      this.dialogText = list.cnDialog
      this.iptPlace = list.cn.answer12
      this.telTip = list.cnTel
      this.errorMsg = list.cnErrorMsg
      this.confirmTxt = list.cnConfirm

    }else if(this.$route.query.idx == 2){
      this.dataList = list.enPerlist
      this.title = list.enPerTitle
      this.tip = list.enPerTip
      this.dialogText = list.enDialog
      this.iptPlace = list.en.answer12
      this.telTip = list.enTel
      this.errorMsg = list.enErrorMsg
      this.confirmTxt = list.enConfirm
    }

  },
  methods: {
    lastStep() {
      this.$router.go(-1);
    },
    nextStep() {
      if(this.suCompany=='' || this.suBumen=='' ||this.suName=='' ||this.suTelephone=='' ||this.suAddress==''){
        this.$dialog.alert({
            message: this.dialogText,
            confirmButtonText:this.confirmTxt
          });
          return;
      }
 var phone = Number(this.suTelephone)
      if(this.$route.query.idx == 1){
        if(!(/^[1][3,4,5,6,7,8][0-9]{9}$/.test(phone))){ 
        this.$dialog.alert({
            message: this.telTip,
            confirmButtonText:this.confirmTxt
          });
          return;
      }
      }
      
      
      this.$ajax.post('http://qa.travbao.com/goabraod/trav/writeAnswerUser.do',
     {
       suCompany:this.suCompany,
        suBumen:this.suBumen,
        suName:this.suName,
        suTelephone:this.suTelephone,
        suAddress:this.suAddress,
       spId:this.$route.query.spId
     }
     ).then((res)=>{
if(res.data.code == 0){
  this.$router.push({path:'/thanks',query:{idx:this.$route.query.idx}})
}else{
  this.$dialog.alert({
            message: this.errorMsg,
            confirmButtonText:this.confirmTxt
          });
}

     })


    },
  },
};
</script>
<style>
@import url("../assets/css/reset.css");
#personal_wrap {
  width: 100%;
  height: 100%;
  background: #fff;
}
.top_img {
  width: 100%;
  height: 0.5rem;
}
.personal_content {
  width: 92%;
  box-sizing: border-box;
  margin: 0.18rem auto 0;
  border: 0.01rem solid #00569c;
  position: relative;
  padding-bottom: 0.3rem;
}
.personal_title {
  width: 2.62rem;
  height: 0.36rem;
  position: absolute;
  top: -0.18rem;
  left: 50%;
  transform: translateX(-50%);
  background: url(../assets/img/icon4.png) no-repeat center;
  background-size: 100%;
  z-index: 2;
  font-size: 0.2rem;
  color: #fff;
  font-weight: bold;
  text-align: center;
  line-height: 0.36rem;
}
.img_icon {
  display: block;
  width: 0.24rem;
  height: 0.36rem;
  margin: 0.3rem auto 0.1rem;
}
.personal_tip {
  color: #0b50a2;
  font-size: 0.15rem;
  line-height: 0.22rem;
  font-weight: bold;
  width: 3rem;
  margin: 0 auto;
}
.heng {
  padding: 0.1rem 0 0;
  border-bottom: 0.01rem dashed #00569c;
}

.personal_box {
  width: 3rem;
  margin: 0.2rem auto 0;

}
.input_title {
  font-size: 0.16rem;
  color: #000000;
  margin-bottom: 0.15rem;
}
.img_pos {
  width: 0.13rem;
  height: 0.15rem;
  display: inline-block;
  vertical-align: middle;
  padding-right: 0.05rem;
}
.img_star {
  width: 0.11rem;
  height: 0.11rem;
  display: inline-block;
  vertical-align: middle;
}

.box_dec {
  display: block;
  width: 3rem;
  height: 0.34rem;
  line-height: 0.34rem;
  font-size: 0.14rem;
  color: #00569c;
  margin: 0 auto;
  border: none;
  background: url(../assets/img/icon8.png) no-repeat;
  background-size: 100%;
  text-indent: 0.1rem;
}

.bottom_btn {
  width: 3rem;
  height: 0.45rem;
  margin: 0.2rem auto;
}

.personal .left_btn {
  width: 1.25rem;
  height: 0.45rem;
  float: left;
  background: url(../assets/img/last.png) no-repeat center;
  background-size: 100% 100%;
}
.personal .left_btn1 {
  width: 1.25rem;
  height: 0.45rem;
  float: left;
  background: url(../assets/img/last1.png) no-repeat center;
  background-size: 100% 100%;
}
.personal .right_btn {
  width: 1.25rem;
  height: 0.45rem;
  float: right;
  background: url(../assets/img/confirm.png) no-repeat center;
  background-size: 100% 100%;
}
.personal .right_btn1 {
  width: 1.25rem;
  height: 0.45rem;
  float: right;
  background: url(../assets/img/confirm1.png) no-repeat center;
  background-size: 100% 100%;
}


input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #bababa;
}

input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #bababa;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #bababa;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #bababa;
}
.van-dialog__message {
  font-size: 0.16rem;
}
.van-dialog__confirm,
.van-dialog__confirm:active {
  color: #0189f9;
}
.circle{
  width:0.12rem;
  height:0.12rem;
  background: url(../assets/img/circle.png) no-repeat center;
  background-size: 100%;
  position: absolute;
 
}
.circle.circle1{
 left:-0.06rem;
  top:-0.06rem;
}
.circle.circle2{
  top:-0.06rem;
  right: -0.06rem;
}
.circle.circle3{
  bottom:-0.06rem;
  right: -0.06rem;
}
.circle.circle4{
  bottom: -0.06rem;
  left:-0.06rem;
}
</style>

