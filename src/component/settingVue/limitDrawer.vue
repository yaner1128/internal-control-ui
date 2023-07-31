<template>
  <el-drawer
    v-model="limitDialog"
    title="模块角色设定"
    direction="rtl"
    size="50%"
  >
    <div class="title">模块名称：</div>
    <vxe-table
      border
      height="750"
      :column-config="{resizable: true}"
      :row-config="{isCurrent: true, isHover: true}"
      :data="tableData"
      :radio-config="{labelField: 'role'}"
      :checkbox-config="{labelField: 'name', highlight: true, range: true}">
      <vxe-column type="checkbox" title="Name"></vxe-column>
      <vxe-column type="radio" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
    <div class="drawer__footer">
      <el-button @click="cancelForm">Cancel</el-button>
      <el-button type="primary" :loading="loading" @click="onClick">Submit</el-button>
    </div>
  </el-drawer>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: 'limitDrawer',
  components: {
    
  },
  setup() {
    const data = reactive({
      limitDialog:false,
    })
    const open = () => {
      data.limitDialog = true
    }
    return {
      ...toRefs(data),
      open
    }
  },
})
</script>
  
<style lang="scss" scoped>
.title {
  font-size: 14px;
  margin-bottom: 20px;
  color: #72767b;
}

.drawer__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
</style>
  