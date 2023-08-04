<template>
  <Title-iframe title="主要业务内控">
    <!-- 查询 -->
    <el-form ref="formRef" :model="queryParams" :inline="true">
      <el-form-item label="任务类型：" prop="title">
        <el-select v-model="queryParams.region" placeholder=" " clearable>
          <el-option label="特办事项内控任务" value="特办事项内控任务" />
          <el-option label="重点事项内控任务" value="重点事项内控任务" />
          <el-option label="预决算信息公开内控任务" value="预决算信息公开内控任务" />
          <el-option label="一般事项内控任务" value="一般事项内控任务" />
          <el-option label="专项资金内控任务" value="专项资金内控任务" />
        </el-select>
      </el-form-item>
      <el-form-item label="任务名称：" prop="code">
        <el-input v-model="queryParams.code" />
      </el-form-item>
      <el-form-item label="任务状态：" prop="version">
        <el-select v-model="queryParams.region" placeholder=" " clearable>
          <el-option label="草稿" value="草稿" />
          <el-option label="待处理" value="待处理" />
          <el-option label="待审核" value="待审核" />
          <el-option label="已审核" value="已审核" />
          <el-option label="已办结" value="已办结" />
          <el-option label="启用" value="启用" />
          <el-option label="停用" value="停用" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 操作按钮 -->
    <div class="btnBox">
      <el-button type="primary" @click="addEvent">新增</el-button>
      <el-button type="danger">删除</el-button>
    </div>
    <!-- 数据列表 -->
    <el-table
      ref="multipleTableRef"
      border
      :data="tableData"
      :header-cell-style="{ height: '36px', backgroundColor: '#f8f8f8' }"
      height="calc(100vh - 367px)"
    >
      <el-table-column type="selection" width="50" />
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="fiscalYear" label="年度" width="120" />
      <el-table-column prop="business" label="主要业务" min-width="320" show-overflow-tooltip />
      <el-table-column prop="agencyName" label="牵头单位" min-width="240" show-overflow-tooltip />
      <el-table-column prop="depart" label="主管科室" width="200" />
      <el-table-column prop="user" label="责任人" width="140" />
      <el-table-column prop="status" label="任务状态" width="120">
        <template #default="{ row }">
          <span>{{ row.status ? '启动' : '停止' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="170">
        <template #default="{ row }">
          <el-button type="primary" link @click="taskConfig">任务配置</el-button>
          <el-button type="primary" link v-if="row.status">停止任务</el-button>
          <el-button type="primary" link v-else>启动任务</el-button>
          <el-button type="primary" link style="margin-left: 0;">督办</el-button>
          <el-button type="primary" link>修改</el-button>
          <el-button type="primary" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <Pagination align="left" :pageObj="pageObj" :total="total"></Pagination>
    <!-- 表单 -->
    <formView ref="formViewRef"></formView>
    <!-- 任务配置 -->
    <taskConfigView ref="taskConfigRef"></taskConfigView>
  </Title-iframe>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import formView from "./module/form.vue"
import taskConfigView from "./module/taskConfig.vue"

export default defineComponent({
  name: "Environment",
  components: {
    formView,
    taskConfigView
  },
  setup() {
    const formViewRef = ref();
    const taskConfigRef = ref();
    const data = reactive({
      queryParams: {

      },
      tableData: [
        { fiscalYear: "2023", status: "true" },
      ],
      pageObj: {
        page: 0,
        size: 5
      },
      total: 37
    })

    const addEvent = () => {
      formViewRef.value.open();
    }
    // 任务配置
    const taskConfig = () => {
      taskConfigRef.value.open();
    }
    
    return {
      ...toRefs(data),
      formViewRef,
      taskConfigRef,
      addEvent,
      taskConfig
    }
  },
})
</script>

<style lang="scss" scoped>
.btnBox{
  margin-bottom: 10px;
}
</style>
