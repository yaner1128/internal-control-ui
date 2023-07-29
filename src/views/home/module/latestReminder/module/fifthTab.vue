<template>
  <div class="secondTab">
    <el-scrollbar ref="containerRef" class="mainContainer">
      <div class="btnBox" style="margin-bottom: 10px;">
        <el-button type="success" @click="addMessage">添加备注信息</el-button>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        height="calc(100vh - 230px)"
        :header-cell-style="{ height: '36px', backgroundColor: '#F5F5F5', color: '#555' }"
      >
        <el-table-column type="selection" width="60" />
        <el-table-column prop="name" label="备注时间" width="120" />
        <el-table-column prop="name" label="单位" width="160" />
        <el-table-column prop="date" label="备注人" width="120" />
        <el-table-column prop="remark" label="备注说明" />
      </el-table>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "fifthTab",
  setup() {
    const data = reactive({
      isCheck: true,
      tableData: [{},{},{},{},{},{}],
    });

    // 新增
    const addMessage = (val: any) => {

    }

    return {
      ...toRefs(data),
      addMessage
    };
  },
});
</script>

<style lang="scss" scoped>
.mainContainer {
  height: calc(100vh - 190px);
}
</style>
