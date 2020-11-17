<template>
  <div id="index_wrap">
    <div class="index_btn">
      <div class="btn cn_btn" @click="nextStep(1)">中文</div>
      <div class="btn en_btn" @click="nextStep(2)">English</div>
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
  width: 100%;
  height: 6.04rem;
  background: url(../assets/img/bg.png) no-repeat;
  position: relative;
}
.index_btn {
  width: 60%;
  position: absolute;
  bottom: 0.9rem;
  left: 20%;
}
.btn {
  width: 0.9rem;
  height: 0.26rem;
  float: left;
  background: #3047F4;
  border-radius: 0.05rem;
  text-align: center;
  line-height: 0.26rem;
  color: #fff;
  font-size: 0.14rem;
}
.btn.en_btn {
  float: right;

  background: #E0E0E0;
  color: #636363;
}
</style>

