<template>
  <div class="fourthTab">
    <div class="btnFlexBox">
      <span>
        <el-button type="primary" @click="addRow">添加管控对象</el-button>
        <el-button type="primary">业务进度要求</el-button>
        <el-button type="primary">流程属性</el-button>
      </span>
      <el-radio-group v-model="radio" @change="changeType">
        <el-radio label="task">流程环节</el-radio>
        <el-radio label="list">业务事项</el-radio>
        <el-radio label="form">业务表单</el-radio>
      </el-radio-group>
    </div>
    <el-table
      ref="multipleTableRef"
      border
      :data="tableData"
      :header-cell-style="{ height: '36px', backgroundColor: '#F5F5F5', color: '#666' }"
      height="calc(100vh - 260px)"
      show-overflow-tooltip
      v-loading="loading"
    >
      <el-table-column type="selection" align="center" width="50" />
      <el-table-column type="index" label="序号" align="center" width="60" />
      <el-table-column v-for="(column, index) in tableHeader[radio]" :key="index" :prop="column.prop" :label="column.label" :min-width="column.minWidth" :width="column.width" />
      <el-table-column label="操作" width="190" fixed="right" :show-overflow-tooltip="false">
        <template #default>
          <el-button type="primary" size="small" link>业务内控要求</el-button>
          <el-button type="primary" size="small" link style="margin-left: 5px;">删除管控对象</el-button>
          <el-button type="primary" size="small" link style="margin-left: 0;" v-if="radio==='list'" @click="linkEvent">流程环节与业务事项对应关系</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <Pagination align="left" :pageObj="pageObj" :total="total"></Pagination>
    <!-- 新增管控对象 -->
    <controlObjVue ref="controlObjRef"></controlObjVue>
    <!-- 流程环节与业务事项对应关系 -->
    <el-dialog
      v-model="dialogVisible"
      title="流程环节与业务事项对应关系"
      width="500px"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form ref="formRef" :model="form" label-width="100px">
        <el-form-item label="业务事项：" prop="type">
          <el-select v-model="form.type" placeholder=" " clearable>
            <el-option v-for="(item, index) in option" :key="index" :label="item.label" :value="item.label" />
          </el-select>
        </el-form-item>
        <el-form-item label="排序：" prop="type">
          <el-input-number v-model="form.num" :min="0" controls-position="right" />
        </el-form-item>
        <el-form-item label="项目库管理：" prop="type">
          <el-checkbox-group v-model="form.region">
            <el-checkbox label="指标管理" />
            <el-checkbox label="计划管理" />
            <el-checkbox label="支付申请管理" />
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button>关 闭</el-button>
          <el-button type="primary">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import controlObjVue from '../drawer/controlObj.vue'

export default defineComponent({
  components: {
    controlObjVue
  },
  setup() {
    const data = reactive({
      radio: 'task',
      loading: false,
      tableHeader: {
        task: [
          { prop: "name", label: "流程环节名称", width: "180" },
          { prop: "name", label: "责任科室", width: "140" },
          { prop: "name", label: "责任人", width: "140" },
          { prop: "name", label: "行权", width: "120" },
          { prop: "name", label: "责任岗位", width: "120" },
          { prop: "name", label: "必经", width: "140" },
          { prop: "name", label: "办结时限", width: "140" },
          { prop: "name", label: "办结提前预警", width: "140" }
        ],
        list: [
          { prop: "name", label: "业务事项", width: "180" },
          { prop: "name", label: "对应流程经办环节", minWidth: "240" },
          { prop: "name", label: "责任科室", width: "160" },
          { prop: "name", label: "责任人", width: "140" }
        ],
        form: [
          { prop: "name", label: "业务表单名称", minWidth: "240" }
        ],
      },
      tableData: [{}],
      pageObj: {
        page: 0,
        size: 5
      },
      total: 37,
      dialogVisible: false,
      form: {},
      option: [
        { label: '流程环节', value: 'task' },
        { label: '业务事项', value: 'list' },
        { label: '业务表单', value: 'form' }
      ],
    })

    // 获取数据
    const changeType = (val: any) => {
      data.loading = true;
      setTimeout(() => {
        switch (val) {
          case 'task':
            data.tableData = [{}, {}, {}]
            data.total = 3;
            break;
          case 'list':
            data.tableData = [{}, {}, {}, {}, {}, {}]
            data.total = 6;
            break;
          case 'form':
            data.tableData = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
            data.total = 9;
            break;
          default:
            break;
        }
        data.loading = false;
      }, 1000)
    }
    // 新增管控对象
    const controlObjRef = ref();
    const addRow = () => {
      controlObjRef.value.open(data.radio);
    }
    // 对应关系
    const linkEvent = () => {
      data.dialogVisible = true;
    }

    return {
      ...toRefs(data),
      changeType,
      controlObjRef,
      addRow,
      linkEvent
    }
  },
})
</script>

<style lang="scss" scoped>
.btnFlexBox{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
