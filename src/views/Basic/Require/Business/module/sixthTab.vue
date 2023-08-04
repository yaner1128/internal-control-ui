<template>
  <div class="sixthTab">
    <div class="btnBox">
      <el-button type="primary" @click="addEvent">新增</el-button>
    </div>
    <el-table
      ref="multipleTableRef"
      border
      :data="tableData"
      :header-cell-style="{ height: '36px', backgroundColor: '#F5F5F5', color: '#666' }"
      height="calc(100vh - 210px)"
    >
      <el-table-column type="index" label="序号" align="center" width="60" />
      <el-table-column prop="name" label="触发方式" width="120" show-overflow-tooltip />
      <el-table-column prop="name" label="触发条件" width="120" show-overflow-tooltip />
      <el-table-column prop="name" label="触发任务" width="120" show-overflow-tooltip />
      <el-table-column prop="name" label="控制类型" width="120" show-overflow-tooltip />
      <el-table-column prop="name" label="任务标题" min-width="120" show-overflow-tooltip />
      <el-table-column prop="name" label="任务内容" min-width="140" show-overflow-tooltip />
      <el-table-column label="操作" width="60" fixed="right">
        <template #default="{ row }">
          <el-button type="primary" size="small" link @click="deleteEvent(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表单 -->
    <el-dialog
      v-model="dialogVisible"
      title="配置内控管理任务"
      width="880px"
      top="5vh"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form ref="formRef" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="控制类型：" prop="type" class="item">
          <el-select v-model="form.type" placeholder=" " clearable>
            <el-option v-for="(item, index) in option1" :key="index" :label="item.label" :value="item.label" />
          </el-select>
        </el-form-item>
        <el-form-item label="触发方式：" prop="way" class="item">
          <el-select v-model="form.way" placeholder=" " clearable>
            <el-option v-for="(item, index) in option2" :key="index" :label="item.label" :value="item.label" />
          </el-select>
        </el-form-item>
        <el-form-item label="触发条件：" prop="title" class="item">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="触发任务：" prop="code" class="item">
          <el-input v-model="form.code" />
        </el-form-item>
        <el-form-item label="任务标题：" prop="version">
          <el-input v-model="form.version" />
        </el-form-item>
        <el-form-item label="任务内容：" prop="type">
          <el-input v-model="form.type" type="textarea" :rows="2" />
        </el-form-item>
      </el-form>
      <div class="btnBox">
        <el-button type="primary" @click="addRow">新增</el-button>
      </div>
      <el-table
        ref="multipleTableRef"
        border
        :data="departData"
        :header-cell-style="{ height: '36px', backgroundColor: '#F5F5F5', color: '#666' }"
        height="400px"
      >
        <el-table-column type="index" label="序号" align="center" width="60" />
        <el-table-column prop="name" label="科室" />
        <el-table-column prop="name" label="岗位" />
        <el-table-column prop="name" label="人员" />
        <el-table-column label="操作" width="70px">
          <template #default="{ row }">
            <el-button size="small" type="primary" link @click="deleteRow(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="taskDialogClose">关 闭</el-button>
          <el-button type="primary" @click="taskDialogSubmit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 表单 -->
    <el-dialog
      v-model="addVisible"
      title="新增科室"
      width="600px"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form ref="addFormRef" :model="addForm" :rules="rules" label-width="100px">
        <el-form-item label="科室：" prop="title">
          <el-input v-model="addForm.title" />
        </el-form-item>
        <el-form-item label="岗位：" prop="code">
          <el-input v-model="addForm.code" />
        </el-form-item>
        <el-form-item label="人员：" prop="version">
          <el-input v-model="addForm.version" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addDialogClose">关 闭</el-button>
          <el-button type="primary" @click="addDialogSubmit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const data = reactive({
      tableData: [{}, {}, {}],
      dialogVisible: false,
      form: {},
      option1: [
        { label: "预防性控制" },
        { label: "指导性控制" },
        { label: "纠正性控制" },
        { label: "监督督办" },
        { label: "业务内控提示" },
        { label: "检查性控制" },
        { label: "时候评价" }
      ],
      option2: [
        { label: "风险问题发生时触发" },
        { label: "按时间计划触发" },
        { label: "按流程环节触发" }
      ],
      departData: [{}],
      addVisible: false,
      addForm: {},
      handleClose: () => {
        data.dialogVisible = false;
      }
    })

    const deleteEvent = (row: any) => {
      console.log(row)
    }
    // 配置任务弹窗关闭
    const formRef = ref();
    const taskDialogClose = () => {
      data.dialogVisible = false;
      formRef.value.resetFields();
    }
    // 配置任务弹窗提交
    const taskDialogSubmit = () => {

      taskDialogClose();
    }
    // 新增
    const addEvent = () => {
      data.dialogVisible = true;
    }
    // 删除科室数据
    const deleteRow = (row: any) => {
      console.log(row)
    }

    // 新增科室
    const addFormRef = ref();
    const addRow = () => {
      data.addVisible = true;
    }
    // 关闭科室弹窗
    const addDialogClose = () => {
      addFormRef.value.resetFields();
      data.addVisible = false;
    }
    // 科室提交
    const addDialogSubmit = () => {
      
      addDialogClose();
    }

    return {
      ...toRefs(data),
      addEvent,
      deleteEvent,
      deleteRow,
      formRef,
      taskDialogClose,
      taskDialogSubmit,
      addRow,
      addFormRef,
      addDialogClose,
      addDialogSubmit
    }
  },
})
</script>

<style lang="scss" scoped>
.btnBox{
  margin-bottom: 10px;
}
.el-select{
  width: 100%;
}
.el-form{
  display: flex;
  flex-wrap: wrap;
  .el-form-item{
    flex: 1 0 100%;
  }
  .item{
    flex: 1 0 50%;
  }
}
</style>
