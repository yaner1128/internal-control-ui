<template>
  <div class="container">
    <el-drawer
      v-model="drawer"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      title="查看问题详情"
      size="50%"
      @close="closeEvent"
    >
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane label="问题详情" name="first">
          <firstTab></firstTab>
        </el-tab-pane>
        <el-tab-pane label="业务信息">Config</el-tab-pane>
        <el-tab-pane label="处理记录">Role</el-tab-pane>
        <el-tab-pane label="任务督办">Task</el-tab-pane>
      </el-tabs>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import titleBox from "@/component/titleBox.vue";
import firstTab from "./module/firstTab.vue";

export default defineComponent({
  name: "other",
  components: {
    firstTab,
    titleBox
  },
  setup() {
    const drawer = ref(false);
    const activeName = ref('first')
    const openDetails = () => {
      drawer.value = true;
    };
    const closeEvent = () => {
      activeName.value = 'first'
    }

    return {
      drawer,
      activeName,
      openDetails,
      closeEvent
    };
  },
});
</script>

<style lang="scss" scoped></style>
