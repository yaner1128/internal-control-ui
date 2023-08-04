<template>
  <el-drawer
    v-model="taskVisible"
    title="新增流程环节"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    direction="rtl"
    size="50%"
  >
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane label="新增控制点" name="first">
        <el-scrollbar height="calc(100vh - 210px)">
          <el-form ref="formRef" :model="form" label-width="120px">
            <el-form-item label="控制点名称:" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="对象类型:" prop="typeObj">
              <el-select v-model="form.typeObj" placeholder=" " clearable>
                <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
            <el-form-item label="责任科室:" class="item" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="责任人:" class="item" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="处理岗位:" class="item" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="行权:" class="item" prop="name">
              <el-select v-model="form.region" placeholder=" " clearable>
                <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
              </el-select>
            </el-form-item>
            <el-form-item label="业务事项:" class="item" prop="name">
              <el-select v-model="form.region" placeholder=" " clearable>
                <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
              </el-select>
            </el-form-item>
            <el-form-item label="业务单据:" class="item" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="步骤:" class="item" prop="num">
              <el-input-number v-model="form.num" :min="0" controls-position="right" />
            </el-form-item>
            <el-form-item label="关键环节:" class="item" prop="step">
              <el-radio-group v-model="form.step">
                <el-radio label="是" />
                <el-radio label="否" />
              </el-radio-group>
            </el-form-item>
            <el-form-item label="是否通知回执:" class="item" prop="name">
              <el-radio-group v-model="form.step">
                <el-radio label="是" />
                <el-radio label="否" />
              </el-radio-group>
            </el-form-item>
            <el-form-item label="按项目阶段检查:" class="item" prop="name">
              <el-radio-group v-model="form.step">
                <el-radio label="是" />
                <el-radio label="否" />
              </el-radio-group>
            </el-form-item>
            <el-form-item label="环节交互界面:" class="item" prop="name">
              <el-select v-model="form.region" placeholder=" " clearable>
                <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
              </el-select>
            </el-form-item>
            <el-form-item label="业务办理界面:" class="item" prop="name">
              <el-select v-model="form.region" placeholder=" " clearable>
                <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
              </el-select>
            </el-form-item>
            <el-form-item label="控制点说明:" prop="name">
              <el-input v-model="form.name" type="textarea" :rows="2" />
            </el-form-item>
            <el-checkbox v-model="form.check1" label="控制点及时性要求" />
            <el-form-item label="控制点超时未响应或超时未办结警示:" prop="name" class="flexItem">
              <el-row style="width: 100%;">
                <el-col :span="12">
                  <el-checkbox v-model="form.check2" label="控制点响应时限要求" :disabled="!form.check1" />
                  <el-input-number v-model="form.num" :min="0" controls-position="right" style="margin: 0 5px;" :disabled="!(form.check1&&form.check2)" />
                  <el-select v-model="form.region" placeholder=" " clearable :disabled="!(form.check1&&form.check2)">
                    <el-option label="天" value="天" />
                    <el-option label="小时" value="小时" />
                  </el-select>
                </el-col>
                <el-col :span="12">
                  <el-checkbox v-model="form.check2" label="控制点办结时限要求" :disabled="!form.check1" />
                  <el-input-number v-model="form.num" :min="0" controls-position="right" style="margin: 0 5px;" :disabled="!(form.check1&&form.check2)" />
                  <el-select v-model="form.region" placeholder=" " clearable :disabled="!(form.check1&&form.check2)">
                    <el-option label="天" value="天" />
                    <el-option label="小时" value="小时" />
                  </el-select>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="控制点及时性提前预警催办:" prop="name" class="flexItem">
              <el-row style="width: 100%;">
                <el-col :span="12">
                  <el-checkbox v-model="form.check2" label="控制点响应提前预警" :disabled="!form.check1" />
                  <el-input-number v-model="form.num" :min="0" controls-position="right" style="margin: 0 5px;" :disabled="!(form.check1&&form.check2)" />
                  <el-select v-model="form.region" placeholder=" " clearable :disabled="!(form.check1&&form.check2)">
                    <el-option label="天" value="天" />
                    <el-option label="小时" value="小时" />
                  </el-select>
                </el-col>
                <el-col :span="12">
                  <el-checkbox v-model="form.check2" label="控制点响应提前预警" :disabled="!form.check1" />
                  <el-input-number v-model="form.num" :min="0" controls-position="right" style="margin: 0 5px;" :disabled="!(form.check1&&form.check2)" />
                  <el-select v-model="form.region" placeholder=" " clearable :disabled="!(form.check1&&form.check2)">
                    <el-option label="天" value="天" />
                    <el-option label="小时" value="小时" />
                  </el-select>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-scrollbar>
        <div class="btnCenterBox">
          <el-button type="">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="选择控制点" name="second">
        <div class="searchBox">
          <div class="label">业务模型：</div>
          <el-select v-model="form.region" placeholder=" " clearable>
            <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
          </el-select>
        </div>
        <el-table
          border
          :data="tableData"
          :header-cell-style="{ height: '36px', backgroundColor: '#F5F5F5', color: '#666' }"
          height="calc(100vh - 250px)"
          show-overflow-tooltip
        >
          <el-table-column type="selection" align="center" width="50" />
          <el-table-column type="index" label="序号" align="center" width="60" />
          <el-table-column prop="name" label="控制点名称" min-width="180" />
        </el-table>
        <div class="btnCenterBox">
          <el-button type="">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-drawer>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus';
import { defineComponent, reactive, toRefs, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = reactive({
      taskVisible: false,
      activeName: "first",
      form: <any>{

      },
      option: [
        { label: '流程环节', value: 'task' },
        { label: '业务事项', value: 'list' },
        { label: '业务表单', value: 'form' }
      ],
      open: (radio: String) => {
        data.form.typeObj = radio;
        data.taskVisible = true;
      }
    })

    return {
      ...toRefs(data),
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
    flex: 1 0 50%;
  }
  .el-input-number, .el-select{
    width: 100%;
  }
  .flexItem{
    flex-direction: column;
    /deep/ .el-form-item__label{
      width: 100% !important;
      justify-content: flex-start;
    }
    .el-input-number, .el-select{
      width: 130px;
    }
  }
}
.searchBox{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.btnCenterBox{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
}
</style>
