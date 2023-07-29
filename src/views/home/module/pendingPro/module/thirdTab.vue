<template>
  <div class="secondTab">
    <el-scrollbar ref="containerRef" class="mainContainer">
      <el-checkbox style="float: right;" v-model="isCheck" label="过滤查看问题信息" @change="changeCheck" />
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        height="calc(100vh - 230px)"
        :header-cell-style="{ height: '36px', backgroundColor: '#F5F5F5', color: '#555' }"
      >
        <el-table-column type="index" label="序号" width="60" />
        <el-table-column prop="name" label="处理时间" width="140" />
        <el-table-column prop="name" label="处理单位" width="140" />
        <el-table-column prop="date" label="处理人" width="120" />
        <el-table-column prop="remark" label="处理动作" width="100" />
        <el-table-column prop="remark" label="描述" min-width="120" />
        <el-table-column prop="remark" label="处理意见" min-width="120" />
      </el-table>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "thirdTab",
  setup() {
    const data = reactive({
      isCheck: true,
      tableData: [{},{},{},{},{},{}],
    });

    // 过滤查看问题信息
    const changeCheck = (val: any) => {
      console.log("触发过滤", val)
    }

    return {
      ...toRefs(data),
      changeCheck
    };
  },
});
</script>

<style lang="scss" scoped>
.mainContainer {
  height: calc(100vh - 190px);
}
</style>
