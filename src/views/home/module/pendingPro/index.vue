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
          <firstTab :active="active"></firstTab>
        </el-tab-pane>
        <el-tab-pane label="业务信息">
          <secondTab></secondTab>
        </el-tab-pane>
        <el-tab-pane label="处理记录">
          <thirdTab></thirdTab>
        </el-tab-pane>
        <el-tab-pane label="任务督办">
          <fourthTab></fourthTab>
        </el-tab-pane>
      </el-tabs>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import titleBox from "@/component/titleBox.vue";
import firstTab from "./module/firstTab.vue";
import secondTab from "./module/secondTab.vue";
import thirdTab from "./module/thirdTab.vue";
import fourthTab from "./module/fourthTab.vue";

export default defineComponent({
  name: "pendingPro",
  components: {
    firstTab,
    secondTab,
    thirdTab,
    fourthTab,
    titleBox
  },
  setup() {
    const drawer = ref(false);
    const activeName = ref('first')
    const data = reactive({
      active: 1
    })
    const openDetails = (active: any) => {
      data.active = active
      drawer.value = true;
    };
    const closeEvent = () => {
      activeName.value = 'first'
    }

    return {
      ...toRefs(data),
      drawer,
      activeName,
      openDetails,
      closeEvent
    };
  },
});
</script>

<style lang="scss" scoped></style>
