<template>
  <div class="container">
    <el-drawer
      v-model="drawer"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      title="查看风险详情"
      size="50%"
      @close="closeEvent"
    >
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane label="风险详情" name="first">
          <firstTab></firstTab>
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
        <el-tab-pane label="备注说明">
          <fifthTab></fifthTab>
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
import fifthTab from "./module/fifthTab.vue";

export default defineComponent({
  name: "latestReminder",
  components: {
    titleBox,
    firstTab,
    secondTab,
    thirdTab,
    fourthTab,
    fifthTab
  },
  setup() {
    const drawer = ref(false);
    const activeName = ref('first')
    const data = reactive({

    })
    const openDetails = () => {
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
