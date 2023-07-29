<template>
  <div class="meeting">
    <el-table
      :data="tableData"
      :show-header="false"
      height="160px"
      :highlight-current-row="true"
    >
      <el-table-column prop="title" label="标题"  />
      <el-table-column prop="date" label="日期" align="center" width="140px" />
    </el-table>
    <div class="more">查看更多...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: "meeting",
  setup() {
    const data = reactive({
      tableData: []
    })
    
    return {
      ...toRefs(data)
    }
  },
})
</script>

<style lang="scss" scoped>
.meeting{
  height: 190px;
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
