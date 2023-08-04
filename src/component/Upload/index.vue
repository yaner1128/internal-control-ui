<template>
  <el-upload
    v-model:file-list="fileList"
    ref="uploadRef"
    class="upload"
    action="#"
    :limit="1"
    :on-exceed="handleExceed"
    :auto-upload="false"
  >
    <template #trigger>
      <el-button>选择文件</el-button>
    </template>
  </el-upload>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue'
import { genFileId } from 'element-plus'

export default defineComponent({
  setup() {
    const data = reactive({
      fileList: []
    })

    const uploadRef = ref();
    const handleExceed = (files: any) => {
      uploadRef.value!.clearFiles();
      const file = files[0];
      file.uid = genFileId();
      uploadRef.value!.handleStart(file);
    }

    return {
      ...toRefs(data),
      handleExceed,
      uploadRef
    }
  },
})
</script>

<style lang="scss" scoped>
.upload{
  width: 100%;
  display: flex;
  .tipBox{
    padding-left: 20px;
    color: #F56C6C;
  }
  /deep/ .el-upload-list{
    flex: 1;
    margin: 0;
  }
  /deep/ .el-upload-list__item{
    margin: 0;
  }
}
</style>
