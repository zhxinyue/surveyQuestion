<template>
  <div id="area_wrap">
    <div class="area_content">
      <h4 class="area_title">贵司与四维图新合作的领域是：</h4>
      <div class="area_options" @click="chooseArea(1)">
        核心地图<img
          src="../assets/img/icon.png"
          alt=""
          class="dui_img"
          v-if="chooseFlag1"
        />
      </div>
      <div class="area_options" @click="chooseArea(2)">
        高精度地图<img
          src="../assets/img/icon.png"
          alt=""
          class="dui_img"
          v-if="chooseFlag2"
        />
      </div>
      <div class="area_options" @click="chooseArea(3)">
        核心地图+高精度地图<img
          src="../assets/img/icon.png"
          alt=""
          class="dui_img"
          v-if="chooseFlag3"
        />
      </div>
      <div class="area_btn" @click="nextStep">开始问卷＞＞</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CooperationArea",
  data() {
    return {
      chooseFlag1: true,
      chooseFlag2: false,
      chooseFlag3: false,
      page:1
    };
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
    nextStep(){
        this.$router.push({name: 'Question'+this.page})
    }
  },
};
</script>
<style>
@import url("../assets/css/reset.css");
#area_wrap {
  width: 100%;
  height: 6.22rem;
  background: url(../assets/img/bg2.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
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
  font-size: 0.18rem;
  color: #333c82;
  margin-bottom: 0.2rem;
}
.area_options {
  width: 2.25rem;
  height: 0.34rem;
  line-height: 0.34rem;
  border: 0.01rem solid #333c82;
  border-radius: 0.05rem;
  margin: 0 auto 0.3rem;
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
</style>

