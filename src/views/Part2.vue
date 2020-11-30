<template>
  <div id="question_wrap" class="part2">
    <img src="../assets/img/icon3.png" alt="" class="top_img" />
    <div class="question_content">
      <div class="question_title">Part2. {{ title }}</div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">01</span>
          <div class="box_text" v-html="dataList.HD1" :style="(emptyFlag && optionVal1=='') || (emptyFlag && (causeFlag1 && inputVal1 == '')) ? 'color: red' : 'color:#000'"></div>
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
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
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
        <div class="errortip" v-if="(emptyFlag && optionVal1=='') || (emptyFlag && (causeFlag1 && inputVal1 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">02</span>
          <div class="box_text" :style="(emptyFlag && optionVal2=='') || (emptyFlag && (causeFlag2 && inputVal2 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.HD2"></div>
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
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
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
        <div class="errortip" v-if="(emptyFlag && optionVal2=='') || (emptyFlag && (causeFlag2 && inputVal2 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title2' : 'box_title4']">
          <span class="box_num">03</span>
          <div class="box_text" :style="(emptyFlag && optionVal3=='') || (emptyFlag && (causeFlag3 && inputVal3 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.HD3"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer3"
            :key="index"
            :class="[
              activeIndex3 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 3)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal3"
          :placeholder="dataList.answer11"
          v-if="causeFlag3"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal3=='') || (emptyFlag && (causeFlag3 && inputVal3 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">04</span>
          <div class="box_text" :style="(emptyFlag && optionVal4=='') || (emptyFlag && (causeFlag4 && inputVal4 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.HD4"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex4 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 4)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal4"
          :placeholder="dataList.answer11"
          v-if="causeFlag4"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal4=='') || (emptyFlag && (causeFlag4 && inputVal4 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">05</span>
          <div class="box_text" :style="(emptyFlag && optionVal5=='') || (emptyFlag && (causeFlag5 && inputVal5 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.HD5"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex5 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 5)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          v-model="inputVal5"
          class="box_dec"
          :placeholder="dataList.answer11"
          v-if="causeFlag5"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal5=='') || (emptyFlag && (causeFlag5 && inputVal5 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">06</span>
          <div class="box_text" :style="(emptyFlag && optionVal6=='') || (emptyFlag && (causeFlag6 && inputVal6 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.HD6"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex6 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 6)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer11"
          v-if="causeFlag6"
          v-model="inputVal6"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal6=='') || (emptyFlag && (causeFlag6 && inputVal6 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">07</span>
          <div class="box_text" :style="(emptyFlag && optionVal7=='') || (emptyFlag && (causeFlag7 && inputVal7 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.HD7"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex7 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 7)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer11"
          v-if="causeFlag7"
          v-model="inputVal7"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal7=='') || (emptyFlag && (causeFlag7 && inputVal7 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">08</span>
          <div class="box_text" :style="(emptyFlag && optionVal8=='') || (emptyFlag && (causeFlag8 && inputVal8 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.HD8"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex8 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 8)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer11"
          v-if="causeFlag8"
          v-model="inputVal8"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal8=='') || (emptyFlag && (causeFlag8 && inputVal8 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">09</span>
          <div class="box_text" :style="(emptyFlag && optionVal9=='') || (emptyFlag && (causeFlag9 && inputVal9 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.HD9"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex9 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 9)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer11"
          v-if="causeFlag9"
          v-model="inputVal9"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal9=='') || (emptyFlag && (causeFlag9 && inputVal9 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">10</span>
          <div class="box_text" :style="(emptyFlag && optionVal10=='') || (emptyFlag && (causeFlag10 && inputVal10 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.HD10"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex10 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 10)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer11"
          v-if="causeFlag10"
          v-model="inputVal10"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal10=='') || (emptyFlag && (causeFlag10 && inputVal10 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">11</span>
          <div class="box_text" :style="(emptyFlag && optionVal11=='') || (emptyFlag && (causeFlag11 && inputVal11 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.HD11"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex11 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 11)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer11"
          v-if="causeFlag11"
          v-model="inputVal11"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal11=='') || (emptyFlag && (causeFlag11 && inputVal11 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">12</span>
          <div class="box_text" :style="(emptyFlag && optionVal12=='') || (emptyFlag && (causeFlag12 && inputVal12 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.HD12"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex12 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 12)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer11"
          v-if="causeFlag12"
          v-model="inputVal12"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal12=='') || (emptyFlag && (causeFlag12 && inputVal12 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">13</span>
          <div class="box_text" :style="(emptyFlag && optionVal13=='') || (emptyFlag && (causeFlag13 && inputVal13 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.HD13"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex13 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 13)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer11"
          v-if="causeFlag13"
          v-model="inputVal13"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal13=='') || (emptyFlag && (causeFlag13 && inputVal13 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">14</span>
          <div class="box_text" :style="(emptyFlag && optionVal14=='') || (emptyFlag && (causeFlag14 && inputVal14 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.SD12"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex14 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 14)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer11"
          v-if="causeFlag14"
          v-model="inputVal14"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal14=='') || (emptyFlag && (causeFlag14 && inputVal14 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">15</span>
          <div class="box_text" :style="(emptyFlag && optionVal15=='') || (emptyFlag && (causeFlag15 && inputVal15 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.SD13"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex15 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 15)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer11"
          v-if="causeFlag15"
          v-model="inputVal15"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal15=='') || (emptyFlag && (causeFlag15 && inputVal15 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">16</span>
          <div class="box_text" :style="(emptyFlag && optionVal16=='') || (emptyFlag && (causeFlag16 && inputVal16 == '')) ? 'color: red' : 'color:#000'" v-html="dataList.SD14"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex16 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 16)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer11"
          v-if="causeFlag16"
          v-model="inputVal16"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal16=='') || (emptyFlag && (causeFlag16 && inputVal16 == ''))">该选项为必填项</div>
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">17</span>
          <div class="box_text" :style="(emptyFlag && recognizedMsg17=='') || (emptyFlag && improvedMsg17=='') ? 'color: red' : 'color:#000'">
            {{ dataList.HD19 }}
          </div>
        </div>
        <div class="box_div_textarea">
          <div class="message_tip">{{ dataList.answer9 }}</div>
          <van-field
            v-model="recognizedMsg17"
            rows="2"
            autosize
            type="textarea"
            :placeholder="dataList.answer12"
          />
          <div class="message_tip">{{ dataList.answer10 }}</div>
          <van-field
            v-model="improvedMsg17"
            rows="2"
            autosize
            type="textarea"
            :placeholder="dataList.answer12"
          />
        </div>
        <div class="errortip" v-if="(emptyFlag && recognizedMsg17=='') || (emptyFlag && improvedMsg17=='')" style="margin-top:0.05rem">该选项为必填项</div>
      </div>

      <div class="question_box question_box_nobor">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">18</span>
          <div class="box_text" :style="(emptyFlag && optionVal18=='') || (emptyFlag && (causeFlag18 && inputVal18 == '')) ? 'color: red' : 'color:#000'">
            {{ dataList.HD22 }}
          </div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex18 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 18)"
          >
            <img :src="require('../assets/img/'+item.img)" alt="" class="box_img" />
            
            <em class="box_em">{{ item.text }}</em>
          </div>
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer11"
          v-if="causeFlag18"
          v-model="inputVal18"
        />
        <div class="errortip" v-if="(emptyFlag && optionVal18=='') || (emptyFlag && (causeFlag18 && inputVal18 == ''))">该选项为必填项</div>
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
  name: "Part2",
  data() {
    return {
      dataList: [],
      lanIdx: "",
      title: "",
      dialogText: "",
      confirmTxt:"",
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
      inputVal5: "",
      inputVal6: "",
      inputVal7: "",
      inputVal8: "",
      inputVal9: "",
      inputVal10: "",
      inputVal11: "",
      inputVal12: "",
      inputVal13: "",
      inputVal14: "",
      inputVal15: "",
      inputVal16: "",
      inputVal18: "",
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
      emptyFlag:false,
    };
  },
  created() {
    this.lanIdx = this.$route.query.idx;
    if (this.$route.query.idx == 1) {
      this.dataList = list.cn;
      this.title = list.cnTitle2;
      this.dialogText = list.cnDialog;
      this.confirmTxt = list.cnConfirm
    } else if (this.$route.query.idx == 2) {
      this.dataList = list.en;
      this.title = list.enTitle2;
      this.dialogText = list.enDialog;
      this.confirmTxt = list.enConfirm
    }
  },
  methods: {
    lastStep() {
      this.$router.back();
    },
    nextStep() {
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
        this.optionVal18 == ""
      ) {
        this.emptyFlag = true
        this.$dialog.alert({
          message: this.dialogText,
          confirmButtonText:this.confirmTxt
        });
        return;
      }
      if (
        (this.causeFlag1 && this.inputVal1 == "") ||
        (this.causeFlag2 && this.inputVal2 == "") ||
        (this.causeFlag3 && this.inputVal3 == "") ||
        (this.causeFlag4 && this.inputVal4 == "") ||
        (this.causeFlag5 && this.inputVal5 == "") ||
        (this.causeFlag6 && this.inputVal6 == "") ||
        (this.causeFlag7 && this.inputVal7 == "") ||
        (this.causeFlag8 && this.inputVal8 == "") ||
        (this.causeFlag9 && this.inputVal9 == "") ||
        (this.causeFlag10 && this.inputVal10 == "") ||
        (this.causeFlag11 && this.inputVal11 == "") ||
        (this.causeFlag12 && this.inputVal12 == "") ||
        (this.causeFlag13 && this.inputVal13 == "") ||
        (this.causeFlag14 && this.inputVal14 == "") ||
        (this.causeFlag15 && this.inputVal15 == "") ||
        (this.causeFlag16 && this.inputVal16 == "") ||
        (this.causeFlag18 && this.inputVal18 == "")
      ) {
        this.emptyFlag = true
        this.$dialog.alert({
          message: this.dialogText,
          confirmButtonText:this.confirmTxt
        });
        return;
      }
     
var val1 = this.optionVal1 + "" + this.inputVal1,
          val2 = this.optionVal2 + "" + this.inputVal2,
          val3 = this.optionVal3 + "" + this.inputVal3,
          val4 = this.optionVal4 + "" + this.inputVal4,
          val5 = this.optionVal5 + "" + this.inputVal5,
          val6 = this.optionVal6 + "" + this.inputVal6,
          val7 = this.optionVal7 + "" + this.inputVal7,
          val8 = this.optionVal8 + "" + this.inputVal8,
          val9 = this.optionVal9 + "" + this.inputVal9,
          val10 = this.optionVal10 + "" + this.inputVal10,
          val11 = this.optionVal11 + "" + this.inputVal11,
          val12 = this.optionVal12 + "" + this.inputVal12,
          val13 = this.optionVal13 + "" + this.inputVal13,
          val14 = this.optionVal14 + "" + this.inputVal14,
          val15 = this.optionVal15 + "" + this.inputVal15,
          val16 = this.optionVal16 + "" + this.inputVal16,
          val17 = this.recognizedMsg17 + "," + this.improvedMsg17,
          val18 = this.optionVal18 + "" + this.inputVal18
          var str =
        val1 +
        "-" +
        val2 +
        "-" +
        val3 +
        "-" +
        val4 +
        "-" +
        val5 +
        "-" +
        val6 +
        "-" +
        val7 +
        "-" +
        val8 +
        "-" +
        val9 +
        "-" +
        val10 +
        "-" +
        val11 +
        "-" +
        val12 +
        "-" +
        val13 +
        "-" +
        val14 +
        "-" +
        val15 +
        "-" +
        val16 +
        "-" +
        val17 +
        "-" +
        val18 ;
     
      console.log(str);
      this.$ajax
        .post("http://qa.travbao.com/goabraod/trav/writeAnswer.do", {
          qAnswers: str,
          spType: 2,
        })
        .then((res) => {
          if (res.data.code == 0) {
            var spId = res.data.data.spId;
          }
          var spId2 = this.$route.query.spId + "-" + spId;
          this.$router.push({
            path: "/part3",
            query: { spId: spId2, idx: this.lanIdx },
          });
        });
    },
    chooseLevel(idx, num) {
      var onindex = "activeIndex" + num;
      var onflag = "causeFlag" + num;
      var opval = "optionVal" + num;
      var iptval = "inputVal" + num
      this[onindex] = idx;
      this[opval] = idx;
      if (idx == 0) {
        this[opval] = "?";
      }
      if (idx == 3 || idx == 2 || idx == 1) {
        this[onflag] = true;
      } else {
        this[onflag] = false;
        this[iptval] = ''
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
.box_checkbox_group .van-checkbox{
-webkit-align-items: stretch;
    align-items: stretch;
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
  margin: 0 auto 0.05rem;
  border: none;
  background: url(../assets/img/icon8.png) no-repeat;
  background-size: 100%;
  text-indent: 0.1rem;
}
.text_underline {
  border-bottom: 0.005rem solid #000;
}
.box_div {
  width: 3.3rem;
  display: flex;
  margin: 0 auto 0.1rem;
  padding-top: 0.1rem;
}
.box_options {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 0.13rem;
  color: #001a2f;
}
.box_options_on {
  color: #005aff;
}
.box_img {
  width: 0.35rem;
  height: 0.3rem;
  margin-bottom: 0.1rem;
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

.bottom_btn {
  width: 3rem;
  height: 0.45rem;
  margin: 0.2rem auto;
}

.part2 .left_btn {
  width: 1.25rem;
  height: 0.45rem;
  float: left;
  background: url(../assets/img/last.png) no-repeat center;
  background-size: 100% 100%;
}
.part2 .left_btn1 {
  width: 1.25rem;
  height: 0.45rem;
  float: left;
  background: url(../assets/img/last1.png) no-repeat center;
  background-size: 100% 100%;
}
.part2 .right_btn {
  width: 1.25rem;
  height: 0.45rem;
  float: right;
  background: url(../assets/img/next.png) no-repeat center;
  background-size: 100% 100%;
}
.part2 .right_btn1 {
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
.message_tip {
  padding: 0 0.16rem;
  color: #00569c;
  font-size: 0.14rem;
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
.errortip{
      width: 3rem;
    margin: 0 auto;
  color:red;
font-size: 0.14rem;
}
</style>

