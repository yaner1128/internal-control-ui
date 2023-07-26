<template>
  <div class="container">
    <div class="boxRow">
      <!-- 单位内控码 -->
      <div class="boxCol" style="width:520px;">
        <div class="boxHeader">
          <div class="boxFlex">
            <img src="@/assets/moreBlack.png" class="boxIcon" alt="" srcset="">
            <span>单位内控码</span>
          </div>
          <!-- 权限设置图标 -->
          <settingIconVue></settingIconVue>
        </div>
        <div class="boxContent"></div>
      </div>
      <!-- 提醒与待办 -->
      <div class="boxCol" style="width: 860px;padding-left: 20px;">
        <div class="boxHeader">
          <div class="boxFlex">
            <img src="@/assets/moreBlack.png" class="boxIcon" alt="" srcset="">
            <span>提醒与待办</span>
          </div>
          <!-- 权限设置图标 -->
          <settingIconVue></settingIconVue>
        </div>
        <div class="boxContent">
          <el-tabs type="border-card">
            <el-tab-pane label="最新提醒">
              <div class="tabContent">
                <el-row v-for="item in data" :key="item" style="margin-bottom: 5px;">
                  <el-col :span="18">
                    <el-tooltip
                      class="box-item"
                      effect="dark"
                      content="Top Left prompts info"
                      placement="top-start"
                    >
                      <div class="textOmit">指标调整调剂次数大于三次 年度:2022,预算单位:302003-靖州苗族侗族自治县畜牧水产事务中心,项目</div>
                    </el-tooltip></el-col>
                  <el-col :span="6" style="text-align: right;">(2023-03-23)</el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待处理风险">
              <div class="tabContent">
                <el-row v-for="item in data" :key="item" style="margin-bottom: 5px;">
                  <el-col :span="18">
                    <el-tooltip
                      class="box-item"
                      effect="dark"
                      content="Top Left prompts info"
                      placement="top-start"
                    >
                      <div class="textOmit" @click="showDetail">三公经费未按规定要求申报，23年度二公经费大于22年度三公经费 单位301001-靖州苗族同族自治县水</div>
                    </el-tooltip></el-col>
                  <el-col :span="6" style="text-align: right;">(2023-03-23)</el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待处理任务">
              <div class="tabContent"></div>
            </el-tab-pane>
          </el-tabs>
          <div class="more">更多>></div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="boxRow">
      <!--  -->
      <div class="boxCol" style="width: 1400px;">
        <div class="boxHeader">
          <div class="boxFlex">
            <img src="@/assets/moreBlack.png" class="boxIcon" alt="" srcset="">
            <span>提醒与待办</span>
          </div>
          <!-- 权限设置图标 -->
          <settingIconVue></settingIconVue>
        </div>
        <div class="boxContent"></div>
      </div>
    </div>
    <!--  -->
    <div class="boxRow">
      <!-- 单位内控码 -->
      <div class="boxCol" style="width:520px;">
        <div class="boxHeader">
          <div class="boxFlex">
            <img src="@/assets/moreBlack.png" class="boxIcon" alt="" srcset="">
            <span>单位内控码</span>
          </div>
          <!-- 权限设置图标 -->
          <settingIconVue></settingIconVue>
        </div>
        <div class="boxContent"></div>
      </div>
      <!-- 提醒与待办 -->
      <div class="boxCol" style="width: 860px;padding-left: 20px;">
        <div class="boxHeader">
          <div class="boxFlex">
            <img src="@/assets/moreBlack.png" class="boxIcon" alt="" srcset="">
            <span>提醒与待办</span>
          </div>
          <!-- 权限设置图标 -->
          <settingIconVue></settingIconVue>
        </div>
        <div class="boxContent"></div>
      </div>
    </div>
    
    <!-- 待办详情 -->
    <pendingPro ref="detailViewRef"></pendingPro>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import { Setting } from "@element-plus/icons-vue";
import settingIconVue from '../common/settingIcon.vue';
import pendingPro from './module/pendingPro/index.vue'

export default defineComponent({
  components: {
    Setting,
    settingIconVue,
    pendingPro
  },
  setup() {
    const data = reactive({
      data:[1,2,3,4,5,6,7]
    })
    const detailViewRef = ref();
    const showDetail = () => {
      detailViewRef.value.openDetails()
    }
    return {
      ...toRefs(data),
      detailViewRef,
      showDetail
    }
  },
})
</script>

<style lang="scss" scoped>
  .container {
    width: 1400px !important;
    margin: 15px auto;
  }
  .boxRow {
    justify-content: center;
    display: flex;
    height: 294px; 
    margin-bottom: 18px;
  }

  .boxContent {
    height: 260px;
    border-top: 0px;
  }

  .tabContent {
    width: 100%;
    height: 190px;
  }
  
  .el-tabs--border-card {
    border: 0;
  }

  .more {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 14px;
  }
</style>
