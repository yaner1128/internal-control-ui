<template>
  <el-drawer
      v-model="configRules"
      title="配置风险问题规则"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      direction="rtl"
      size="50%"
    >
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane label="基本信息" name="first">
        <el-form ref="formRef" :model="form">
          <el-form-item label="风险名称:">
            <el-input v-model="form.code" />
          </el-form-item>
          <el-form-item label="对象类型:" class="item" prop="region">
            <el-select v-model="form.region" placeholder=" " clearable>
              <el-option v-for="(item, index) in option1" :key="index" :label="item.label" :value="item.label" />
            </el-select>
          </el-form-item>
          <el-form-item label="管控对象:" class="item" prop="region">
            <el-select v-model="form.region" placeholder=" " clearable>
              <el-option v-for="(item, index) in option2" :key="index" :label="item.label" :value="item.label" />
            </el-select>
          </el-form-item>
        </el-form>
        <title-box title="管控要求">
          <div class="btnBox">
            <el-button type="primary">新增</el-button>
          </div>
          <el-table
            border
            :data="demandData"
            :header-cell-style="{ height: '36px', backgroundColor: '#F5F5F5', color: '#666' }"
            height="250px"
          >
            <el-table-column prop="name" label="要求" min-width="180" />
            <el-table-column prop="name" label="管控要求" min-width="240" />
            <el-table-column label="操作" width="80" fixed="right">
              <template #default>
                <el-button type="primary" size="small" link>删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </title-box>
        <title-box title="风险原因">
          <div class="btnBox">
            <el-button type="primary">新增</el-button>
          </div>
          <el-table
            border
            :data="reasonData"
            :header-cell-style="{ height: '36px', backgroundColor: '#F5F5F5', color: '#666' }"
            height="260px"
          >
            <el-table-column type="index" label="序号" width="60" />
            <el-table-column prop="name" label="原因类型" width="140" />
            <el-table-column prop="name" label="风险点" min-width="180" />
            <el-table-column prop="name" label="管控对象类型" width="140" />
            <el-table-column prop="name" label="管控对象" width="140" />
            <el-table-column prop="name" label="风险类型" width="120" />
            <el-table-column prop="name" label="风险等级" width="120" />
            <el-table-column label="操作" width="80" fixed="right">
              <template #default>
                <el-button type="primary" size="small" link>删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </title-box>
      </el-tab-pane>
      <el-tab-pane label="内控指标" :disabled="!isEdit">
        <title-box title="指标基本信息">
          <el-form ref="formRef" :model="form">
            <el-form-item label="指标名称:">
              <el-input v-model="form.code" />
            </el-form-item>
            <el-form-item label="指标单位:" prop="region">
              <el-input v-model="form.code" />
            </el-form-item>
            <el-form-item label="管控要求:" prop="region">
              <el-table border
                :data="tableData"
                :header-cell-style="{ height: '36px', backgroundColor: '#F5F5F5', color: '#666' }"
                height="calc(100vh - 320px)"
              >
                <el-table-column prop="name" label="要求" min-width="180" />
                <el-table-column prop="name" label="管控要求" min-width="240" />
              </el-table>
            </el-form-item>
          </el-form>
        </title-box>
      </el-tab-pane>
      <el-tab-pane label="风险监控" :disabled="!isEdit">
        <title-box title="指标基本信息">
          <el-scrollbar height="calc(100vh - 210px)">
            <el-form ref="formRef" :model="form" label-width="110px">
              <el-form-item label="采集适配器:">
                <el-select v-model="form.region" placeholder=" " clearable>
                  <el-option label="内控风险监控模块" value="内控风险监控模块" />
                </el-select>
              </el-form-item>
              <el-form-item label="采集周期说明:" prop="region">
                <el-input v-model="form.code" />
              </el-form-item>
              <title-box title="采集周期配置" style="width: 100%">
                <el-form-item label="采集周期类型:">
                  <el-select v-model="form.region" placeholder=" " clearable>
                    <el-option label="计划性" value="计划性" />
                    <el-option label="周期性" value="周期性" />
                  </el-select>
                </el-form-item>
                <el-form-item label="计划类型:" prop="region">
                  <el-input v-model="form.code" />
                </el-form-item>
                <title-box title="基于（每周）计划类型的配置：" >
                  <el-form-item label="请选择任务运行的起始时间和日期:" class="column_item">
                    <el-form-item label="起始时间:" prop="date" label-width="120px">
                      <el-time-picker v-model="form.date" placeholder=" " format="HH:mm" />
                    </el-form-item>
                    <el-form-item label="结束时间:" prop="date" label-width="120px">
                      <el-time-picker v-model="form.date" placeholder=" " format="HH:mm"  />
                    </el-form-item>
                    <el-form-item label="间隔周期(分钟):" prop="num" label-width="120px">
                      <el-input-number v-model="form.num" :min="0" controls-position="right" />
                    </el-form-item>
                    <el-form-item label="周期:" prop="num" label-width="120px">
                      <el-input-number v-model="form.num" :min="0" controls-position="right" />
                    </el-form-item>
                  </el-form-item>
                  <el-form-item label="请选择下面星期:" prop="region" class="column_item">
                    <el-checkbox-group v-model="form.region">
                      <el-checkbox label="星期一" />
                      <el-checkbox label="星期二" />
                      <el-checkbox label="星期三" />
                      <el-checkbox label="星期四" />
                      <el-checkbox label="星期五" />
                      <el-checkbox label="星期六" />
                      <el-checkbox label="星期日" />
                    </el-checkbox-group>
                  </el-form-item>
                </title-box>
              </title-box>
            </el-form>
          </el-scrollbar>
        </title-box>
      </el-tab-pane>
      <el-tab-pane label="预警规则" :disabled="!isEdit">
        <div class="btnBox">
          <el-button type="primary">添加预警规则</el-button>
        </div>
        <el-table
          border
          :data="tableData"
          :header-cell-style="{ height: '36px', backgroundColor: '#F5F5F5', color: '#666' }"
          height="calc(100vh - 210px)"
        >
          <el-table-column type="selection" align="center" width="50" />
          <el-table-column prop="name" label="预警等级" width="120" />
          <el-table-column prop="name" label="预警频率" width="120" />
          <el-table-column prop="name" label="操作符"  width="120" />
          <el-table-column prop="name" label="阈值" min-width="120" />
          <el-table-column prop="name" label="状态" width="120" />
          <el-table-column prop="name" label="报警颜色" width="120" />
          <el-table-column prop="name" label="控制级别" width="120" />
          <el-table-column label="操作" width="140" fixed="right">
            <template #default>
              <el-button type="primary" size="small" link>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="控制规则" :disabled="!isEdit">
        <el-scrollbar height="calc(100vh - 170px)">
          <div style="display: flex;align-items: center;justify-content: space-between;margin-bottom: 5px;">
            <span>固化控制配置：（发现风险后的控制方法）</span>
            <span>控制级别：
              <el-select v-model="form.region" placeholder=" " clearable>
                <el-option label="默认规则" value="默认规则" />
                <el-option label="2-风险预警" value="2-风险预警" />
              </el-select>
            </span>
          </div>
          <table class="tableBox" border="1" cellspacing="0" cellpadding="0" style="width: 100%;">
            <tbody>
              <tr style="height: 36px">
                <th>控制方式</th>
                <th>控制配置</th>
              </tr>
              <tr>
                <td class="table_title"><el-checkbox v-model="checked" label="风险挂起" /></td>
                <td style="display: inline-flex;border: none;align-items: center;">
                  <el-checkbox v-model="checked" label="自动恢复" />
                  <span class="label">恢复日期：</span>
                  <el-date-picker v-model="value" type="date" value-format="YYYY-MM-DD" placeholder=" " />
                </td>
              </tr>
              <tr>
                <td class="table_title"><el-checkbox v-model="checked" label="风险应对流程" /></td>
                <td>
                  <span class="label">类型：</span>
                  <el-select v-model="value" placeholder="请选择处理流程" clearable>
                    <el-option label="默认规则" value="默认规则" />
                    <el-option label="2-风险预警" value="2-风险预警" />
                  </el-select>
                  <span class="label">流程：</span>
                  <el-select v-model="value" placeholder="请选择处理流程" clearable>
                    <el-option label="默认规则" value="默认规则" />
                    <el-option label="2-风险预警" value="2-风险预警" />
                  </el-select>
                  <el-button type="primary" link>配置流程</el-button>
                </td>
              </tr>
              <tr>
                <td class="table_title" rowspan="3"><el-checkbox v-model="checked" label="风险升级" /></td>
                <td>
                  <span class="label">时间条件：</span>
                  <el-input-number v-model="value" :min="0" controls-position="right" />
                  <span>天之内一直未受理响应，则升级为风险</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="label">风险等级：</span>
                  <el-radio-group v-model="value">
                    <el-radio label="重大风险" />
                    <el-radio label="一般风险" />
                    <el-radio label="疑似风险" />
                  </el-radio-group>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="label">风险流程：</span>
                  <el-select v-model="value" placeholder="请选择处理流程" clearable>
                    <el-option label="默认规则" value="默认规则" />
                    <el-option label="2-风险预警" value="2-风险预警" />
                  </el-select>
                  <el-button type="primary" link>配置流程</el-button>
                </td>
              </tr>
              <tr>
                <td class="table_title"><el-checkbox v-model="checked" label="邮件报警" /></td>
                <td>
                  <span class="label">接收人员：</span>
                  <el-input v-model="value" />
                </td>
              </tr>
              <tr>
                <td class="table_title"><el-checkbox v-model="checked" label="短信报警" /></td>
                <td>
                  <span class="label">接收人员：</span>
                  <el-input v-model="value" />
                </td>
              </tr>
              <tr>
                <td class="table_title" rowspan="2"><el-checkbox v-model="checked" label="业务流程控制" /></td>
                <td>
                  <span class="label">风险升级：</span>
                  <el-radio-group v-model="value">
                    <el-radio label="重大风险" />
                    <el-radio label="一般风险" />
                    <el-radio label="疑似风险" />
                  </el-radio-group>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="label">督办升级：</span>
                  <el-checkbox-group v-model="valueList">
                    <el-checkbox label="升级给处长" />
                    <el-checkbox label="升级给厅长" />
                    <el-checkbox label="升级给监督局" />
                  </el-checkbox-group>
                </td>
              </tr>
              <tr>
                <td class="table_title"><el-checkbox v-model="checked" label="风险控制建议" /></td>
                <td>
                  <el-radio-group v-model="value">
                    <el-radio label="流程阻断" />
                    <el-radio label="流程回退" />
                    <el-radio label="流程终止" />
                  </el-radio-group>
                </td>
              </tr>
              <tr>
                <td class="table_title"><el-checkbox v-model="checked" label="推送风险信息" /></td>
                <td>
                  <el-checkbox-group v-model="valueList">
                    <el-checkbox label="指标系统" />
                    <el-checkbox label="国库支付系统" />
                    <el-checkbox label="办公自动化系统" />
                  </el-checkbox-group>
                </td>
              </tr>
              <tr>
                <td class="table_title"><el-checkbox v-model="checked" label="推送流程控制指令" /></td>
                <td>
                  <el-checkbox-group v-model="valueList">
                    <el-checkbox label="指标系统" />
                    <el-checkbox label="国库支付系统" />
                    <el-checkbox label="办公自动化系统" />
                  </el-checkbox-group>
                </td>
              </tr>
            </tbody>
          </table>
          <div style="display: flex;justify-content: center;">
            <el-button type="success">确 定</el-button>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const data = reactive({
      configRules: false,
      activeName: "first",
      option1: [
        { label: "流程环节" },
        { label: "业务事项" },
        { label: "业务表单" },
      ],
      option2: [
        { label: "项目库管理" },
        { label: "指标管理" },
        { label: "计划管理" },
        { label: "支付申请管理" }
      ],
      form: {},
      isEdit: false,
      demandData: [{}],
      reasonData: [{}],
      tableData: [{}],
      checked: false,
      valueList: [],
      value: "",
      open: (isEdit=false) => {
        data.activeName = "first";
        data.isEdit = isEdit;
        data.configRules = true;
      }
    })

    return {
      ...toRefs(data)
    }
  },
})
</script>

<style lang="scss" scoped>
.el-form{
  display: flex;
  flex-direction: wrap;
  flex-wrap: wrap;
  .el-form-item{
    flex: 1 0 100%;
  }
  .column_item{
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
    .el-form-item{
      margin-bottom: 18px;
      padding-left: 20px;
      flex: 1 0 50%;
    }
  }
  /deep/ .column_item>.el-form-item__label{
    width: auto !important;
    justify-content: flex-start;
    font-weight: 500;
  }
  .item{
    flex: 1 0 50%;
  }
}
.btnBox{
  margin-bottom: 10px;
}
.btnCenterBox{
  display: flex;
  justify-content: center;
}
.tableBox {
  border-color: #888;
  border-collapse:collapse;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 10px;
  .table_title{
    width: 160px;
    padding-left: 10px;
  }
  tr{
    padding: 5px 0;
  }
  td{
    padding: 0 10px;
    .el-radio-group, .el-checkbox-group {
      display: inline-flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 0;
    }
    .label{
      padding: 0 5px;
      display: inline-flex;
      font-size: 15px;
      font-weight: 500;
    }
    .el-input{
      display: inline-flex;
      align-items: center;
      flex-wrap: wrap;
      border: none;
      width: calc(100% - 100px);
    }
  }
}
</style>
