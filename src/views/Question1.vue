<template>
  <div id="question_wrap">
    <img src="../assets/img/icon3.png" alt="" class="top_img" />
    <div class="question_content">
      <div class="question_title">{{ title }}</div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">01</span>
          <div class="box_text">{{ dataList.SD1 }}</div>
        </div>
        <van-checkbox-group
          v-model="result1"
          class="box_checkbox_group"
          direction="horizontal"
          @change="checkboxChange(1, 'I')"
        >
          <van-checkbox
            v-for="(item, index) in dataList.answer1"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-checkbox
          >
        </van-checkbox-group>
        <input
          type="text"
          v-model="inputVal1"
          class="box_dec"
          :placeholder="dataList.answer12"
          v-if="causeFlag1"
        />
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">02</span>
          <div class="box_text" v-html="dataList.SD2"></div>
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
          <div class="box_text" v-html="dataList.SD3"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer2"
            :key="index"
            :class="[
              activeIndex3 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 3)"
          >
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
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
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title2' : 'box_title4']">
          <span class="box_num">04</span>
          <div class="box_text" v-html="dataList.SD4"></div>
        </div>
        <div class="box_div">
          <div
            v-for="(item, index) in dataList.answer3"
            :key="index"
            :class="[
              activeIndex4 == item.score ? 'box_options_on' : '',
              'box_options',
            ]"
            @click="chooseLevel(item.score, 4)"
          >
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
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
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title4']">
          <span class="box_num">05</span>
          <div class="box_text" v-html="dataList.SD5"></div>
        </div>
        <van-radio-group
          v-model="radioValue5"
          direction="horizontal"
          class="box_checkbox_group"
          @change="radioChange()"
        >
          <van-radio
            v-for="(item, index) in dataList.answer4"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-radio
          >
        </van-radio-group>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer12"
          v-if="radioFlag5"
          v-model="radioVal5"
        />

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
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
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
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">06</span>
          <div class="box_text">{{ dataList.SD6 }}</div>
        </div>
        <van-radio-group
          v-model="radioValue6"
          direction="horizontal"
          class="box_checkbox_group"
        >
          <van-radio
            v-for="(item, index) in dataList.answer5"
            :key="index"
            :name="item.name"
            :style="index == 2 ? 'width: 60%' : ''"
            >{{ item.text }}</van-radio
          >
        </van-radio-group>

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
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
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
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">07</span>
          <div class="box_text" v-html="dataList.SD7"></div>
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
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
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
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">08</span>
          <div class="box_text" v-html="dataList.SD8"></div>
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
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
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
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">09</span>
          <div class="box_text" v-html="dataList.SD9"></div>
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
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
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
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">10</span>
          <div class="box_text" v-html="dataList.SD10"></div>
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
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
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
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">11</span>
          <div class="box_text" v-html="dataList.SD11"></div>
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
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
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
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">12</span>
          <div class="box_text" v-html="dataList.SD12"></div>
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
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
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
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">13</span>
          <div class="box_text" v-html="dataList.SD13"></div>
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
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
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
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">14</span>
          <div class="box_text" v-html="dataList.SD14"></div>
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
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
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
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title4']">
          <span class="box_num">15</span>
          <div class="box_text">{{ dataList.SD15 }}</div>
        </div>
        <div class="box_div_textarea">
          <div class="message_tip">{{ dataList.answer9 }}</div>
          <van-field
            v-model="recognizedMsg15"
            rows="2"
            autosize
            type="textarea"
            :placeholder="dataList.answer12"
          />
          <div class="message_tip">{{ dataList.answer10 }}</div>
          <van-field
            v-model="improvedMsg15"
            rows="2"
            autosize
            type="textarea"
            :placeholder="dataList.answer12"
          />
        </div>
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title3']">
          <span class="box_num">16</span>
          <div class="box_text">{{ dataList.SD16 }}</div>
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
            <img :src="item.img" alt="" class="box_img" />
            <i class="box_i">{{ item.score }}</i>
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
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">17</span>
          <div class="box_text">{{ dataList.SD17 }}</div>
        </div>
        <van-radio-group
          v-model="radioValue17"
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
          <span class="box_num">18</span>
          <div class="box_text">{{ dataList.SD18 }}</div>
        </div>
        <van-checkbox-group
          v-model="result18"
          class="box_checkbox_group"
          direction="horizontal"
          @change="checkboxChange(18, 'M')"
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
          v-if="causeFlag18"
          v-model="inputVal18"
        />
      </div>
      <div class="question_box">
        <div :class="[lanIdx == 1 ? 'box_title' : 'box_title4']">
          <span class="box_num">19</span>
          <div class="box_text">{{ dataList.SD19 }}</div>
        </div>
        <van-checkbox-group
          v-model="result19"
          class="box_checkbox_group"
          direction="horizontal"
          @change="checkboxChange(19, 'S')"
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
          v-if="causeFlag19"
          v-model="inputVal19"
        />
      </div>
      <div class="question_box question_box_nobor">
        <div class="box_div_textarea box_div_textarea2">
          <span class="left_num">20</span>
          <div class="box_tip">{{ dataList.SD20 }}</div>
          <van-field v-model="message20" rows="2" autosize type="textarea" />
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
import { Dialog } from "vant";
export default {
  name: "Question1",
  data() {
    return {
      dataList: [],
      lanIdx: "",
      title: "",
      dialogText: "",
      result1: [],
      result18: [],
      result19: [],
      message20: "",
      activeIcon: require("../assets/img/icon7.png"),
      inactiveIcon: require("../assets/img/icon6.png"),
      radioValue5: "",
      radioValue6: "",
      radioValue17: "",
      recognizedMsg15: "",
      improvedMsg15: "",
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
      activeIndex16: 6,
      causeFlag1: false,
      causeFlag2: false,
      causeFlag3: false,
      causeFlag4: false,
      causeFlag5: false,
      radioFlag5: false,
      causeFlag6: false,
      causeFlag7: false,
      causeFlag8: false,
      causeFlag9: false,
      causeFlag10: false,
      causeFlag11: false,
      causeFlag12: false,
      causeFlag13: false,
      causeFlag14: false,
      causeFlag16: false,
      causeFlag18: false,
      causeFlag19: false,
      inputVal1: "",
      inputVal2: "",
      inputVal3: "",
      inputVal4: "",
      radioVal5: "",
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
      inputVal16: "",
      inputVal18: "",
      inputVal19: "",
      optionVal1: "",
      optionVal2: "",
      optionVal3: "",
      optionVal4: "",
      optionVal5: "",
      question5: "",
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
      optionVal18: "",
      optionVal19: "",
    };
  },
  created() {
    this.lanIdx = this.$route.query.idx;
    if (this.$route.query.idx == 1) {
      this.dataList = list.cn;
      this.title = list.cnTitle1;
      this.dialogText = list.cnDialog;
    } else if (this.$route.query.idx == 2) {
      this.dataList = list.en;
      this.title = list.enTitle1;
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
        this.optionVal3 == "" ||
        this.optionVal4 == "" ||
        this.radioValue5 == "" ||
        this.optionVal5 == "" ||
        this.radioValue6 == "" ||
        this.optionVal6 == "" ||
        this.optionVal7 == "" ||
        this.optionVal8 == "" ||
        this.optionVal9 == "" ||
        this.optionVal10 == "" ||
        this.optionVal11 == "" ||
        this.optionVal12 == "" ||
        this.optionVal13 == "" ||
        this.optionVal14 == "" ||
        this.recognizedMsg15 == "" ||
        this.improvedMsg15 == "" ||
        this.optionVal16 == "" ||
        this.radioValue17 == "" ||
        this.optionVal18 == "" ||
        this.optionVal19 == ""
      ) {
        this.$dialog.alert({
          message: this.dialogText,
        });
        return;
      }
      if (
        (this.causeFlag1 && this.inputVal1 == "") ||
        (this.causeFlag2 && this.inputVal2 == "") ||
        (this.causeFlag3 && this.inputVal3 == "") ||
        (this.causeFlag4 && this.inputVal4 == "") ||
        (this.radioFlag5 && this.radioVal5 == "") ||
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
        (this.causeFlag16 && this.inputVal16 == "") ||
        (this.causeFlag18 && this.inputVal18 == "") ||
        (this.causeFlag19 && this.inputVal19 == "")
      ) {
        this.$dialog.alert({
          message: this.dialogText,
        });
        return;
      }
      this.optionVal1 = this.optionVal1 + "" + this.inputVal1;
      this.optionVal2 = this.optionVal2 + "" + this.inputVal2;
      this.optionVal3 = this.optionVal3 + "" + this.inputVal3;
      this.optionVal4 = this.optionVal4 + "" + this.inputVal4;
      this.question5 =
        this.radioValue5 +
        "" +
        this.radioVal5 +
        "," +
        this.optionVal5 +
        "" +
        this.inputVal5;
      this.optionVal6 = this.optionVal6 + "" + this.inputVal6;
      this.optionVal7 = this.optionVal7 + "" + this.inputVal7;
      this.optionVal8 = this.optionVal8 + "" + this.inputVal8;
      this.optionVal9 = this.optionVal9 + "" + this.inputVal9;
      this.optionVal10 = this.optionVal10 + "" + this.inputVal10;
      this.optionVal11 = this.optionVal11 + "" + this.inputVal11;
      this.optionVal12 = this.optionVal12 + "" + this.inputVal12;
      this.optionVal13 = this.optionVal13 + "" + this.inputVal13;
      this.optionVal14 = this.optionVal14 + "" + this.inputVal14;
      this.optionVal15 = this.recognizedMsg15 + "," + this.improvedMsg15;
      this.optionVal16 = this.optionVal16 + "" + this.inputVal16;
      this.optionVal18 = this.optionVal18 + "" + this.inputVal18;
      this.optionVal19 = this.optionVal19 + "" + this.inputVal19;

      var str =
        this.optionVal1 +
        "-" +
        this.optionVal2 +
        "-" +
        this.optionVal3 +
        "-" +
        this.optionVal4 +
        "-" +
        this.question5 +
        "-" +
        this.optionVal6 +
        "-" +
        this.optionVal7 +
        "-" +
        this.optionVal8 +
        "-" +
        this.optionVal9 +
        "-" +
        this.optionVal10 +
        "-" +
        this.optionVal11 +
        "-" +
        this.optionVal12 +
        "-" +
        this.optionVal13 +
        "-" +
        this.optionVal14 +
        "-" +
        this.optionVal15 +
        "-" +
        this.optionVal16 +
        "-" +
        this.radioValue17 +
        "-" +
        this.optionVal18 +
        "-" +
        this.optionVal19 +
        "-" +
        this.message20;
      console.log(str);
      this.$ajax
        .post("http://qa.travbao.com/goabraod/trav/writeAnswer.do", {
          qAnswers: str,
          spType: 1,
        })
        .then((res) => {
          if (res.data.code == 0) {
            var spId = res.data.data.spId;
          }
          this.$router.push({
            path: "/personalInfo",
            query: { spId: spId, idx: this.lanIdx },
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
    radioChange() {
      if (this.radioValue5 == "D") {
        this.radioFlag5 = true;
      } else {
        this.radioFlag5 = false;
      }
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
  top: 0.03rem;
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
  padding-top: 0.2rem;
}
.box_div_textarea .van-cell {
  background: none;
}
.box_div_textarea .van-field__label {
  color: #00569c;
  margin-right: 0;
  width: 0.7rem;
}
.box_div_textarea2 {
  margin-top: 0.1rem;
  position: relative;
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
.message_tip {
  padding: 0 0.16rem;
  color: #00569c;
  font-size: 0.14rem;
}
.box_div_textarea .van-cell::after{
  border-bottom:none;
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

