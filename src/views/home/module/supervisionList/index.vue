<template>
  <div class="supervisionList">
    <el-table :data="tableData" height="193px">
      <el-table-column type="index" label="序号" width="60px" />
      <el-table-column prop="date" label="督办时间" width="140px" />
      <el-table-column prop="date" label="督办事项" width="140px" />
      <el-table-column prop="date" label="督办次数" width="140px" />
      <el-table-column prop="date" label="截止时间" width="140px" />
      <el-table-column prop="date" label="业务环节" width="140px" />
      <el-table-column prop="date" label="发起人" width="140px" />
      <el-table-column prop="date" label="责任人" width="140px" />
      <el-table-column prop="date" label="事项类型" width="140px" />
      <el-table-column prop="date" label="反馈情况" width="140px" />
      <el-table-column prop="date" label="办理状态" width="140px" />
      <el-table-column prop="date" label="操作" width="100px" fixed="right">
        <template #default>
          <el-button type="primary" link>督办</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="more">查看更多...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  name: "supervisionList",
  setup() {
    const data = reactive({
      tableData: [{},{},{},{},{}]
    })
    
    return {
      ...toRefs(data)
    }
  },
})
</script>

<style lang="scss" scoped>
.supervisionList{
  height: 223px;
  position: relative;
}
.more{
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #409EFF;
  font-size: 15px;
  cursor: pointer;
}
</style>
