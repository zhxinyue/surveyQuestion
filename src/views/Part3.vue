<template>
  <div id="question_wrap">
    <img src="../assets/img/icon3.png" alt="" class="top_img" />
    <div class="question_content">
      <div class="question_title">Part3</div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">01</span>
          <div class="box_text" v-html="dataList.SD11"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex1 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 1)"
          >
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal1"
          :placeholder="dataList.answer11"
          v-if="causeFlag1"
        />
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">02</span>
          <div class="box_text" v-html="dataList.HD15"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex2 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 2)"
          >
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal2"
          :placeholder="dataList.answer11"
          v-if="causeFlag2"
        />
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">03</span>
          <div class="box_text">
            {{ dataList.SD17 }}
          </div>
        </div>
        <van-radio-group
          v-model="radioValue3"
          direction="horizontal"
          class="box_checkbox_group"
        >
          <van-radio
            v-for="(item, index) in dataList.answer6"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-radio
          >
        </van-radio-group>
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">04</span>
          <div class="box_text">
            {{ dataList.SD18 }}
          </div>
        </div>
        <van-checkbox-group
          v-model="result4"
          class="box_checkbox_group"
          direction="horizontal"
          @change="checkboxChange(4, 'M')"
        >
          <van-checkbox
            v-for="(item, index) in dataList.answer7"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-checkbox
          >
        </van-checkbox-group>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer12"
          v-if="causeFlag4"
          v-model="inputVal4"
        />
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title4']">
          <span class="box_num">05</span>
          <div class="box_text">
            {{ dataList.SD19 }}
          </div>
        </div>
        <van-checkbox-group
          v-model="result5"
          class="box_checkbox_group"
          direction="horizontal"
          @change="checkboxChange(5, 'S')"
        >
          <van-checkbox
            v-for="(item, index) in dataList.answer8"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-checkbox
          >
        </van-checkbox-group>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer12"
          v-if="causeFlag5"
          v-model="inputVal5"
        />
      </div>
      <div class="question_box question_box_nobor">
        <div class="box_div_textarea box_div_textarea2">
          <span class="left_num">06</span>
          <div class="box_tip">{{ dataList.SD20 }}</div>
          <van-field v-model="message6" rows="2" autosize type="textarea" />
        </div>
      </div>
      <span class="circle circle1"></span>
    <span class="circle circle2"></span>
    <span class="circle circle3"></span>
    <span class="circle circle4"></span>
    </div>
    <div class="bottom_btn">
      <div
        :class="[lanIdx == 1 ? 'left_btn' : 'left_btn1']"
        @click="lastStep"
      ></div>
      <div
        :class="[lanIdx == 1 ? 'right_btn' : 'right_btn1']"
        @click="nextStep"
      ></div>
    </div>
  </div>
</template>
<script>
import list from "../../static/questionList.json";
export default {
  name: "Part3",
  data() {
    return {
      dataList: [],
      lanIdx: "",
      dialogText: "",
      result4: [],
      result5: [],
      radioValue3: "",
      message6: "",
      activeIcon: require("../assets/img/icon7.png"),
      inactiveIcon: require("../assets/img/icon6.png"),
      flag: false,
      activeIndex1: 6,
      activeIndex2: 6,
      causeFlag1: false,
      causeFlag2: false,
      causeFlag4: false,
      causeFlag5: false,
      inputVal1: "",
      inputVal2: "",
      inputVal4: "",
      inputVal5: "",
      optionVal1: "",
      optionVal2: "",
      optionVal4: "",
      optionVal5: "",
    };
  },
  created() {
    this.lanIdx = this.$route.query.idx;
    if (this.$route.query.idx == 1) {
      this.dataList = list.cn;
      this.dialogText = list.cnDialog;
    } else if (this.$route.query.idx == 2) {
      this.dataList = list.en;
      this.dialogText = list.enDialog;
    }
  },
  methods: {
    lastStep() {
      this.$router.go(-1);
    },
    nextStep() {
      if (
        this.optionVal1 == "" ||
        this.optionVal2 == "" ||
        this.radioValue3 == "" ||
        this.optionVal4 == "" ||
        this.optionVal5 == ""
      ) {
        this.$dialog.alert({
          message: this.dialogText,
        });
        return;
      }
      if (
        (this.causeFlag1 && this.inputVal1 == "") ||
        (this.causeFlag2 && this.inputVal2 == "") ||
        (this.causeFlag4 && this.inputVal4 == "") ||
        (this.causeFlag5 && this.inputVal5 == "")
      ) {
        this.$dialog.alert({
          message: this.dialogText,
        });
        return;
      }
      this.optionVal1 = this.optionVal1 + "" + this.inputVal1;
      this.optionVal2 = this.optionVal2 + "" + this.inputVal2;
      this.optionVal4 = this.optionVal4 + "" + this.inputVal4;
      this.optionVal5 = this.optionVal5 + "" + this.inputVal5;

      var str =
        this.optionVal1 +
        "-" +
        this.optionVal2 +
        "-" +
        this.radioValue3 +
        "-" +
        this.optionVal4 +
        "-" +
        this.optionVal5 +
        "-" +
        this.message6;
      console.log(str);
      this.$ajax
        .post("http://qa.travbao.com/goabraod/trav/writeAnswer.do", {
          qAnswers: str,
          spType: 3,
        })
        .then((res) => {
          if (res.data.code == 0) {
            var spId = res.data.data.spId;
          }
          var spId3 = this.$route.query.spId + "-" + spId;
          this.$router.push({
            path: "/personalInfo",
            query: { spId: spId3, idx: this.lanIdx },
          });
        });
    },
    checkboxChange(idx, option) {
      var arr = "result" + idx;
      var onflag = "causeFlag" + idx;
      var opval = "optionVal" + idx;
      if (this[arr].indexOf(option) != -1) {
        this[onflag] = true;
      } else {
        this[onflag] = false;
      }
      this[opval] = this[arr].join(",");
    },
    chooseLevel(idx, num) {
      var onindex = "activeIndex" + num;
      var onflag = "causeFlag" + num;
      var opval = "optionVal" + num;
      this[onindex] = idx;
      this[opval] = idx;
      if (idx == 0) {
        this[opval] = "?";
      }
      if (idx == 3 || idx == 2 || idx == 1) {
        this[onflag] = true;
      } else {
        this[onflag] = false;
      }
    },
  },
};
</script>
<style>
@import url("../assets/css/reset.css");
#question_wrap {
  width: 100%;
  height: 100%;
  background: #fff;
}
.top_img {
  width: 100%;
  height: 0.5rem;
}
.question_content {
  width: 92%;
  box-sizing: border-box;
  margin: 0.18rem auto 0;
  border: 0.01rem solid #00569c;
  position: relative;
  padding-bottom: 0.1rem;
}
.question_title {
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

.question_box {
  padding: 0.1rem 0 0.15rem;
  border-bottom: 0.01rem dashed #00569c;
}
.question_box.question_box_nobor {
  border: none;
}
.box_title {
  width: 3.3rem;
  height: 0.74rem;
  background: url(../assets/img/icon5.png) no-repeat 0.01rem center;
  background-size: 3.15rem 100%;
  margin: 0.1rem auto;
  position: relative;
}
.box_title2 {
  width: 3.3rem;
  height: 0.94rem;
  background: url(../assets/img/icon10.png) no-repeat 0.01rem center;
  background-size: 3.15rem 100%;
  margin: 0.1rem auto;
  position: relative;
}
.box_title3 {
  width: 3.3rem;
  height: 1rem;
  background: url(../assets/img/icon17.png) no-repeat 0.01rem center;
  background-size: 3.15rem 100%;
  margin: 0.1rem auto;
  position: relative;
}
.box_title4 {
  width: 3.3rem;
  height: 1.3rem;
  background: url(../assets/img/icon18.png) no-repeat 0.01rem center;
  background-size: 3.15rem 100%;
  margin: 0.1rem auto;
  position: relative;
}
.box_num {
  position: absolute;
  left: 0.03rem;
  top: 0.02rem;
  width: 0.22rem;
  height: 0.22rem;
  border-radius: 50%;
  text-align: center;
  line-height: 0.22rem;
  font-size: 0.12rem;
  color: #fff;
  font-weight: bold;
}
.box_text {
  position: absolute;
  left: 0.28rem;
  top: 0.26rem;
  width: 2.8rem;
  height: 0.4rem;
  font-size: 0.14rem;
  color: #000;
  line-height: 0.2rem;
}
.box_checkbox_group {
  width: 3rem;
  margin: 0 auto;
}
.img-icon {
  width: 0.18rem;
  height: 0.18rem;
}
.box_checkbox_group .van-checkbox--horizontal,
.box_checkbox_group .van-radio--horizontal {
  width: 50%;
  margin: 0 0 0.12rem;
}

.box_checkbox_group .van-checkbox__icon .van-icon,
.box_checkbox_group .van-radio__icon .van-icon {
  width: 0.18rem;
  height: 0.18rem;
  background: url(../assets/img/icon6.png) no-repeat center;
  background-size: 100%;
  border: none;
  font-size: 0;
}

.box_checkbox_group .van-checkbox__icon--checked .van-icon,
.box_checkbox_group .van-radio__icon--checked .van-icon {
  background: url(../assets/img/icon7.png) no-repeat center;
  background-size: 100%;
}
.box_checkbox_group .van-checkbox__label,
.box_checkbox_group .van-radio__label {
  font-size: 0.13rem;
  color: #001a2f;
  margin-left: 0.05rem;
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
.text_underline {
  padding-bottom: 0.01rem;
  border-bottom: 0.01rem solid #000;
}
.box_div {
  width: 3.3rem;
  display: flex;
  margin: 0 auto 0.1rem;
  padding-top: 0.1rem;
}
.box_options {
  flex: 1;
  height: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 0.13rem;
  color: #001a2f;
}
.box_options_on {
  color: #00569c;
}
.box_img {
  width: 0.35rem;
  height: 0.3rem;
}
.box_em {
  text-align: center;

  line-height: 0.15rem;
}
.box_i {
  padding: 0.1rem 0;
}
.box_div_textarea {
  width: 3rem;
  min-height: 1.5rem;
  height: auto;
  background: url(../assets/img/icon11.png) no-repeat center;
  background-size: 100% 100%;
  margin: 0 auto;
  position: relative;
  padding-top: 0.2rem;
}
.box_div_textarea .van-cell {
  background: none;
}
.box_div_textarea .van-field__label {
  color: #00569C;
  margin-right: 0;
  width: 0.7rem;
}
.box_div_textarea2 {
  margin-top: 0.1rem;
}
.left_num {
  position: absolute;
  left: -0.12rem;
  top: -0.12rem;
  width: 0.27rem;
  height: 0.25rem;
  background: url(../assets/img/icon16.png) no-repeat center;
  background-size: 100% 100%;
  text-align: center;
  line-height: 0.26rem;
  font-size: 0.12rem;
  color: #fff;
  font-weight: bold;
}
.box_tip {
  padding-left: 0.15rem;
  color: #00569c;
  font-size: 0.14rem;
}
.bottom_btn {
  width: 3rem;
  height: 0.45rem;
  margin: 0.2rem auto;
}

.left_btn {
  width: 1.25rem;
  height: 0.45rem;
  float: left;
  background: url(../assets/img/last.png) no-repeat center;
  background-size: 100% 100%;
}
.left_btn1 {
  width: 1.25rem;
  height: 0.45rem;
  float: left;
  background: url(../assets/img/last1.png) no-repeat center;
  background-size: 100% 100%;
}
.right_btn {
  width: 1.25rem;
  height: 0.45rem;
  float: right;
  background: url(../assets/img/next.png) no-repeat center;
  background-size: 100% 100%;
}
.right_btn1 {
  width: 1.25rem;
  height: 0.45rem;
  float: right;
  background: url(../assets/img/next1.png) no-repeat center;
  background-size: 100% 100%;
}
.van-dialog__message {
  font-size: 0.16rem;
}
.van-dialog__confirm,
.van-dialog__confirm:active {
  color: #0189f9;
}
.box_div_textarea .van-cell::after{
  border-bottom:none;
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

