<template>
  <div id="question_wrap">
    <img src="../assets/img/icon3.png" alt="" class="top_img" />
    <div class="question_content">
      <div class="question_title">Part2. 高精度地图</div>  
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">01</span>
          <div class="box_text">
            您对四维图新高精度地图数据在<i class="text_underline">数据准确性</i
            >方面满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div :class="[activeIndex1 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 1)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div :class="[activeIndex1 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 1)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div :class="[activeIndex1 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 1)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div :class="[activeIndex1 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 1)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div :class="[activeIndex1 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 1)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div :class="[activeIndex1 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 1)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal1"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag1"
        />
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">02</span>
          <div class="box_text">
            您对四维图新高精度地图数据在<i class="text_underline">数据丰富度</i
            >方面满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div :class="[activeIndex2 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 2)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div :class="[activeIndex2 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 2)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div :class="[activeIndex2 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 2)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div :class="[activeIndex2 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 2)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div :class="[activeIndex2 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 2)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div :class="[activeIndex2 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 2)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal2"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag2"
        />
      </div>
      <div class="question_box">
        <div class="box_title box_title2">
          <span class="box_num">03</span>
          <div class="box_text">在过去一年的高精度地图项目合作中，是否发生过对贵司影响重大的<i class="text_underline">数据品质</i
            >问题？满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex3 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 3)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">未发生过且非常满意</em>
          </div>
          <div
            :class="[activeIndex3 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 3)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">发生过且满意</em>
          </div>
          <div
            :class="[activeIndex3 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 3)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">未发生且一般</em>
          </div>
          <div
            :class="[activeIndex3 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 3)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">发生过且不满意</em>
          </div>
          <div
            :class="[activeIndex3 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 3)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">发生过且非常不满意</em>
          </div>
          <div
            :class="[activeIndex3 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 3)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal3"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag3"
        />
      </div>
       <div class="question_box">
        <div class="box_title">
          <span class="box_num">04</span>
          <div class="box_text">
           您对四维图新高精度地图的<i class="text_underline">产品设计</i
            >的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex4 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 4)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex4 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 4)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex4 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 4)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex4 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 4)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex4 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 4)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex4 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 4)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal4"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag4"
        />
      </div>
     <div class="question_box">
        <div class="box_title">
          <span class="box_num">05</span>
          <div class="box_text">
           您对四维图新高精度地图的<i class="text_underline">产品功能</i
            >的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex5 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 5)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex5 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 5)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex5 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 5)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex5 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 5)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex5 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 5)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex5 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 5)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          v-model="inputVal5"
          class="box_dec"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag5"
        />
      </div>
        <div class="question_box">
        <div class="box_title">
          <span class="box_num">06</span>
          <div class="box_text">
           您对四维图新高精度地图的<i class="text_underline">产品安全</i
            >的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex6 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 6)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex6 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 6)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex6 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 6)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex6 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 6)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex6 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 6)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex6 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 6)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag6"
           v-model="inputVal6"
        />
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">07</span>
          <div class="box_text">
            您对四维图新高精度地图的<i class="text_underline">产品交付及时性</i
            >方面的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex7 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 7)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex7 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 7)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex7 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 7)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex7 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 7)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex7 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 7)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex7 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 7)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag7"
          v-model="inputVal7"
        />
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">08</span>
          <div class="box_text">
            您对四维图新高精度地图<i class="text_underline">运维响应速度</i
            >方面的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex8 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 8)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex8 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 8)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex8 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 8)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex8 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 8)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex8 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 8)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex8 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 8)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag8"
          v-model="inputVal8"
        />
      </div>
       <div class="question_box">
        <div class="box_title">
          <span class="box_num">09</span>
          <div class="box_text">
            您对四维图新高精度地图<i class="text_underline">运维系统监控</i
            >方面的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex9 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 9)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex9 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 9)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex9 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 9)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex9 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 9)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex9 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 9)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex9 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 9)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag9"
          v-model="inputVal9"
        />
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">10</span>
          <div class="box_text">
            您对四维图新高精度地图<i class="text_underline">产品维护</i
            >更新方面的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex10 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 10)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex10 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 10)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex10 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 10)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex10 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 10)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex10 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 10)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex10 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 10)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag10"
          v-model="inputVal10"
        />
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">11</span>
          <div class="box_text">
            您对四维图新高精度地图<i class="text_underline">产品推送下载</i>方面的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex11 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 11)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex11 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 11)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex11 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 11)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex11 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 11)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex11 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 11)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex11 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 11)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag11"
           v-model="inputVal11"
        />
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">12</span>
          <div class="box_text">
           您对四维图新高精度地图项目团队的<i class="text_underline">问联响应速度</i>的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex12 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 12)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex12 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 12)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex12 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 12)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex12 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 12)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex12 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 12)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex12 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 12)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag12"
           v-model="inputVal12"
        />
      </div>
       <div class="question_box">
        <div class="box_title">
          <span class="box_num">13</span>
          <div class="box_text">
            您对四维图新高精度地图项目团队的<i class="text_underline">问联答复内容</i>的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex13 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 13)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex13 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 13)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex13 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 13)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex13 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 13)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex13 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 13)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex13 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 13)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag13"
           v-model="inputVal13"
        />
      </div>
  <div class="question_box">
        <div class="box_title">
          <span class="box_num">14</span>
          <div class="box_text">
            在<i class="text_underline">项目接洽</i>过程中，您对四维图新项目团队人员的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex14 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 14)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex14 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 14)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex14 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 14)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex14 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 14)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex14 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 14)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex14 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 14)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag14"
           v-model="inputVal14"
        />
      </div>
 <div class="question_box">
        <div class="box_title">
          <span class="box_num">15</span>
          <div class="box_text">
            在<i class="text_underline">需求沟通</i>过程中，您对四维图新项目团队人员的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex15 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 15)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex15 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 15)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex15 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 15)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex15 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 15)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex15 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 15)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex15 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 15)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag15"
           v-model="inputVal15"
        />
      </div>
<div class="question_box">
        <div class="box_title">
          <span class="box_num">16</span>
          <div class="box_text">
            在<i class="text_underline">项目执行</i>过程中，您对四维图新项目团队人员的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex16 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 16)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex16 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 16)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex16 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 16)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex16 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 16)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex16 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 16)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex16 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 16)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag16"
           v-model="inputVal16"
        />
      </div>
  <div class="question_box">
        <div class="box_title">
          <span class="box_num">17</span>
          <div class="box_text">您认为四维图新的高精度地图产品和服务在哪些方面值得认可？哪些方面还需要改进？
          </div>
        </div>
        <div class="box_div_textarea">
          <van-field
            v-model="recognizedMsg17"
            rows="2"
            autosize
            label="值得认可："
            type="textarea"
            placeholder="请输入留言"
          />
          <van-field
            v-model="improvedMsg17"
            rows="2"
            autosize
            label="需要改进："
            type="textarea"
            placeholder="请输入留言"
          />
        </div>
      </div>


      <div class="question_box">
        <div class="box_title">
          <span class="box_num">18</span>
          <div class="box_text">与其他公司同类产品相比，您对四维图新产品的价格满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div
            :class="[activeIndex18 == 5 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(5, 18)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div
            :class="[activeIndex18 == 4 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(4, 18)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div
            :class="[activeIndex18 == 3 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(3, 18)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div
            :class="[activeIndex18 == 2 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(2, 18)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div
            :class="[activeIndex18 == 1 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(1, 18)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div
            :class="[activeIndex18 == 0 ? 'box_options_on' : '', 'box_options']"
            @click="chooseLevel(0, 18)"
          >
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          placeholder="原因&合作项目（必填）"
          v-if="causeFlag18"
           v-model="inputVal18"
        />
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
  name: "Part2",
  data() {
    return {
      activeIcon: require("../assets/img/icon7.png"),
      inactiveIcon: require("../assets/img/icon6.png"),
      recognizedMsg17: "",
      improvedMsg17: "",
      activeIndex1: 6,
      activeIndex2: 6,
      activeIndex3: 6,
      activeIndex4: 6,
      activeIndex5: 6,
      activeIndex6: 6,
      activeIndex7: 6,
      activeIndex8: 6,
      activeIndex9: 6,
      activeIndex10: 6,
      activeIndex11: 6,
      activeIndex12: 6,
      activeIndex13: 6,
      activeIndex14: 6,
      activeIndex15: 6,
      activeIndex16: 6,
      activeIndex18: 6,
      causeFlag1: false,
      causeFlag2: false,
      causeFlag3: false,
      causeFlag4: false,
      causeFlag5: false,
      causeFlag6: false,
      causeFlag7: false,
      causeFlag8: false,
      causeFlag9: false,
      causeFlag10: false,
      causeFlag11: false,
      causeFlag12: false,
      causeFlag13: false,
      causeFlag14: false,
      causeFlag15: false,
      causeFlag16: false,
      causeFlag18: false,
      inputVal1: "",
      inputVal2: "",
      inputVal3: "",
      inputVal4: "",
      inputVal5:"",
      inputVal6:"",
      inputVal7:"",
      inputVal8:"",
      inputVal9:"",
      inputVal10:"",
      inputVal11:"",
      inputVal12:"",
      inputVal13:"",
      inputVal14:"",
      inputVal15:"",
      inputVal16:"",
      inputVal18:"",
      optionVal1: "",
      optionVal2: "",
      optionVal3: "",
      optionVal4: "",
      optionVal5: "",
      optionVal6: "",
      optionVal7: "",
      optionVal8: "",
      optionVal9: "",
      optionVal10: "",
      optionVal11: "",
      optionVal12: "",
      optionVal13: "",
      optionVal14: "",
      optionVal15: "",
      optionVal16: "",
      optionVal17: "",
      optionVal18: "",
    };
  },
  methods: {
    lastStep(){
      this.$router.back();
    },
    nextStep(){
  if (
        this.optionVal1 == "" ||
        this.optionVal2 == "" ||
        this.optionVal3 == "" ||
        this.optionVal4 == "" ||
        this.optionVal5 == "" ||
        this.optionVal6 == "" ||
        this.optionVal7 == "" ||
        this.optionVal8 == "" ||
        this.optionVal9 == "" ||
        this.optionVal10 == "" ||
        this.optionVal11 == "" ||
        this.optionVal12 == "" ||
        this.optionVal13 == "" ||
        this.optionVal14 == "" ||
        this.optionVal15 == "" ||
        this.optionVal16 == "" ||
        this.recognizedMsg17 == "" ||
        this.improvedMsg17 == "" ||
        this.optionVal18 == "" ) {
        this.$dialog.alert({
          message: "您还没有完整填写，请继续完成！",
        });
        return;
      }
      if((this.causeFlag1 && this.inputVal1 == "") || (this.causeFlag2 && this.inputVal2 == "")
      || (this.causeFlag3 && this.inputVal3 == "") || (this.causeFlag4 && this.inputVal4 == "")
      || (this.causeFlag5 && this.inputVal5 == "") || (this.causeFlag6 && this.inputVal6 == "") 
      ||(this.causeFlag7 && this.inputVal7 == "")  || (this.causeFlag8 && this.inputVal8 == "") 
      ||(this.causeFlag9 && this.inputVal9 == "")  || (this.causeFlag10 && this.inputVal10 == "") 
      ||(this.causeFlag11 && this.inputVal11== "") || (this.causeFlag12 && this.inputVal12 == "") 
      ||(this.causeFlag13 && this.inputVal13== "") ||(this.causeFlag14 && this.inputVal14== "")
      || (this.causeFlag15 && this.inputVal15 == "") ||(this.causeFlag16 && this.inputVal16== "")
      || (this.causeFlag18 && this.inputVal18 == "")
      ){
this.$dialog.alert({
            message: "您还没有完整填写，请继续完成！",
          });
          return;
      }
       this.optionVal1 = this.optionVal1 + "" + this.inputVal1;
      this.optionVal2 = this.optionVal2 + "" + this.inputVal2;
this.optionVal3 = this.optionVal3 + "" + this.inputVal3;
this.optionVal4 = this.optionVal4 + "" + this.inputVal4;
this.optionVal5 = this.optionVal5 + "" + this.inputVal5;
this.optionVal6 = this.optionVal6 + "" + this.inputVal6;
this.optionVal7 = this.optionVal7 + "" + this.inputVal7;
this.optionVal8 = this.optionVal8 + "" + this.inputVal8;
this.optionVal9 = this.optionVal9 + "" + this.inputVal9;
this.optionVal10 = this.optionVal10 + "" + this.inputVal10;
this.optionVal11 = this.optionVal11 + "" + this.inputVal11;
this.optionVal12 = this.optionVal12 + "" + this.inputVal12;
this.optionVal13 = this.optionVal13 + "" + this.inputVal13;
this.optionVal14 = this.optionVal14 + "" + this.inputVal14;
this.optionVal15 = this.optionVal15+""+this.inputVal15;
this.optionVal16 = this.optionVal16+""+this.inputVal16;
this.optionVal17 = this.recognizedMsg17+","+this.improvedMsg17;
this.optionVal18 = this.optionVal18+""+this.inputVal18;


     var str = this.optionVal1+'-'+this.optionVal2+'-'+this.optionVal3+'-'+this.optionVal4+'-'+this.optionVal5+'-'+
     this.optionVal6+'-'+this.optionVal7+'-'+this.optionVal8+'-'+this.optionVal9+'-'+this.optionVal10+'-'+this.optionVal11
     +'-'+this.optionVal12+'-'+this.optionVal13+'-'+this.optionVal14+'-'+this.optionVal15+'-'+this.optionVal16+'-'+
     this.optionVal17+'-'+this.optionVal18
     console.log(str)
     this.$ajax.post('https://result.eolinker.com/fHSq9Erb6b80ebc3e2a059e8b04fcf3bb1e6ae8b8fe238d?uri=/trav/writeAnswer.do',
     {
       qAnswers:str,
       spType:2
     }
     ).then((res)=>{
if(res.data.code == 0){
var spId = res.data.data.spId
}
 this.$router.push({name: 'Part3'})
     })
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
.question_box.question_box_nobor{
  border:none;
}
.box_title {
  width: 3.3rem;
  height: 0.74rem;
  background: url(../assets/img/icon5.png) no-repeat 0.01rem center;
  background-size: 3.15rem 0.74rem;
  margin: 0.1rem auto;
  position: relative;
}
.box_title.box_title2{
  height:0.94rem;
  background-image: url(../assets/img/icon10.png);
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
.box_checkbox_group .van-checkbox--horizontal, .box_checkbox_group .van-radio--horizontal{
  width: 50%;
  margin: 0 0 0.12rem;
}

.box_checkbox_group .van-checkbox__icon .van-icon,.box_checkbox_group .van-radio__icon .van-icon {
  width: 0.18rem;
  height: 0.18rem;
  background: url(../assets/img/icon6.png) no-repeat center;
  background-size: 100%;
  border: none;
  font-size: 0;
}

.box_checkbox_group .van-checkbox__icon--checked .van-icon,.box_checkbox_group .van-radio__icon--checked .van-icon {
  background: url(../assets/img/icon7.png) no-repeat center;
  background-size: 100%;
}
.box_checkbox_group .van-checkbox__label,.box_checkbox_group .van-radio__label {
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
  height: 0.28rem;
}
.box_em {
  text-align: center;
  
line-height: 0.15rem;
}
.box_i {
  padding: 0.1rem 0;
}
.box_div_textarea{
  width:3rem;
  min-height:1.5rem;
  height:auto;
  background: url(../assets/img/icon11.png) no-repeat center;
  background-size:100% 100%;
  margin: 0 auto;
  position: relative;
}
.box_div_textarea .van-cell{
  background: none;
}
.box_div_textarea .van-field__label{
  color:#00569C;
  margin-right:0;
  width:0.7rem;
}
.box_div_textarea2{
  margin-top:0.1rem;
}
.left_num{
  position: absolute;
  left:-0.12rem;
  top:-0.12rem;
  width:0.27rem;
  height:0.25rem;
  background: url(../assets/img/icon16.png) no-repeat center;
  background-size: 100% 100%;
  text-align: center;
  line-height: 0.26rem;
   font-size: 0.12rem;
  color: #fff;
  font-weight: bold;
}
.box_tip{
  padding:0.15rem 0 0 0.15rem;
  color:#00569C;
  font-size: 0.14rem;
  
}
.bottom_btn{
  width:3rem;
  height:0.45rem;
  margin: 0.2rem auto;
}

.left_btn{
   width:1.25rem;
height:0.45rem;
  float: left;
background: url(../assets/img/last.png) no-repeat center;
background-size: 100% 100%;
}
.right_btn{
   width:1.25rem;
height:0.45rem;
  float: right;
  background: url(../assets/img/next.png) no-repeat center;
background-size: 100% 100%;
}
.van-dialog__message {
  font-size: 0.16rem;
}
.van-dialog__confirm,
.van-dialog__confirm:active {
  color: #0189f9;
}
</style>

