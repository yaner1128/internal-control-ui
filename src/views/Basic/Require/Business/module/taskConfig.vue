<template>
  <el-drawer
    v-model="visible"
    title="设定内控任务"
    direction="rtl"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    size="70%"
  >
    <el-tabs type="border-card">
      <el-tab-pane label="任务描述">
        <el-scrollbar height="calc(100vh - 170px)">
          <titleBox title="基本信息">
            <ul class="basicInfo">
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
                <span class="label">项目类别：</span>
                <span>{{ projectInfo.prjType }}</span>
              </li>
              <li>
                <span class="label">项目总额：</span>
                <span>{{ projectInfo.prjTotalAmount }}</span>
              </li>
              <li>
                <span class="label">业务股室：</span>
                <span>{{ projectInfo.mofDivName }}</span>
              </li>
            </ul>
          </titleBox>
          <titleBox title="适用范围">
            <ul class="rangeInfo">
              <li>
                <span class="label">业务单位：</span>
                <span>{{ projectInfo.agencyCode }}</span>
              </li>
              <li>
                <span class="label">预算单位：</span>
                <span>{{ projectInfo.agencyName }}</span>
              </li>
              <li>
                <span class="label">预算项目：</span>
                <span>{{ projectInfo.prjCode }}</span>
              </li>
              <li>
                <span class="label">经济分类：</span>
                <span>{{ projectInfo.prjName }}</span>
              </li>
              <li>
                <span class="label">功能分类：</span>
                <span>{{ projectInfo.prjType }}</span>
              </li>
              <li>
                <span class="label">资金性质：</span>
                <span>{{ projectInfo.prjTotalAmount }}</span>
              </li>
            </ul>
          </titleBox>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="管控目标">
        <secondTab></secondTab>
      </el-tab-pane>
      <el-tab-pane label="管控需求">
        <thirdTab></thirdTab>
      </el-tab-pane>
      <el-tab-pane label="业务流程">
        <fourthTab></fourthTab>
      </el-tab-pane>
      <el-tab-pane label="风险清单">
        <fifthTab></fifthTab>
      </el-tab-pane>
      <el-tab-pane label="内控管理任务">
        <sixthTab></sixthTab>
      </el-tab-pane>
    </el-tabs>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import sixthTab from './sixthTab.vue'
import fifthTab from './fifthTab.vue'
import fourthTab from './fourthTab.vue'
import thirdTab from './thirdTab.vue'
import secondTab from './secondTab.vue'

export default defineComponent({
  components: {
    secondTab,
    thirdTab,
    fourthTab,
    fifthTab,
    sixthTab
  },
  setup() {
    const data = reactive({
      visible: false,
      projectInfo: {
        id: "bed0bf36-4c7d-4db8-a9c3-63c3d494e862",
        agencyCode: "203027",
        agencyName: "靖州苗族侗族自治县太阳坪乡中学",
        prjCode: "431229220000000059747",
        prjName: "2022年义务教育营养改善计划",
        prjType: "其他运转类",
        prjTotalAmount: "186454.40",
        mofDivName: "教科文股"
      }
    })

    const open = () => {
      data.visible = true;
    }

    return {
      ...toRefs(data),
      open
    }
  },
})
</script>

<style lang="scss" scoped>
.basicInfo{
  display: flex;
  flex-direction: wrap;
  flex-wrap: wrap;
  li{
    padding: 8px;
    flex: 1 0 50%;
    font-size: 15px;
  }
  .label{
    font-weight: 500;
    color: #323232;
  }
}
.rangeInfo{
  display: flex;
  flex-direction: wrap;
  flex-wrap: wrap;
  li{
    padding: 8px;
    flex: 1 0 100%;
    font-size: 15px;
  }
  .label{
    font-weight: 500;
    color: #323232;
  }
}
.btnFlexBox{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.btnBox{
  margin-bottom: 10px;
}
</style>
