<template>
  <div class="secondTab">
    <el-scrollbar ref="containerRef" class="mainContainer">
      <div class="title">
        {{ projectInfo.id }}
      </div>
      <titleBox title="基本信息">
        <ul class="agencyInfo">
          <li>
            <span class="label">业务：</span>
            <span>{{ projectInfo.agencyCode }}</span>
          </li>
          <li>
            <span class="label">控制点：</span>
            <span>{{ projectInfo.agencyCode }}</span>
          </li>
          <li>
            <span class="label">发生时间：</span>
            <span>{{ projectInfo.agencyCode }}</span>
          </li>
          <li>
            <span class="label">风险级别：</span>
            <span>{{ projectInfo.agencyCode }}</span>
          </li>
          <li>
            <span class="label">责任科(股)室：</span>
            <span>{{ projectInfo.agencyCode }}</span>
          </li>
          <li>
            <span class="label">责任人：</span>
            <span>{{ projectInfo.user }}</span>
          </li>
          <li class="item">
            <span class="label">原单类型：</span>
            <span>{{ projectInfo.type }}</span>
          </li>
          <li class="item">
            <span class="label">风险描述：</span>
            <span>{{ projectInfo.desc }}</span>
          </li>
        </ul>
      </titleBox>
      
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import titleBox from "@/component/titleBox.vue";

export default defineComponent({
  name: "firstTab",
  components: {
    titleBox
  },
  setup() {
    const data = reactive({
      projectInfo: {
        id: "指标调整调剂次数大于三次 年度:2022,预算单位:302003-靖州苗族侗族自治县畜牧水产事务中心,项目：431229210000000001891-工资性支出,功能科目：2130101行政运行,经济科目：30101基本工资,指标金额：6275.81,指标ID：521669856ecd49e0884ef8ff1757b3a3",
        agencyCode: "203027",
        agencyName: "靖州苗族侗族自治县太阳坪乡中学",
        prjCode: "431229220000000059747",
        prjName: "2022年义务教育营养改善计划",
        prjType: "其他运转类",
        user: "黄静坤,黄俊洁,莫登鹏,唐瑞芳,杨慧敏,姚炳元",
        type: "指标信息表",
        desc: "依据相关制度要求，指标调整调剂不应过于频繁，一体化系统中存在指标调整调剂大于三次的指标，请相关股室核实,业务数据信息如下,年度:2022,预算单位:302003-靖州苗族侗族自治县畜牧水产事务中心,项目：431229210000000001891-工资性支出,功能科目：2130101行政运行,经济科目：30101基本工资,指标金额：6275.81"
      }
    })

    return {
      ...toRefs(data)
    }
  },
})
</script>

<style lang="scss" scoped>
.mainContainer{
  height: calc(100vh - 190px);
  .title{
    text-align: center;
    padding: 10px 0 20px;
    font-size: 18px;
    color: #323232;
    font-weight: 600;
    // border-bottom: 2px solid var(--main_color);
  }
  .agencyInfo{
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    li{
      padding: 5px 0;
      flex: 1 0 50%;
      display: flex;
      align-items: baseline;
    }
    .item{
      flex: 1 0 100%;
    }
    span{
      flex: 1;
      color: #323232;
      font-size: 15px;
    }
    .label{
      flex: 0 1 120px;
      text-align: right;
      color: #555;
    }
  }
}
</style>
