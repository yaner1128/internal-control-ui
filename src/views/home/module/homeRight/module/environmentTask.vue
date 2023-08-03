<template>
  <el-dialog
    :close-on-click-modal="false"
    :append-to-body="true"
    v-model="dialogFormVisible"
    :lock-scroll="true"
    width="1000px"
    title="发起内控任务"
  >
    <div class="content">
      <div class="title">内控任务单</div>
      <el-row style="margin-bottom:10px;">
        <el-col :span="12">
          <div class="flex">
            <div class="flex_title">编号: </div>
            <div class="flex_txt">230803100855657</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="flex" style="justify-content: flex-end;">
            <div class="flex_title">时间: </div>
            <div class="flex_txt">2023-08-03 10:08:55</div>
          </div>
        </el-col>
      </el-row>
      <table class="tableBox" border="1" cellspacing="0" cellpadding="0" style="width: 100%;">
        <tbody>
          <tr>
            <td class="table_title"><span style="color:red">*</span>任务类型</td>
            <td><el-input v-model="infoForm.name" placeholder=""/></td>
            <td class="table_title">任务来源</td>
            <td><el-input v-model="infoForm.name" placeholder=""/></td>
          </tr>
          <!--  -->
          <tr>
            <td class="table_title"><span style="color:red">*</span>任务标题</td>
            <td colspan="3"><el-input v-model="infoForm.name" placeholder=""/></td>
          </tr>
          <!--  -->
          <tr>
            <td class="table_title">任务描述</td>
            <td colspan="3"><el-input v-model="infoForm.name"  :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder=""/></td>
          </tr>
          <!--  -->
          <tr>
            <td class="table_title">紧急程度</td>
            <td style="width: 340px;">
              <el-select v-model="infoForm.value" class="m-2" placeholder="Select" style="width: 100%;">
                <el-option
                  v-for="item in optionsDegree"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </td>
            <td class="table_title">处理时限</td>
            <td style="width: 340px;display: flex;border: 0;">
              <el-input-number
                v-model="infoForm.num"
                :min="0"
                controls-position="right"
                style="width:60%;"
              />
              <el-select v-model="infoForm.value" class="m-2" placeholder="Select" style="width:40%;">
                <el-option
                  v-for="item in optionsDate"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </td>
          </tr>
          <!--  -->
          <tr>
            <td class="table_title">附件</td>
            <td colspan="3">
              <div class="flex" style="margin: 10px 0 15px 0;">
                <div class="upload_title">附件上传:</div>
                <el-upload
                  v-model:file-list="infoForm.name"
                  class="upload-demo"
                  multiple
                  :limit="1"
                >
                  <el-button>选择文件</el-button>     
                </el-upload>
              </div>
              <div class="flex">
                <div class="upload_title">附件说明:</div>
                <el-input v-model="infoForm.name"  :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="" style="width: 600px;"/>
              </div>
              <div class="flex" style="margin: 10px 0 15px 0;justify-content: center;">
                <el-button size="small">取消</el-button>
                <el-button size="small">上传</el-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="drawer__footer">
      <el-button>关闭</el-button>
      <el-button type="primary">提交</el-button>
    </div>
  </el-dialog>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: 'environmentTask',
  components: {
    
  },
  setup() {
    const data = reactive({
      dialogFormVisible:false,
      infoForm: <any>{},
      optionsDegree: <any>[
        {label:"紧急", value:"紧急"},
        {label:"高", value:"高"},
        {label:"中", value:"中"},
        {label:"低", value:"低"},
        {label:"计划中", value:"计划中"},
      ],
      optionsDate: <any>[
        {label:"天", value:"天"},
        {label:"小时", value:"小时"},
        {label:"分钟", value:"分钟"},
      ],
    })
    const open = () => {
      data.dialogFormVisible = true
    }
    
    return {
      ...toRefs(data),
      open,
    }
  },
})
</script>
  
<style lang="scss" scoped>
.title {
  font-size: 16px;
  font-weight: bold;
  // border-bottom: 2px solid #2a70e5 !important;
  letter-spacing: 2px;
  width: auto;
  text-align: center;
  padding-bottom: 10px !important;
}

.drawer__footer {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.content {
  height: 400px;
  width: 100%;
}

.flex {
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.flex_title {
  line-height: 22px;
  margin-bottom: 5px;
  margin-top: 5px;
  font-weight: normal;
  display: inline-block;
  color: #787878;
  width: 50px;
}

.flex_txt {
  line-height: 22px;
  padding: 5px 0;
  font-weight: normal;
  display: inline-block;
  color: #323232;
  border-bottom: 1px solid #d2d2d2;
  width: 250px;
}

/* 表格边框 */
.tableBox {
  border-color: #888;
  border-collapse:collapse;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 10px;
  .table_title{
    width: 140px;
  }
  // tr{
  //   display: flex;
  //   flex-direction: row;
  //   flex-wrap: nowrap;
  //   width: 100%;
  // }
  td,th {
    text-align: center;
    // padding: 10px 10px;
    // flex: 1 0 25%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
}

.upload_title {
  width: 100px;
}
</style>
  