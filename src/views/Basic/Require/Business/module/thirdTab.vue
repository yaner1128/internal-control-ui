<template>
  <div class="thirdTab">
    <div class="title">城镇保障性安居工程补助资金管控要求清单</div>
    <div class="btnBox">
      <el-button type="primary" @click="addRow">新增</el-button>
    </div>
    <el-table
      ref="multipleTableRef"
      border
      :data="tableData"
      :header-cell-style="{ height: '36px', backgroundColor: '#f8f8f8' }"
      height="calc(100vh - 295px)"
      :span-method="objectSpanMethod"
      show-overflow-tooltip
    >
      <el-table-column type="index" label="序号" align="center" width="60" />
      <el-table-column prop="name" label="管控事项名称" width="160" />
      <el-table-column prop="name" label="管控要求说明" min-width="200" />
      <el-table-column prop="name" label="需求来源" width="140"  />
      <el-table-column prop="name" label="重点领域" width="140" />
      <el-table-column prop="name" label="核心业务" width="140" />
      <el-table-column prop="name" label="关键环节" width="140" />
      <el-table-column prop="name" label="预警数量" width="100" />
      <el-table-column label="操作" width="120">
        <template #default="{ row }">
          <el-button type="primary" size="small" link @click="editRow(row)">编辑</el-button>
          <el-button type="primary" size="small" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <Pagination align="left" :pageObj="pageObj" :total="total"></Pagination>
    <!-- 表单 -->
    <el-dialog
      v-model="dialogVisible"
      title="配置内控管理任务"
      width="880px"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :before-close="handleClose"
    >
      <el-form ref="formRef" :model="form" label-width="120px">
        <title-box title="基本信息">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="类型：" prop="type" class="item">
                <el-select v-model="form.type" placeholder=" " clearable>
                  <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="对象：" prop="type" class="item">
                <el-select v-model="form.type" placeholder=" " clearable>
                  <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="内容：" prop="name" class="item">
            <el-input v-model="form.name" type="textarea" :rows="2" />
          </el-form-item>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="来源：" prop="type" class="item">
                <el-select v-model="form.type" placeholder=" " clearable>
                  <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="重点领域：" prop="type" class="item">
                <el-select v-model="form.type" placeholder=" " clearable>
                  <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="核心业务：" prop="type" class="item">
                <el-select v-model="form.type" placeholder=" " clearable>
                  <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="关键环节：" prop="type" class="item">
                <el-select v-model="form.type" placeholder=" " clearable>
                  <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="内控目标：" prop="type" class="item">
            <el-select v-model="form.type" placeholder=" " clearable>
              <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
            </el-select>
          </el-form-item>
        </title-box>
        <title-box title="口径信息">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="资金来源：" prop="type" class="item">
                <el-select v-model="form.type" placeholder=" " clearable>
                  <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="资金分配区域：" prop="type" class="item">
                <el-select v-model="form.type" placeholder=" " clearable>
                  <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="承办件来源：" prop="type" class="item">
                <el-select v-model="form.type" placeholder=" " clearable>
                  <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="承办件分类：" prop="type" class="item">
                <el-select v-model="form.type" placeholder=" " clearable>
                  <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="紧急程度：" prop="type" class="item">
                <el-select v-model="form.type" placeholder=" " clearable>
                  <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目性质：" prop="type" class="item">
                <el-select v-model="form.type" placeholder=" " clearable>
                  <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </title-box>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">关 闭</el-button>
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const formRef = ref();
    const data = reactive({
      dialogVisible: false,
      form: {},
      option: [],
      tableData: [
        { name: "项目库管理", type: "办公室及时送达指标文件，收到指标文件后及时建立财政项目库", weight: "" },
        { name: "项目库管理", type: "办公室及时送达指标文件，收到指标文件后及时建立财政项目库", weight: "" },
        { name: "指标管理", type: "及时接收上级文件，并分发预算股和综合股，从而不影响指标的及时下达", weight: "" },
        { name: "指标管理", type: "及时接收上级文件，并分发预算股和综合股，从而不影响指标的及时下达", weight: "" },
        { name: "指标管理", type: "及时接收上级文件，并分发预算股和综合股，从而不影响指标的及时下达", weight: "" },
        { name: "指标管理", type: "及时接收上级文件，并分发预算股和综合股，从而不影响指标的及时下达", weight: "" },
        { name: "计划管理", type: "确保单位申请的用款计划及时且正确下达", weight: "" },
        { name: "项目库管理", type: "确保专项资金使用安全合规", weight: "" },
      ],
      pageObj: {
        page: 0,
        size: 5
      },
      total: 37
    })
    // 新增
    const addRow = () => {
      data.dialogVisible = true;
    }
    const editRow = (row: any) => {
      data.form = { ...row }
      data.dialogVisible = true;
    }
    // 新增提交
    const handleSubmit = () => {
      console.log(data.form)
    }
    // 取消
    const handleClose = () => {
      data.form = {};
      data.dialogVisible = false;
      formRef.value.resetFields();
    }

    // 合并单元格
    const objectSpanMethod = ({ row, rowIndex, column, columnIndex }: any) => {
      const visibleData = data.tableData.slice(0);
      const cellValue = row[column.property]
      if (cellValue && columnIndex === 1) {
        const prevRow = <any>visibleData[rowIndex - 1]
        let nextRow = <any>visibleData[rowIndex + 1]
        if (prevRow && prevRow[column.property] === cellValue) {
          return { rowspan: 0, colspan: 0 }
        } else {
          let countRowspan = 1
          while (nextRow && nextRow[column.property] === cellValue) {
            nextRow = visibleData[++countRowspan + rowIndex]
          }
          if (countRowspan > 1) {
            return { rowspan: countRowspan, colspan: 1 }
          }
        }
      }
    }
    return {
      formRef,
      ...toRefs(data),
      addRow,
      editRow,
      handleSubmit,
      handleClose,
      objectSpanMethod,
    }
  },
})
</script>

<style lang="scss" scoped>
.title{
  color: #323232;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  line-height: 26px;
}
.btnBox{
  margin-bottom: 10px;
}
.el-form{
  .el-input,.el-select{
    width: 100%;
  }
}
</style>
