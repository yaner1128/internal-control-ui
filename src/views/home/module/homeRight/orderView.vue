<template>
  <div class="orderView">
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
  name: "orderView",
  setup() {
    const data = reactive({
      tableData: [
        { title: "测试", date: "2023-07-21" },
        { title: "测试", date: "2023-07-21" },
        { title: "测试", date: "2023-07-21" },
        { title: "测试", date: "2023-07-21" },
        { title: "测试", date: "2023-07-21" },
      ]
    })
    
    return {
      ...toRefs(data)
    }
  },
})
</script>

<style lang="scss" scoped>
.orderView{
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
