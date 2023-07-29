<template>
  <div class="secondTab">
    <el-scrollbar ref="containerRef" class="mainContainer">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        height="calc(100vh - 235px)"
        :header-cell-style="{ height: '36px', backgroundColor: '#F5F5F5', color: '#555' }"
      >
        <el-table-column type="index" label="序号" width="60" />
        <el-table-column prop="name" label="督办时间" width="140" />
        <el-table-column prop="name" label="督办科室" width="140" />
        <el-table-column prop="date" label="督办人" width="120" />
        <el-table-column prop="remark" label="督办意见" min-width="120" />
        <el-table-column prop="remark" label="督办内容" min-width="120" />
        <el-table-column prop="remark" label="督办级别" width="100" />
      </el-table>
      <div class="btnBox">
        <el-button type="success" @click="initiateSuperEvent">发起督办</el-button>
      </div>

      <!-- 发起督办弹窗 -->
      <el-dialog
        v-model="dialogVisible"
        title="督办"
        width="800px"
        :before-close="handleClose"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
      >
        <el-form ref="formRef" class="inputInfoBox" :model="form" label-width="110px">
          <el-form-item label="督办事项：" prop="matter">
            <el-input v-model="form.matter" type="textarea" />
          </el-form-item>
          <el-form-item label="业务类型：" prop="type">
            <el-input v-model="form.type" />
          </el-form-item>
          <el-form-item label="督办时间：" prop="date">
            <el-date-picker :clearable="false" v-model="form.date" type="date" format="YYYY-MM-DD HH:mm:ss" value-format="YYYY-MM-DD hh:mm:ss" placeholder="" />
          </el-form-item>
          <el-form-item label="督办人：" prop="user">
            <el-input v-model="form.user" />
          </el-form-item>
          <el-form-item label="督办意见：" prop="desc">
            <el-input v-model="form.desc" type="textarea" :rows="3" />
          </el-form-item>
          <el-form-item label="督办对象：" prop="obj">
            <el-checkbox-group v-model="form.obj" :min="0" :max="1">
              <el-checkbox label="督办经办人" />
              <el-checkbox label="升级给处长" />
              <el-checkbox label="升级给财政监督局" />
              <el-checkbox label="升级给分管局领导" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="通知方式：" prop="obj">
            <el-checkbox-group v-model="form.obj">
              <el-checkbox label="消息提醒" />
              <el-checkbox label="短信通知" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="上传附件：" prop="file">
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
              <template #default>
                <span class="tipBox">Ps：gif, jpg, jpeg, png, bmp, rar, zip, pdf, pdfx, txt, csv, xls, xlsx, doc, docx</span>
              </template>
            </el-upload>
          </el-form-item>
          <el-form-item label="附件说明：" prop="desc">
            <el-input v-model="form.desc" type="textarea" :rows="3" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="success">确认</el-button>
            <el-button type="primary" @click="handleClose">关闭</el-button>
          </span>
        </template>
      </el-dialog>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { formatDate } from "@/utils/date";
import { defineComponent, reactive, toRefs, computed, ref } from "vue";
import { mapGetters, useStore } from 'vuex'
import { genFileId } from 'element-plus'

export default defineComponent({
  name: "fourthTab",
  setup() {
    const store = useStore();
    const user = computed(
      mapGetters(['user']).user.bind({ $store: store })
    );
    const formRef = ref();
    const data = reactive({
      tableData: [{},{},{},{},{},{}],
      form: {
        matter: "三公经费未按规定要求申报，23年度三公经费大于22年度三公经费 单位:602001-靖州苗族侗族自治县应急管理局本级,23年三公金额：174900.00,22年三公金额：142000.00",
        type: "重点事项",
        date: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        user: user.value.name,
        prjName: "2022年义务教育营养改善计划",
        prjType: "其他运转类",
        prjTotalAmount: "186454.40",
        mofDivName: "教科文股",
        desc: ""
      },
      dialogVisible: false,
      fileList: []
    });

    // 发起督办
    const initiateSuperEvent = () => {
      data.dialogVisible = true;
    }
    // 关闭弹窗
    const handleClose = () => {
      formRef.value.resetFields();
      data.dialogVisible = false;
    }
    // 文件上传
    const uploadRef = ref();
    const handleExceed = (files: any) => {
      uploadRef.value!.clearFiles();
      const file = files[0];
      file.uid = genFileId();
      uploadRef.value!.handleStart(file);
    }

    return {
      ...toRefs(data),
      initiateSuperEvent,
      handleClose,
      uploadRef,
      handleExceed,
      formRef
    };
  },
});
</script>

<style lang="scss" scoped>
.mainContainer {
  height: calc(100vh - 190px);
  .btnBox{
    text-align: center;
    padding: 5px 0;
  }
  .inputInfoBox{
    /deep/ .el-form-item{
      margin-bottom: 5px;
      label{
        font-weight: 500;
      }
    }
  }
  .upload{
    width: 100%;
    .tipBox{
      padding-left: 20px;
      color: #F56C6C;
    }
  }
}
</style>
