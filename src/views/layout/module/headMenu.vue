<template>
  <div class="menuBox">
    <el-menu
      :show-timeout="200"
      mode="horizontal"
      :unique-opened="true"
      :default-active="$route.path"
      background-color="var(--main_color)"
      text-color="var(--text_color)"
      active-text-color="var(--hover_color)"
    >
      <sidebar-item
        v-for="route in permission_routers"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import subMenu from './subMenu.vue';
import SidebarItem from "./SidebarItem.vue";

export default defineComponent({
  name: "headMenu",
  components: {
    SidebarItem,
    subMenu
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = reactive({
      permission_routers: store.state.permission.routers,
      activeIndex: router.currentRoute.value.path === "/dashboard"  ? "/" : router.currentRoute.value.path
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
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.userInfoBox{
  height: 150px;
}
.left-menu /deep/ {
  .el-menu-item,
  .el-sub-menu__title {
    height: 50px;
    line-height: 50px;
  }
}
/deep/ .el-menu-item .el-menu-tooltip__trigger {
  display: inline-block !important;
  padding: 0 10px 0;
}
</style>