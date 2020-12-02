<template>
  <div id="area_wrap" :class="[lanIdx==1?'area_cnbg':'area_enbg']">
    <div class="area_content">
      <h4 class="area_title">{{ dataList.title }}</h4>
      <div class="area_options" @click="chooseArea(1)">
        {{ dataList.list[0]}}<img
          src="../assets/img/icon.png"
          alt=""
          class="dui_img"
          v-if="chooseFlag1"
        />
      </div>
      <div class="area_options" @click="chooseArea(2)">
        {{ dataList.list[1]}}<img
          src="../assets/img/icon.png"
          alt=""
          class="dui_img"
          v-if="chooseFlag2"
        />
      </div>
      <div class="area_options" @click="chooseArea(3)">
        {{ dataList.list[2]}}<img
          src="../assets/img/icon.png"
          alt=""
          class="dui_img"
          v-if="chooseFlag3"
        />
      </div>
      <div class="area_btn" @click="nextStep">{{ btnText }}</div>
    </div>
  </div>
</template>
<script>
import list from "../../static/questionList.json";
export default {
  name: "CooperationArea",
  data() {
    return {
      dataList: [],
      btnText: "",
      chooseFlag1: false,
      chooseFlag2: false,
      chooseFlag3: false,
      page: 1,
      lanIdx:'',
      dialogText:"",
      confirmTxt:"",
      refreshFlag:true
    };
  },
  created() {
    this.lanIdx = this.$route.query.idx
    if (this.$route.query.idx == 1) {
      this.dataList = list.cnArea;
      this.btnText = list.cnBtn;
      this.dialogText = list.cnSelect
      this.confirmTxt = list.cnConfirm
    } else if (this.$route.query.idx == 2) {
      this.dataList = list.enArea;
      this.btnText = list.enBtn;
      this.dialogText = list.enSelect
      this.confirmTxt = list.enConfirm
    }
  },
  beforeRouteLeave(to, from, next) {
	    if (to.name !== "Question1" && to.name !== "Question2" && to.name !== "Question3") {
	      this.$store.commit("noKeepAlive", "CooperationArea");
	    }
	    next();
	},
  methods: {
    chooseArea(ind) {
      var _this = this;
      switch (ind) {
        case 1:
          _this.chooseFlag1 = true;
          _this.chooseFlag2 = false;
          _this.chooseFlag3 = false;
          _this.page = 1;
          break;
        case 2:
          _this.chooseFlag1 = false;
          _this.chooseFlag2 = true;
          _this.chooseFlag3 = false;
          _this.page = 2;
          break;
        case 3:
          _this.chooseFlag1 = false;
          _this.chooseFlag2 = false;
          _this.chooseFlag3 = true;
          _this.page = 3;
          break;
      }
    },
    nextStep() {
      if(!this.chooseFlag1&&!this.chooseFlag2&&!this.chooseFlag3){
        this.$dialog.alert({
          message: this.dialogText,
          confirmButtonText:this.confirmTxt
        });
        return
      }
      this.$router.push({
        path: "/question" + this.page,
        query: { idx: this.$route.query.idx},
      });
     
    },
   
  },
};
</script>
<style>
@import url("../assets/css/reset.css");
#area_wrap {
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  height:100vh;
  background-color: #0189F9;
}
.area_cnbg{
  background: url(../assets/img/bg2.png) no-repeat top center;
  background-size: 100% 6.2rem;
}
.area_enbg{
  background: url(../assets/img/bg22.png) no-repeat top center;
  background-size: 100% 6.2rem;
}

.area_content {
  width: 2.6rem;
  height: 3rem;
  position: absolute;
  left: 50%;
  top: 1.1rem;
  transform: translateX(-50%);
}
.area_title {
  height: 0.54rem;
  font-size: 0.18rem;
  color: #333c82;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
}
.area_options {
  width: 2.25rem;
  height: 0.34rem;
  line-height: 0.34rem;
  border: 0.01rem solid #333c82;
  border-radius: 0.05rem;
  margin: 0 auto 0.2rem;
  box-sizing: border-box;
  padding-left: 0.2rem;
  font-size: 0.16rem;
  color: #333c82;
  font-weight: bold;
  position: relative;
}
.dui_img {
  position: absolute;
  right: 0.25rem;
  top: 0.07rem;
  width: 0.2rem;
  height: 0.2rem;
}
.area_btn {
  width: 2.25rem;
  height: 0.4rem;
  background: url(../assets/img/icon2.png) no-repeat center;
  background-size: 100% 100%;
  font-size: 0.16rem;
  color: #6d4a0c;
  text-align: center;
  line-height: 0.4rem;
  margin: 0 auto;
  font-weight: bold;
}
.van-dialog__message {
  font-size: 0.16rem;
}
.van-dialog__confirm,
.van-dialog__confirm:active {
  color: #0189f9;
}
</style>

