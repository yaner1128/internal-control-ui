<template>
  <Title-iframe title="制度文件管理">
    <el-row :gutter="20">
      <el-col :span="4" style="border-right: 1px solid #ccc">
        <el-scrollbar height="calc(100vh - 225px)">
          <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick" />
        </el-scrollbar>
      </el-col>
      <el-col :span="20">
        <!-- 搜索框 -->
        <div class="searchBox">
          <div class="btnBox">
            <el-button type="primary" @click="addRow">新增</el-button>
            <el-button type="danger">删除</el-button>
            <el-button type="warning">撤回</el-button>
          </div>
          <el-input v-model="value" placeholder="请输入标题或关键字">
            <template #append>
              <el-button type="primary" link>搜索条目</el-button>
            </template>
          </el-input>
        </div>
        <!-- 展示列表 -->
        <el-table
          ref="multipleTableRef"
          border
          :data="tableData"
          :header-cell-style="{ height: '36px', backgroundColor: '#f8f8f8' }"
          @selection-change="handleSelectionChange"
          height="calc(100vh - 320px)"
        >
          <el-table-column type="selection" width="50" />
          <el-table-column property="title" label="标题" show-overflow-tooltip>
            <template #default="{row}">
              <span style="color: #2381df; cursor: pointer;">{{ row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column property="code" label="编号" width="180" />
          <el-table-column property="name" label="版本号" width="120" />
          <el-table-column property="name" label="修订人" width="110" />
          <el-table-column property="name" label="修订时间" width="120" />
          <el-table-column property="name" label="审核人" width="110" />
          <el-table-column property="name" label="发布时间" width="120" />
          <el-table-column property="name" label="状态" width="110" />
          <el-table-column property="name" label="阅览量" width="110" />
          <el-table-column label="操作" width="220">
            <template #default>
              <el-button type="primary" link>修订</el-button>
              <el-button type="primary" link>启动/禁用</el-button>
              <el-button type="info" link>撤销修订</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <Pagination align="left" :pageObj="pageObj" :total="total"></Pagination>
      </el-col>
      <!-- 表单 -->
      <formView ref="formViewRef"></formView>
    </el-row>
  </Title-iframe>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import { defineComponent, reactive, toRefs, ref } from "vue";
import formView from "./module/form.vue";

export default defineComponent({
  name: "Files",
  components: {
    formView
  },
  setup() {
    const data = reactive({
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeData: [
        { label: '内控制度', children: [
          { label: '基本制度相关' },
          { label: '专项风险内部控制办法' },
          { label: '各处室业务操作规程' },
          { label: '机关内部控制相关' },
          { label: '其他内部控制相关' }
        ]},{ label: '内控知识', children: [
          { label: '违规问题定性依据' },
          { label: '违规问题处罚依据' }
        ]},{ label: '财政监督文件', children: [
          { label: '财经法律法规库' },
          { label: '标准文本格式库' },
          { label: '检查案卷库' },
          { label: '行政处罚案卷库' }
        ]}
      ],
      value: "",
      type: "",
      tableData: [
        { title: '办公室内部控制管理规程', code: '财政监督股[2022]001号' },
        { title: '办公室内部控制管理规程', code: '财政监督股[2022]001号' },
        { title: '办公室内部控制管理规程', code: '财政监督股[2022]001号' }
      ],
      pageObj: {
        page: 0,
        size: 5
      },
      total: 37
    })

    // 左侧树 点击事件
    const handleNodeClick = (val: any) => {
      data.type = val.label;
    }
    // 新增
    const formViewRef = ref();
    const addRow = () => {
      if(!data.type) {
        ElMessage.warning("请选择知识库类型！")
        return;
      }
      formViewRef.value.open(data.type);
    }
    // 表格选中事件
    const handleSelectionChange = () => {

    }

    return {
      ...toRefs(data),
      handleNodeClick,
      addRow,
      formViewRef,
      handleSelectionChange
    }
  },
});
</script>

<style lang="scss" scoped>
.searchBox{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .el-input{
    width: 500px;
  }
}
.info{
  // border: 1px solid #ccc;
  .item{
    height: 120px;
    padding: 10px 15px;
    border-bottom: 1px dotted #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .label{
      width: 60px;
      display: inline-block;
    }
    .title{
      cursor: pointer;
      color: #2381df;
      font-weight: bold;
      font-size: 15px;
    }
  }
  .left,.right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
  }
  .left{
    height: 100%;
    justify-content: space-around;
  }
}
</style>
