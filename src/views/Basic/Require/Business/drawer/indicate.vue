<template>
  <el-drawer
    v-model="targetVisible"
    title="新增管控目标"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    direction="rtl"
    size="50%"
    :before-close="cancelEvent"
  >
    <el-table
      ref="tableRef"
      border
      :data="tableData"
      :header-cell-style="{ height: '36px', backgroundColor: '#f8f8f8' }"
      height="calc(100vh - 140px)"
      @row-click="rowClick"
      @selection-change="handleSelectionChange"
      row-key="id"
      default-expand-all
    >
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column prop="name" label="考评指标" min-width="220" show-overflow-tooltip />
      <el-table-column prop="desc" label="重点说明" min-width="220" show-overflow-tooltip />
      <el-table-column prop="weight" label="权重(%)" width="100" />
    </el-table>
    <div class="btnCenterBox">
      <el-button type="" @click="cancelEvent">取 消</el-button>
      <el-button type="primary" @click="submitEvent">确 认</el-button>
    </div>
  </el-drawer>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus';
import { defineComponent, reactive, toRefs, ref } from 'vue'

export default defineComponent({
  setup() {
    const tableRef = ref();
    const formRef = ref();
    const data = reactive({
      targetVisible: false,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      multipleSelection: [],
      tableData: [
        { id: 3, date: '2016-05-01', name: '财政内控指标', address: 'No. 189, Grove St, Los Angeles',
          children: [
            { id: 30, date: '2016-05-01', name: '内控制度建设情况', address: 'No. 189, Grove St, Los Angeles' },
            { id: 31, date: '2016-05-01', name: '专项风险防控情况', address: 'No. 189, Grove St, Los Angeles',
              children: [
                { id: 32, date: '2016-05-01', name: '政策制定', address: 'No. 189, Grove St, Los Angeles' },
                { id: 33, date: '2016-05-01', name: '预算编制', address: 'No. 189, Grove St, Los Angeles' },
            ]},
            { id: 34, date: '2016-05-01', name: '内控评价指数', address: 'No. 189, Grove St, Los Angeles' },
          ],
        }
      ],
      open: () => {
        data.targetVisible = true;
      },
      cancelEvent: () => {
        data.targetVisible = false;
        data.multipleSelection = [];
        tableRef.value.clearSelection();
      }
    })
    // 行点击
    const rowClick = (row: any) => {
      if(!row.disabled){
        tableRef.value.toggleRowSelection(row);
      }
    }
    const handleSelectionChange = (val: any) => {
      data.multipleSelection = val; 
    }
    // 提交
    const submitEvent = () => {
      console.log("multipleSelection", data.multipleSelection)
      if(data.multipleSelection.length == 0) {
        ElMessage.warning("请先选择数据！")
        return;
      }
      ElMessage.success("新增考评指标成功！");
      setTimeout(() => {
        data.cancelEvent();
      }, 300)
    }

    return {
      tableRef,
      ...toRefs(data),
      rowClick,
      handleSelectionChange,
      submitEvent
    }
  },
})
</script>

<style lang="scss" scoped>
.btnBox{
  margin-bottom: 10px;
}
.btnCenterBox{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
}
.el-input-number, .el-select{
  width: 100%;
}
</style>
