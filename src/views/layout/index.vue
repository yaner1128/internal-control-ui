<template>
  <div class="common-layout">
    <el-header class="common-header">
      <head-title class="title"></head-title>
      <headMenu class="menu"></headMenu>
    </el-header>
    <el-main class="common-main">
      <router-view></router-view>
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
      height: 80px;
      margin-bottom: 10px;
    }
    .menu{
      height: 50px;
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
