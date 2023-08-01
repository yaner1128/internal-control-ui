<template>
  <el-dialog
    v-model="dialogVisible"
    title="条目基本信息"
    width="880px"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form ref="formRef" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="标题：" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="编号：" class="item" prop="code">
        <el-input v-model="form.code" disabled />
      </el-form-item>
      <el-form-item label="版本：" class="item" prop="version">
        <el-input v-model="form.version" disabled />
      </el-form-item>
      <el-form-item label="知识库类型：" class="item" prop="type">
        <el-input v-model="form.type" disabled />
      </el-form-item>
      <el-form-item label="关键字：" class="item" prop="key">
        <el-input v-model="form.key" />
      </el-form-item>
      <el-form-item label="摘要" prop="desc">
        <el-input v-model="form.desc" type="textarea" :rows="2" />
      </el-form-item>
      <el-form-item label="正文：" prop="file">
        <el-upload
          v-model:file-list="fileList1"
          ref="uploadRef1"
          class="upload"
          action="#"
          :limit="1"
          :on-exceed="handleExceed1"
          :auto-upload="false"
        >
          <template #trigger>
            <el-button>选择文件</el-button>
          </template>
          <template #default>
            <span class="tipBox">Ps：gif, jpg, jpeg, png, bmp, rar, zip, pdf, pdfx, txt, csv, xls, xlsx, doc, docx</span>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="制度文件关联：">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="上传附件：">
        <el-upload
          v-model:file-list="fileList2"
          ref="uploadRef2"
          class="upload"
          action="#"
          :limit="1"
          :on-exceed="handleExceed2"
          :auto-upload="false"
        >
          <template #trigger>
            <el-button>选择文件</el-button>
          </template>
          <template #default>
            <span class="tipBox">Ps：gif, jpg, jpeg, png, bmp, rar, zip, pdf, pdfx, txt, csv, xls, xlsx, doc, docx</span>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="附件说明：">
        <el-input v-model="form.desc" type="textarea" :rows="2" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submitEvent">提 交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { genFileId } from 'element-plus'

export default defineComponent({
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
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        type: [{ required: true, message: '请输入知识库类型', trigger: 'blur' }],
        key: [{ required: true, message: '请输入关键字', trigger: 'blur' }],
        file: [{ required: true, message: '请上传文件', trigger: 'blur' }]
      },
      open: (type?: any) => {
        data.dialogVisible = true;
        data.form.type = type;
      },
      handleClose: () => {
        formRef.value.resetFields();
        data.dialogVisible = false;
      },
      fileList1: [],
      fileList2: []
    })

    const uploadRef1 = ref();
    const uploadRef2 = ref();
    const handleExceed1 = (files: any) => {
      handleExceed(files, uploadRef1)
    }
    const handleExceed2 = (files: any) => {
      handleExceed(files, uploadRef2)
    }
    const handleExceed = (files: any, Ele: any) => {
      Ele.value!.clearFiles();
      const file = files[0];
      file.uid = genFileId();
      Ele.value!.handleStart(file);
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
      handleExceed1,
      handleExceed2,
      uploadRef1,
      uploadRef2,
      submitEvent
    }
  },
})
</script>

<style lang="scss" scoped>
.el-form{
  display: flex;
  flex-wrap: wrap;
  .el-form-item{
    flex: 1 0 100%;
  }
  .item{
    flex: 0 1 50%;
  }
}
.upload{
  width: 100%;
  .tipBox{
    padding-left: 20px;
    color: #F56C6C;
  }
}
</style>
