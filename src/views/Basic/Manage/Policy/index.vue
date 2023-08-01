<template>
  <Title-iframe title="制度文件管理">
    <el-row :gutter="20">
      <el-col :span="4" style="border-right: 1px solid #ccc">
        <el-scrollbar height="calc(100vh - 225px)">
          <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick" />
        </el-scrollbar>
      </el-col>
      <el-col :span="20">
        <el-scrollbar height="calc(100vh - 225px)">
          <titleBoxVue title="策略基本信息">
            <div class="btnBox">
              <el-button type="primary">新增</el-button>
              <el-button type="primary">保存</el-button>
              <el-button type="success">提交</el-button>
            </div>
            <el-form ref="formRef" :model="form" :rules="rules" label-width="90px">
              <el-form-item label="策略名称：" class="item" prop="title">
                <el-input v-model="form.title" />
              </el-form-item>
              <el-form-item label="编号：" class="item" prop="title">
                <el-input v-model="form.title" />
              </el-form-item>
              <el-form-item label="风险类型：" class="item" prop="code">
                <el-input v-model="form.code" />
              </el-form-item>
              <el-form-item label="父节点：" class="item" prop="version">
                <el-input v-model="form.version" />
              </el-form-item>
              <el-form-item label="制度：" class="item" prop="type">
                <el-input v-model="form.type" />
              </el-form-item>
              <el-form-item label="排序：" class="item" prop="key">
                <el-input v-model="form.key" />
              </el-form-item>
              <el-form-item label="摘要：" prop="desc">
                <el-input v-model="form.desc" type="textarea" :rows="2" />
              </el-form-item>
              <el-form-item label="正文：">
                <el-input v-model="form.desc" type="textarea" :rows="2" />
              </el-form-item>
            </el-form>
          </titleBoxVue>
          <titleBoxVue title="标准规范要求">
            <div class="btnBox">
              <el-button type="primary">新增</el-button>
              <el-button type="warning">删除</el-button>
            </div>
            <el-table
              ref="multipleTableRef"
              border
              :data="tableData"
              :header-cell-style="{ height: '36px', backgroundColor: '#f8f8f8' }"
              @selection-change="handleSelectionChange"
              height="200px"
            >
              <el-table-column type="selection" width="50" />
              <el-table-column type="index" label="序号" width="60" />
              <el-table-column property="name" label="管控事项及关键环节" />
              <el-table-column property="name" label="标准规范要求" />
              <el-table-column property="name" label="适用" width="120" />
              <el-table-column property="name" label="内控执行" width="120" />
              <el-table-column property="name" label="相关附件" width="120" />
            </el-table>
          </titleBoxVue>
          <titleBoxVue title="风险评估">
            <div class="btnBox">
              <el-button type="primary">新增</el-button>
              <el-button type="warning">删除</el-button>
              <el-button type="primary">编辑</el-button>
            </div>
            <el-table
              ref="multipleTableRef"
              border
              :data="tableData"
              :header-cell-style="{ height: '36px', backgroundColor: '#f8f8f8' }"
              @selection-change="handleSelectionChange"
              height="200px"
            >
              <el-table-column type="selection" width="50" />
              <el-table-column type="index" label="序号" width="60" />
              <el-table-column property="name" label="编号" width="150" />
              <el-table-column property="name" label="显示名" min-width="180" show-overflow-tooltip />
              <el-table-column property="name" label="风险类别" width="180" />
              <el-table-column property="name" label="风险类型" width="150" />
              <el-table-column property="name" label="风险等级" width="150" />
              <el-table-column property="name" label="所属流程" width="180" />
              <el-table-column property="name" label="责任主体" min-width="180" />
            </el-table>
          </titleBoxVue>
          <titleBoxVue title="防控措施">
            <div class="btnBox">
              <el-button type="primary">新增</el-button>
              <el-button type="warning">删除</el-button>
              <el-button type="primary">编辑</el-button>
            </div>
            <el-table
              ref="multipleTableRef"
              border
              :data="tableData"
              :header-cell-style="{ height: '36px', backgroundColor: '#f8f8f8' }"
              @selection-change="handleSelectionChange"
              height="200px"
            >
              <el-table-column type="selection" width="50" />
              <el-table-column type="index" label="序号" width="60" />
              <el-table-column property="name" label="类型" width="180" />
              <el-table-column property="name" label="阶段/文件" width="180" />
              <el-table-column property="name" label="描述" min-width="180" show-overflow-tooltip />
              <el-table-column property="name" label="创建时间" width="120" />
            </el-table>
          </titleBoxVue>
        </el-scrollbar>
      </el-col>
    </el-row>
  </Title-iframe>
</template>

<script lang="ts">
import titleBoxVue from "@/component/titleBox.vue";
import { ElMessage } from "element-plus";
import { defineComponent, reactive, toRefs, ref } from "vue";

export default defineComponent({
  name: "Policy",
  components: {
    titleBoxVue
  },
  setup() {
    const data = reactive({
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeData: [
        { label: '内控基本制度', children: [
          { label: '基础环境', children: [
            { label: '岗位授权' },
            { label: '归口管理' },
            { label: '关键岗位' },
            { label: '不相容岗位分离' },
            { label: '制度管理' }
          ]},
          { label: '控制活动' }
        ]},
        { label: '专项风险内控办法'},
        { label: '内部操作规程'}
      ],
      form: {

      },
      rules: {

      },
      tableData: [{}, {}, {}, {}, {}]
    })

    // 左侧树 点击事件
    const handleNodeClick = (val: any) => {
      
    }

    return {
      ...toRefs(data),
      handleNodeClick
    }
  },
});
</script>

<style lang="scss" scoped>
.btnBox{
  margin-bottom: 10px;
}
.el-form{
  display: flex;
  flex-wrap: wrap;
  .el-form-item{
    flex: 0 1 100%;
  }
  .item{
    flex: 0 1 50%;
  }
}
</style>
