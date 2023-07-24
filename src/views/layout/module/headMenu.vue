<template>
  <div class="menuBox">
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
      background-color="var(--main_color)"
      text-color="var(--text_color)"
      active-text-color="var(--hover_color)"
    >
      <template v-for="(menu, index) in menuList" :key="index">
        <subMenu :menu="menu"></subMenu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import routes from "@/router/index";
import subMenu from './subMenu.vue';

export default defineComponent({
  name: "headMenu",
  components: {
    subMenu
  },
  setup() {
    console.log('router', routes)
    const data = reactive({
      activeIndex: '/',
      menuList: [
        { name: "首页", path: "/", children: [] },
        { name: "其他菜单", path: "/other", children: null },
        { name: "一级菜单", path: "/1-1", children: [
          { name: "二级菜单1", path: "2-1", children: [
            { name: "三级菜单1", path: "3-1", children: null },
            { name: "三级菜单2", path: "3-2", children: [
              { name: "四级菜单1", path: "4-1", children: null }
            ]},
            { name: "三级菜单3", path: "3-3", children: null },
            { name: "三级菜单4", path: "3-4", children: null },
          ]},
          { name: "二级菜单2", path: "2-2", children: null }
        ]},
      ]
    })

    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }

    return {
      ...toRefs(data),
      handleSelect
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
