<template>
  <div class="secondTab">
    <el-scrollbar ref="containerRef" class="mainContainer">
      <div class="title">
        指标信息表编号：{{ projectInfo.id }}
      </div>
      <ul class="agencyInfo">
        <li>
          <span class="label">本机指标文号：</span>
          <span>{{ projectInfo.docN }}</span>
        </li>
        <li>
          <span class="label">主管处室：</span>
          <span>{{ projectInfo.agencyCode }}</span>
        </li>
        <li>
          <span class="label">单位编码：</span>
          <span>{{ projectInfo.agencyCode }}</span>
        </li>
        <li>
          <span class="label">单位名称：</span>
          <span>{{ projectInfo.agencyName }}</span>
        </li>
        <li>
          <span class="label">项目编码：</span>
          <span>{{ projectInfo.prjCode }}</span>
        </li>
        <li>
          <span class="label">项目名称：</span>
          <span>{{ projectInfo.prjName }}</span>
        </li>
        <li>
          <span class="label">功能科目编码：</span>
          <span>{{ projectInfo.prjType }}</span>
        </li>
        <li>
          <span class="label">功能科目名称：</span>
          <span>{{ projectInfo.prjTotalAmount }}</span>
        </li>
        <li>
          <span class="label">部门经济科目：</span>
          <span>{{ projectInfo.mofDivName }}</span>
        </li>
        <li>
          <span class="label">资金性质：</span>
          <span>{{ projectInfo.mofDivName }}</span>
        </li>
        <li>
          <span class="label">指标来源：</span>
          <span>{{ projectInfo.mofDivName }}</span>
        </li>
        <li>
          <span class="label">指标金额：</span>
          <span>{{ projectInfo.mofDivName }}</span>
        </li>
        <li>
          <span class="label">调剂金额：</span>
          <span>{{ projectInfo.amount }}</span>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: "secondTab",
  setup() {
    const data = reactive({
      projectInfo: {
        id: "bed0bf36-4c7d-4db8-a9c3-63c3d494e862",
        docN: "靖财预单指〔2022〕0001号",
        agencyCode: "203027",
        agencyName: "靖州苗族侗族自治县太阳坪乡中学",
        prjCode: "431229220000000059747",
        prjName: "2022年义务教育营养改善计划",
        prjType: "其他运转类",
        prjTotalAmount: "186454.40",
        mofDivName: "教科文股",
        amount: "6275.81"
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
    border-bottom: 2px solid var(--main_color);
  }
  .agencyInfo{
    width: 80%;
    margin: 0 auto;
    font-size: 15px;
    li{
      display: flex;
      align-items: baseline;
      padding: 5px 0;
      color: #323232;
    }
    .label {
      color: #555;
      flex: 0 1 110px;
      text-align: right;
    }
  }
}
</style>
