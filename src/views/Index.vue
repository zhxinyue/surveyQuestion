<template>

  <div id="index_wrap">
    <div class="index_btn">
      <div class="btn cn_btn" @click="nextStep(1)"></div>
      <div class="btn en_btn" @click="nextStep(2)"></div>
    </div>
  </div>

</template>
<script>
export default {
  name: "Index",
  data() {
    return {};
  },

  methods: {
    nextStep(idx) {
      this.$router.push({ path: "/cooperationArea", query: { idx: idx } });
    },
  },
};
</script>
<style>
@import url("../assets/css/reset.css");

#index_wrap {
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  height:100vh;
  background: url(../assets/img/bg.png) no-repeat;
  background-size: 100% 6.67rem;
  background-color: #229eff;
}
.index_btn {
  width: 80%;
  position: absolute;
  top: 5.4rem;
  left: 10%;
}
.btn {
  width: 1.25rem;
  height: 0.45rem;
  float: left;
  background: url(../assets/img/cn.png) no-repeat center;
  background-size: 100% 100%;
}
.btn.en_btn {
  float: right;
  background-image: url(../assets/img/en.png);
}
</style>

