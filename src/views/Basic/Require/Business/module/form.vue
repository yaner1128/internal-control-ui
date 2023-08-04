<template>
  <el-dialog
    v-model="dialogVisible"
    title="设定内控任务"
    width="880px"
    top="5vh"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-scrollbar height="calc(100vh - 260px)">
      <el-form ref="formRef" :model="form" :rules="rules" label-width="110px">
        <p>基本信息</p>
        <el-form-item label="业务名称：" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="年度：" class="item" prop="fiscalYear">
          <el-date-picker v-model="form.fiscalYear" type="date" value-format="YYYY-MM-DD" placeholder=" " />
        </el-form-item>
        <el-form-item label="内控编码：" class="item" prop="code">
          <el-input v-model="form.code" />
        </el-form-item>
        <el-form-item label="业务类型：" class="item" prop="type">
          <el-select v-model="form.type" placeholder=" " clearable>
            <el-option label="特办事项内控任务" value="特办事项内控任务" />
            <el-option label="重点事项内控任务" value="重点事项内控任务" />
            <el-option label="预决算信息公开内控任务" value="预决算信息公开内控任务" />
            <el-option label="一般事项内控任务" value="一般事项内控任务" />
            <el-option label="专项资金内控任务" value="专项资金内控任务" />
          </el-select>
        </el-form-item>
        <el-form-item label="业务类别：" class="item" prop="type">
          <el-select v-model="form.type" placeholder=" " clearable>
            <el-option label="资金下达" value="资金下达" />
            <el-option label="资金分配" value="资金分配" />
            <el-option label="资金拨付" value="资金拨付" />
            <el-option label="待办资金(全程)" value="待办资金(全程)" />
            <el-option label="专项资金(全程)" value="专项资金(全程)" />
          </el-select>
        </el-form-item>
        <el-form-item label="主管科室：" class="item" prop="title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="主管责任人：" class="item">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="经办科室：" class="item" prop="title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="牵头单位：" class="item" prop="title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="任务描述：" prop="desc">
          <el-input v-model="form.desc" type="textarea" :rows="2" />
        </el-form-item>
        <el-form-item label="排序：" class="item" prop="sort">
          <el-input-number v-model="form.sort" :min="0" controls-position="right" />
        </el-form-item>
        <el-form-item label="内控级别：" class="item" prop="version">
          <el-input v-model="form.version" />
        </el-form-item>
        <p>适用范围</p>
        <el-form-item label="业务科室：" class="item" prop="type">
          <el-input v-model="form.type" />
        </el-form-item>
        <el-form-item label="资金性质：" class="item" prop="type">
          <el-input v-model="form.type" />
        </el-form-item>
        <el-form-item label="预算单位：" class="item" prop="type">
          <el-input v-model="form.type" />
        </el-form-item>
        <el-form-item label="功能分类：" class="item" prop="type">
          <el-input v-model="form.type" />
        </el-form-item>
        <el-form-item label="预算项目：" class="item" prop="type">
          <el-input v-model="form.type" />
        </el-form-item>
        <el-form-item label="经济分类：" class="item" prop="type">
          <el-input v-model="form.type" />
        </el-form-item>
        <p>上传附件</p>
        <el-form-item label="" prop="file" class="file">
          <span class="label">1、内控执行表(签字)：</span>
          <upload></upload>
        </el-form-item>
        <el-form-item label="" prop="file" class="file">
          <span class="label">2、内控目标清单：</span>
          <upload></upload>
        </el-form-item>
        <el-form-item label="" prop="file" class="file">
          <span class="label">3、管控事项清单：</span>
          <upload></upload>
        </el-form-item>
        <el-form-item label="" prop="file" class="file">
          <span class="label">4、管控风险清单：</span>
          <upload></upload>
        </el-form-item>
        <el-form-item label="" prop="file" class="file">
          <span class="label">5、依据材料审核要求：</span>
          <upload></upload>
        </el-form-item>
        <el-form-item label="" prop="file" class="file">
          <span class="label">6、岗位职责人员表：</span>
          <upload></upload>
        </el-form-item>
      </el-form>
    </el-scrollbar>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="clearEvent">清 空</el-button>
        <el-button type="primary">保 存</el-button>
        <el-button type="primary" @click="submitEvent">提 交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { genFileId } from 'element-plus'
import upload from '@/component/Upload/index.vue'

export default defineComponent({
  components: {
    upload
  },
  setup() {
    const formRef = ref();
    const data = reactive({
      dialogVisible: false,
      form: {
        code: "财政监督股[2023]000号",
        version: "V001",
        type: ""
      },
      rules: {
        name: [{ required: true, message: '请输入业务名称', trigger: 'blur' }],
        code: [{ required: true, message: '请输入内控编码', trigger: 'blur' }],
        key: [{ required: true, message: '请输入关键字', trigger: 'blur' }],
        sort: [{ required: true, message: '请输入排序号', trigger: 'blur' }],
        file: [{ required: true, message: '请上传文件', trigger: 'blur' }]
      },
      open: (type?: any) => {
        data.dialogVisible = true;
        data.form.type = type;
      },
      handleClose: () => {
        formRef.value.resetFields();
        data.dialogVisible = false;
      }
    })
    // 清空
    const clearEvent = () => {
      formRef.value.resetFields();
    }
    // 提交
    const submitEvent = () => {
      formRef.value.validate((valid: any) => {
        if(valid) {

        }
      })
    }

    return {
      ...toRefs(data),
      formRef,
      submitEvent,
      clearEvent
    }
  },
})
</script>

<style lang="scss" scoped>
.el-form{
  display: flex;
  flex-wrap: wrap;
  p{
    flex: 1 0 100%;
    font-size: 15px;
    font-weight: 800;
  }
  .el-form-item{
    flex: 1 0 100%;
  }
  /deep/ .el-form-item__label{
    font-weight: 500;
  }
  .item{
    flex: 0 1 50%;
  }
  .el-input-number,.el-input,.el-select{
    width: 100%;
  }
  /deep/ .el-input.el-date-editor{
    width: 100% !important;
  }
}
.file{
  /deep/ .el-form-item__content{
    flex-wrap: nowrap;
  }
  .label{
    flex: 1 0 150px;
  }
}
</style>
