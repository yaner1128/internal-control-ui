<template>
  <div class="secondTab">
    <div class="btnFlexBox">
      <el-button type="primary" @click="addTarget">新增</el-button>
      <el-button type="primary">总评分规则</el-button>
    </div>
    <el-table
      border
      :data="tableData"
      :header-cell-style="{ height: '36px', backgroundColor: '#f8f8f8' }"
      height="385px"
    >
      <el-table-column type="expand">
        <template #default="{ row }">
          <el-table :data="row.children" border :header-cell-style="{ height: '36px', backgroundColor: '#f8f8f8' }">
            <el-table-column label="序号" type="index" width="60" />
            <el-table-column label="操作符" prop="name" width="120" />
            <el-table-column label="阈值1" prop="state" />
            <el-table-column label="阈值2" prop="city" />
            <el-table-column label="评价" prop="address" width="120" />
          </el-table>
        </template>
      </el-table-column>
      <el-table-column type="selection" width="50" />
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="name" label="业务事项" width="160" />
      <el-table-column prop="target" label="管控目标" min-width="200" show-overflow-tooltip />
      <el-table-column prop="weight" label="权重(%)" width="120" />
      <el-table-column label="操作" width="120">
        <template #default>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="primary" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <title-box title="管控指标">
      <div class="btnBox">
        <el-button type="primary" @click="addIndicate">新增</el-button>
        <el-button type="danger">删除</el-button>
        <el-button type="primary">编辑</el-button>
      </div>
      <el-table
        ref="multipleTableRef"
        border
        :data="tableData"
        :header-cell-style="{ height: '36px', backgroundColor: '#f8f8f8' }"
        height="260px"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column type="index" label="序号" width="60" />
        <el-table-column prop="name" label="管控指标" show-overflow-tooltip />
        <el-table-column prop="target" label="管控内容说明" show-overflow-tooltip />
        <el-table-column prop="weight" label="权重(%)" width="120" />
      </el-table>
    </title-box>
    <!-- 新增管控目标 -->
    <targetVue ref="targetRef"></targetVue>
    <!-- 管控指标 -->
    <indicateVue ref="indicateRef"></indicateVue>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import targetVue from '../drawer/target.vue';
import indicateVue from '../drawer/indicate.vue';

export default defineComponent({
  components: {
    targetVue,
    indicateVue
  },
  setup() {
    const targetRef = ref();
    const indicateRef = ref();
    const data = reactive({
      tableData: [
        { name: "项目库管理", target: "保障一体化系统内财政项目库名称规范", weight: "" }
      ]
    })
    // 新增管控目标
    const addTarget = () => {
      targetRef.value.open();
    }
    // 新增管控指标
    const addIndicate = () => {
      indicateRef.value.open();
    }

    return {
      ...toRefs(data),
      targetRef,
      addTarget,
      indicateRef,
      addIndicate
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
.btnBox{
  margin-bottom: 10px;
}
</style>
