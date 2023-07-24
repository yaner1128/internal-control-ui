<template>
  <div class="common-layout">
    <el-header class="common-header">
      <head-title class="title"></head-title>
      <headMenu class="headMenu"></headMenu>
    </el-header>
    <el-main class="common-main">
      <el-scrollbar height="calc(100vh - 140px)">
        <router-view></router-view>
      </el-scrollbar>
    </el-main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import headTitle from "./module/headTitle.vue"
import headMenu from "./module/headMenu.vue"

export default defineComponent({
  name: "layout",
  components: {
    headTitle,
    headMenu
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.common-layout{
  width: 100%;
  height: 100vh;
  .common-header{
    height: 140px;
    padding: 0;
    margin: 0;
    .title{
      height: 75px;
      margin-bottom: 5px;
    }
    color: var(--text_color);
  }
  .common-main{
    height: calc(100vh - 140px);
    padding: 0;
    margin: 0;
  }
}
</style>
