<template>
  <el-dialog
    :close-on-click-modal="false"
    :append-to-body="true"
    v-model="dialogFormVisible"
    :lock-scroll="true"
    width="1200px"
    title="更多待处理风险"
  >
    <el-table
      :data="tableData"
      :show-header="false"
      height="300px"
      :highlight-current-row="true"
      @row-click="showRemind"
    >
      <el-table-column prop="title" label="标题" show-overflow-tooltip />
      <el-table-column prop="date" label="日期" align="center" width="140px" />
    </el-table>
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="btnCancel">取消</el-button>
        <el-button type="primary" @click="btnSumbit">确认</el-button>
      </span>
    </template>
    <!-- 待办详情 -->
    <pendingPro ref="detailViewRef"></pendingPro>
  </el-dialog>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import pendingPro from '../../pendingPro/index.vue';

export default defineComponent({
  name: "moreRisk",
  emits: ["reload"],
  components: {
    pendingPro
  },
  props: {
    proId: {
      type: String,
    },
  },
  setup(props, {  emit }) {
    const data = reactive({
      dialogFormVisible: false,
      loading: false,
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableData: <any>[
        { title: "指标调整调剂次数大于三次 年度:2022,预算单位:302003-靖州苗族侗族自治县畜牧水产事务中心,项目：431229220000000007229-住房公积金,功能科目：2210201住房公积金,经济科目：30113住房公积金,指标金额：14939.76,指标ID：7e45e49c8f614d48a63c1104bba2dc3a", date: "2023-03-23", active: 1 },
        { title: "测试", date: "2023-03-23", active: 2 },
        { title: "测试", date: "2023-03-23", active: 3 },
        { title: "测试", date: "2023-03-23", active: 4 },
        { title: "测试", date: "2023-03-23", active: 5 }
      ],
    });
    // 确定
    const btnSumbit = () => {
      btnCancel()
    }

    //  取消
    const btnCancel = () => {
      // data.tableData = []
      data.dialogFormVisible = false
    }

    // 打开
    const open = () => {
      data.dialogFormVisible = true;
    }

    // 详情
    const detailViewRef = ref();
    const showRemind = () => {
      detailViewRef.value.openDetails();
    }

    onMounted(() => {
    });
    return {
      ...toRefs(data),
      open,
      showRemind,
      detailViewRef,
      btnCancel,
      btnSumbit
    };
  },
});
</script>

<style lang="scss" scoped>
/* 禁用全选 */
/deep/ .el-table__header .el-table-column--selection {
  text-indent: -999999px;
}
</style>
