<template>
  <div>
    <el-form ref="formRef" :model="queryParams" :inline="true">
      <el-form-item label="风险类别:">
        <el-select v-model="queryParams.region" placeholder=" " clearable>
          <el-option label="个人风险" value="个人风险" />
          <el-option label="岗位风险" value="岗位风险" />
          <el-option label="保密风险" value="保密风险" />
          <el-option label="规范风险" value="规范风险" />
          <el-option label="政策制定风险" value="政策制定风险" />
        </el-select>
      </el-form-item>
      <el-form-item label="风险点:">
        <el-input v-model="queryParams.code" />
      </el-form-item>
      <el-form-item label="风险等级:">
        <el-select v-model="queryParams.region" placeholder=" " clearable>
          <el-option label="重大风险" value="重大风险" />
          <el-option label="一般风险" value="一般风险" />
          <el-option label="疑似风险" value="疑似风险" />
          <el-option label="非风险" value="非风险" />
          <el-option label="提前提醒" value="提前提醒" />
          <el-option label="疑点问题" value="疑点问题" />
          <el-option label="合规提示" value="合规提示" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="btnBox">
      <el-button type="primary" @click="addRow">新增</el-button>
    </div>
    <el-table
      border
      :data="tableData"
      :header-cell-style="{ height: '36px', backgroundColor: '#F5F5F5', color: '#666' }"
      height="calc(100vh - 310px)"
    >
      <el-table-column type="selection" align="center" width="50" />
      <el-table-column type="index" label="序号" align="center" width="60" />
      <el-table-column prop="name" label="风险点" width="180" />
      <el-table-column prop="name" label="风险类型" width="140" />
      <el-table-column prop="name" label="风险类别"  width="140" />
      <el-table-column prop="name" label="风险等级" width="120" />
      <el-table-column prop="name" label="风险性质" width="120" />
      <el-table-column prop="name" label="控制点名称" width="140" />
      <el-table-column prop="name" label="业务流程控制" width="140" />
      <el-table-column prop="status" label="是否启用" width="100" />
      <el-table-column label="操作" width="140" fixed="right">
        <template #default="{ row }">
          <el-button type="primary" size="small" link v-if="row.status">禁用</el-button>
          <el-button type="primary" size="small" link v-else>启用</el-button>
          <el-button type="primary" size="small" link @click="editRow(row)">编辑</el-button>
          <el-button type="primary" size="small" link @click="deleteRow(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <Pagination align="left" :pageObj="pageObj" :total="total"></Pagination>
    <!-- 配置风险问题规则 -->
    <configRulesVue ref="configRulesRef"></configRulesVue>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import configRulesVue from '../drawer/configRules.vue';

export default defineComponent({
  components: {
    configRulesVue
  },
  setup() {
    const data = reactive({
      queryParams: {
        
      },
      configRules: false,
      tableData: [{}],
      pageObj: {
        page: 0,
        size: 5
      },
      total: 37
    })

    const configRulesRef = ref();
    // 风险新增
    const addRow = () => {
      configRulesRef.value.open();
    }
    // 风险编辑
    const editRow = (row: any) => {
      configRulesRef.value.open(true);
    }
    // 风险删除
    const deleteRow = (row: any) => {
      console.log(row)
    }

    return {
      ...toRefs(data),
      configRulesRef,
      addRow,
      editRow,
      deleteRow
    }
  },
})
</script>

<style lang="scss" scoped>
.btnBox{
  margin-bottom: 10px;
}
.el-form-item{
  margin-right: 12px;
}
.el-input, .el-select{
  width: 180px;
}
</style>
