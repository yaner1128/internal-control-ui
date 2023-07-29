<template>
  <el-tabs type="border-card">
    <el-tab-pane label="最新提醒">
      <el-table
        :data="tableData"
        :show-header="false"
        height="160px"
        :highlight-current-row="true"
        @row-click="showRemind"
      >
        <el-table-column prop="title" label="标题" show-overflow-tooltip />
        <el-table-column prop="date" label="日期" align="center" width="140px" />
      </el-table>
      <div class="more">更多<el-icon><DArrowRight /></el-icon></div>
    </el-tab-pane>
    <el-tab-pane label="待处理风险">
      <el-table
        :data="tableData"
        :show-header="false"
        height="160px"
        :highlight-current-row="true"
        @row-click="showDetail"
      >
        <el-table-column prop="title" label="标题" show-overflow-tooltip />
        <el-table-column prop="date" label="日期" align="center" width="140px" />
      </el-table>
      <div class="more">更多<el-icon><DArrowRight /></el-icon></div>
    </el-tab-pane>
    <el-tab-pane label="待处理任务">
      <el-table :data="tableData" :show-header="false" height="160px" :highlight-current-row="true">
        <el-table-column prop="title" label="标题" show-overflow-tooltip />
        <el-table-column prop="date" label="日期" align="center" width="140px" />
      </el-table>
      <div class="more">更多<el-icon><DArrowRight /></el-icon></div>
    </el-tab-pane>
    <!-- 提醒详情 -->
    <latestReminder ref="latestReminderRef"></latestReminder>
    <!-- 待办详情 -->
    <pendingPro ref="detailViewRef"></pendingPro>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue';
import { DArrowRight } from "@element-plus/icons-vue";
import pendingPro from '../pendingPro/index.vue';
import latestReminder from '../latestReminder/index.vue';

export default defineComponent({
  components: {
    pendingPro,
    latestReminder,
    DArrowRight
  },
  setup() {
    const data = reactive({
      tableData: [
        { title: "指标调整调剂次数大于三次 年度:2022,预算单位:302003-靖州苗族侗族自治县畜牧水产事务中心,项目：431229220000000007229-住房公积金,功能科目：2210201住房公积金,经济科目：30113住房公积金,指标金额：14939.76,指标ID：7e45e49c8f614d48a63c1104bba2dc3a", date: "2023-03-23", active: 1 },
        { title: "测试", date: "2023-03-23", active: 2 },
        { title: "测试", date: "2023-03-23", active: 3 },
        { title: "测试", date: "2023-03-23", active: 4 },
        { title: "测试", date: "2023-03-23", active: 5 }
      ]
    })
    const latestReminderRef = ref();
    const showRemind = () => {
      latestReminderRef.value.openDetails();
    }
    const detailViewRef = ref();
    const showDetail = (row: any) => {
      detailViewRef.value.openDetails(row.active)
    }
    return {
      ...toRefs(data),
      latestReminderRef,
      showRemind,
      detailViewRef,
      showDetail
    }
  },
})
</script>

<style lang="scss" scoped>
/deep/ .el-tabs__content{
  overflow: inherit !important;
}
.more{
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -40px;
  right: 0;
  font-size: 14px;
  color: #555;
  cursor: pointer;
}
.more:hover{
  color: var(--main_color);
}
</style>
