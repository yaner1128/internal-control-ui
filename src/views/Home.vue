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
          <el-icon><Setting /></el-icon>
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
          <el-icon><Setting /></el-icon>
        </div>
        <div class="boxContent"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Setting } from "@element-plus/icons-vue";

export default defineComponent({
  components: {
    Setting
  },
  setup() {
    
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
</style>
