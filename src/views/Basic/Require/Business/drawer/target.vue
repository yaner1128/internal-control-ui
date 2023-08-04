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
    <el-row :gutter="20">
      <el-col :span="5">
        <el-scrollbar height="calc(100vh - 210px)">
          <el-tree :data="treeData" :props="defaultProps"/>
        </el-scrollbar>
      </el-col>
      <el-col :span="19">
        <!-- 查询 -->
        <el-form ref="formRef" :model="queryParams" :inline="true">
          <el-form-item label="管控目标名称：" prop="name">
            <el-input v-model="queryParams.name" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
        <div class="btnBox">
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </div>
        <el-table
          ref="tableRef"
          border
          :data="tableData"
          :header-cell-style="{ height: '36px', backgroundColor: '#f8f8f8' }"
          height="calc(100vh - 230px)"
          @row-click="rowClick"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="50" />
          <el-table-column type="index" label="序号" width="60" />
          <el-table-column prop="name" label="业务事项" width="140" show-overflow-tooltip />
          <el-table-column prop="type" label="目标类型" width="100" show-overflow-tooltip />
          <el-table-column prop="desc" label="管控目标" min-width="220" show-overflow-tooltip />
          <el-table-column label="操作" width="100">
            <template #default>
              <el-button type="primary" size="small" link>编辑</el-button>
              <el-button type="primary" size="small" link>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <div class="btnCenterBox">
        <el-button type="" @click="cancelEvent">取 消</el-button>
        <el-button type="primary" @click="submitEvent">确 认</el-button>
      </div>
    </el-row>
  </el-drawer>
  <el-dialog
    v-model="dialogVisible"
    title="新增管控目标"
    width="580px"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form ref="formRef" :model="form" label-width="100px">
      <el-form-item label="目标类型：" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="业务事项：" prop="title">
        <el-select v-model="form.region" placeholder=" " clearable>
          <el-option label="项目库管理" value="项目库管理" />
          <el-option label="指标管理" value="指标管理" />
          <el-option label="计划管理" value="计划管理" />
          <el-option label="支付申请管理" value="支付申请管理" />
        </el-select>
      </el-form-item>
      <el-form-item label="管控目标：" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="描述：" prop="title">
        <el-input v-model="form.title" type="textarea" :rows="2" />
      </el-form-item>
      <el-form-item label="排序：" prop="num">
        <el-input-number v-model="form.num" :min="0" controls-position="right" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="" @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
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
      treeData: [
        { label: '业务事项', children: [
          { label: '工作效率' },
          { label: '管理效率' },
          { label: '规范要求' }
        ]},
        { label: '财政资金', children: [
          { label: '工作效率' },
          { label: '管理效率' },
          { label: '规范要求' }
        ]},
      ],
      queryParams: {
        name: ""
      },
      multipleSelection: [],
      tableData: [{
        name: "大中型水库移民后期扶持项目资金", type: "规范要求", desc: "各级财政部门和水利水电工程移民行政管理机构应当加强项目资金绩效管理，建立健全全过程预算绩效管理机制，提高财政资金使用效益。"
      }],
      form: {},
      dialogVisible: false,
      handleAdd: () => {
        data.dialogVisible = true;
      },
      handleClose: () => {
        data.dialogVisible = false;
        formRef.value.resetFields();
      },
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
      ElMessage.success("新增内控目标成功！");
      setTimeout(() => {
        data.cancelEvent();
      }, 300)
    }
    // 新增管控目标
    const handleSubmit = () => {

      data.handleClose();
    }

    return {
      tableRef,
      ...toRefs(data),
      rowClick,
      handleSelectionChange,
      submitEvent,
      formRef,
      handleSubmit
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
