<template>
  <div id="personal_wrap">
    <img src="../assets/img/icon3.png" alt="" class="top_img" />
    <div class="personal_content">
      <div class="personal_title">个人信息填写</div>
      <img src="../assets/img/icon12.png" alt="" class="img_icon" />
      <div class="personal_tip">
        感谢您的反馈！请留下您的联系方式，我们会 为您寄送精美礼品哦~
      </div>

      <div class="heng"></div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon13.png" alt="" class="img_pos" />
          公司名称：<img
            src="../assets/img/icon14.png"
            alt=""
            class="img_star"
          />
        </div>
        <input type="text" class="box_dec" placeholder="请点击输入（必填）" v-model="value1"/>
      </div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon13.png" alt="" class="img_pos" />
          部门名称：<img
            src="../assets/img/icon14.png"
            alt=""
            class="img_star"
          />
        </div>
        <input type="text" class="box_dec" placeholder="请点击输入（必填）" />
      </div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon13.png" alt="" class="img_pos" />
          姓名：<img
            src="../assets/img/icon14.png"
            alt=""
            class="img_star"
          />
        </div>
        <input type="text" class="box_dec" placeholder="请点击输入（必填）" />
      </div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon13.png" alt="" class="img_pos" />
          联系电话：<img
            src="../assets/img/icon14.png"
            alt=""
            class="img_star"
          />
        </div>
        <input type="text" class="box_dec" placeholder="请点击输入（必填）" />
      </div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon13.png" alt="" class="img_pos" />
          邮寄地址：<img
            src="../assets/img/icon14.png"
            alt=""
            class="img_star"
          />
        </div>
        <input type="text" class="box_dec" placeholder="请点击输入（必填）" />
      </div>
    </div>
    <div class="bottom_btn">
      <div class="left_btn" @click="lastStep"></div>
      <div class="right_btn" @click="nextStep"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PersonalInfo",
  data() {
    return {
        value1:'222'
    };
  },
  methods: {
    lastStep() {
      this.$router.go(-1);
    },
    nextStep() {
        this.$router.push({name: 'Thanks'})
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

.left_btn {
  width: 1.25rem;
  height: 0.45rem;
  float: left;
  background: url(../assets/img/last.png) no-repeat center;
  background-size: 100% 100%;
}
.right_btn {
  width: 1.25rem;
  height: 0.45rem;
  float: right;
  background: url(../assets/img/confirm.png) no-repeat center;
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
</style>

