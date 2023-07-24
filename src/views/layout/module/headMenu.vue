<template>
  <div class="menuBox">
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
      background-color="var(--main_color)"
      text-color="var(--text_color)"
      active-text-color="var(--hover_color)"
    >
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3">Info</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: "menu",
  setup() {
    const data = reactive({
      activeIndex: '1'
    })

    return {
      ...toRefs(data)
    }
  },
})
</script>

<style lang="scss" scoped>
.menuBox{
  background-color: var(--main_color);
  display: flex;
  align-items: center;
  padding: 0 20px;
  .el-menu{
    width: 100%;
    height: 100%;
    border-bottom: none;
  }
}
</style>
