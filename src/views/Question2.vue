<template>
  <div id="question_wrap">
    <img src="../assets/img/icon3.png" alt="" class="top_img" />
    <div class="question_content">
      <div class="question_title">高精度地图-HD Map</div>  
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">01</span>
          <div class="box_text">
            您对四维图新高精度地图数据在<i class="text_underline">数据准确性</i
            >方面满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
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
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
      </div>
      <div class="question_box">
        <div class="box_title box_title2">
          <span class="box_num">03</span>
          <div class="box_text">在过去一年的高精度地图项目合作中，是否发生过对贵司影响重大的<i class="text_underline">数据品质</i
            >问题？满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">未发生过且非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">发生过且满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">未发生且一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">发生过且不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">发生过且非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
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
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
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
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
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
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
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
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
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
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
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
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
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
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">11</span>
          <div class="box_text">
            您对四维图新高精度地图<i class="text_underline">产品推送下载</i>方面的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">12</span>
          <div class="box_text">
           您对四维图新高精度地图项目团队的<i class="text_underline">问联响应速度</i>的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
      </div>
       <div class="question_box">
        <div class="box_title">
          <span class="box_num">13</span>
          <div class="box_text">
            您对四维图新高精度地图项目团队的<i class="text_underline">问联答复内容</i>的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">14</span>
          <div class="box_text">
            您对四维图新高精度地图的<i class="text_underline">现有质量体系</i>方面的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
      </div>
     <div class="question_box">
        <div class="box_title">
          <span class="box_num">15</span>
          <div class="box_text">
            您对四维图新高精度地图的<i class="text_underline">质量体系改进</i>方面的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
      </div>
 <div class="question_box">
        <div class="box_title">
          <span class="box_num">16</span>
          <div class="box_text">
            在<i class="text_underline">项目接洽</i>过程中，您对四维图新项目团队人员的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
      </div>
 <div class="question_box">
        <div class="box_title">
          <span class="box_num">17</span>
          <div class="box_text">
            在<i class="text_underline">需求沟通</i>过程中，您对四维图新项目团队人员的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
      </div>
<div class="question_box">
        <div class="box_title">
          <span class="box_num">18</span>
          <div class="box_text">
            在<i class="text_underline">项目执行</i>过程中，您对四维图新项目团队人员的满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
      </div>
  <div class="question_box">
        <div class="box_title">
          <span class="box_num">19</span>
          <div class="box_text">您认为四维图新的高精度地图产品和服务在哪些方面值得认可？哪些方面还需要改进？
          </div>
        </div>
        <div class="box_div_textarea">
          <van-field
            v-model="message"
            rows="2"
            autosize
            label="值得认可："
            type="textarea"
            placeholder="请输入留言"
          />
          <van-field
            v-model="message"
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
          <span class="box_num">20</span>
          <div class="box_text">与其他公司同类产品相比，您对四维图新产品的价格满意程度如何？
          </div>
        </div>
        <div class="box_div">
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">5</i>
            <em class="box_em">非常满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">4</i>
            <em class="box_em">满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">3</i>
            <em class="box_em">一般</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">2</i>
            <em class="box_em">不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">1</i>
            <em class="box_em">非常不满意</em>
          </div>
          <div class="box_options">
            <img src="../assets/img/icon9.png" alt="" class="box_img" />
            <i class="box_i">?</i>
            <em class="box_em">不清楚</em>
          </div>
        </div>
        <input type="text" class="box_dec" placeholder="原因&合作项目（必填）" v-if="flag"/>
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">21</span>
          <div class="box_text">您是否能够及时收到四维图新最新产品和服务信息？ </div>
        </div>
        <van-radio-group v-model="radio" direction="horizontal" class="box_checkbox_group">
  <van-radio name="1">A.是</van-radio>
  <van-radio name="2">B.否</van-radio>
</van-radio-group>
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">22</span>
          <div class="box_text">您是通过以下哪些途径获得四维图新的最新产品和服务信息的？（可多选）
           
          </div>
        </div>
        <van-checkbox-group
          v-model="result"
          class="box_checkbox_group"
          direction="horizontal"
        >
          <van-checkbox name="a">A.线上活动</van-checkbox>
          <van-checkbox name="b">B.公司产品宣传册</van-checkbox>
          <van-checkbox name="c">C.公司介绍</van-checkbox>
          <van-checkbox name="d">D.用户大会</van-checkbox>
          <van-checkbox name="e">E.产品赏鉴会</van-checkbox>
          <van-checkbox name="f">F.Workshop/Tech Day</van-checkbox>
          <van-checkbox name="g">G.企业间访问参观</van-checkbox>
          <van-checkbox name="h">H.专业展会</van-checkbox>
          <van-checkbox name="i">I.Newsletter</van-checkbox>
          <van-checkbox name="i">J.微信/微博</van-checkbox>
          <van-checkbox name="i">K.第三方媒体渠道</van-checkbox>
          <van-checkbox name="i">L.客户经理告知</van-checkbox>
          <van-checkbox name="i">M.其他</van-checkbox>
        </van-checkbox-group>
        <input
          type="text"
          class="box_dec"
          placeholder="请在此输入产品名称（必填）"
        />
      </div>
      <div class="question_box">
        <div class="box_title">
          <span class="box_num">23</span>
          <div class="box_text">以下四维图新产品和服务中，您认为可能与贵司建立合作的领域有哪些？（可多选）
          </div>
        </div>
        <van-checkbox-group
          v-model="result"
          class="box_checkbox_group"
          direction="horizontal"
        >
          <van-checkbox name="a">A.导航地图</van-checkbox>
          <van-checkbox name="b">B.导航软件</van-checkbox>
          <van-checkbox name="c">C.新能源汽车智能出行解决方案</van-checkbox>
          <van-checkbox name="d">D.乘用车车联网服务</van-checkbox>
          <van-checkbox name="e">E.商用车车联网服务</van-checkbox>
          <van-checkbox name="f">F.动态交通信息</van-checkbox>
          <van-checkbox name="g">G.位置大数据平台</van-checkbox>
          <van-checkbox name="h">H.语音产品及服务</van-checkbox>
          <van-checkbox name="h">I.ADAS地图</van-checkbox>
          <van-checkbox name="h">J.ADASIS</van-checkbox>
          <van-checkbox name="h">K.高精度地图</van-checkbox>
          <van-checkbox name="h">L.自动驾驶综合解决方案</van-checkbox>
          <van-checkbox name="h">M.自动代客泊车解决方案</van-checkbox>
          <van-checkbox name="h">N.自动驾驶模拟仿真</van-checkbox>
          <van-checkbox name="h">O.V2X解决方案</van-checkbox>
          <van-checkbox name="h">P.高精度定位</van-checkbox>
          <van-checkbox name="h">Q.高精度融合定位</van-checkbox>
          <van-checkbox name="h">R.芯片产品及服务</van-checkbox>
          <van-checkbox name="h">S.其他</van-checkbox>
        </van-checkbox-group>
       <input
          type="text"
          class="box_dec"
          placeholder="请在此输入产品名称（必填）"
        />
      </div>
      <div class="question_box question_box_nobor">
        <div class="box_div_textarea box_div_textarea2">
          <span class="left_num">24</span>
          <div class="box_tip">写给我们的悄悄话：</div>
          <van-field
            v-model="message"
            rows="2"
            autosize
            type="textarea"
            placeholder="请输入留言"
          />
        </div>
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
  name: "Question2",
  data() {
    return {
      result: [],
      radio:'',
      message:'',
      activeIcon: require("../assets/img/icon7.png"),
      inactiveIcon: require("../assets/img/icon6.png"),
      flag:false
    };
  },
  methods: {
    lastStep(){
      this.$router.go(-1);
    },
    nextStep(){
      this.$router.push({name: 'PersonalInfo'})
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
  background: url(../assets/img/icon10.png)no-repeat 0.01rem center;
  background-size: 3.15rem 0.94rem;
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
  /* height: 1rem; */
  display: flex;
  margin: 0 auto;
  padding-top:0.1rem;
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
</style>

