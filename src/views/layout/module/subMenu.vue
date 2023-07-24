<template>
  <template v-if="!menu.children || (Array.isArray(menu.children) && menu.children.length == 0)">
    <router-link :to="getPath(menu)">
      <el-menu-item :index="menu.path">{{ menu.name }}</el-menu-item>
    </router-link>
  </template>
  <template v-else>
    <el-sub-menu :index="menu.path">
      <template #title>{{ menu.name }}</template>
       <template v-for="(sunMenu, index) in menu.children" :key="index">
          <subMenu :menu="sunMenu" :parentMenu="parentMenu ? parentMenu + '/' + menu.path : menu.path"></subMenu>
      </template>
    </el-sub-menu>
  </template>
  
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: "subMenu",
  props: {
    menu: {
      type: Object
    },
    parentMenu: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const getPath = (obj: any) => {
      return props.parentMenu ? props.parentMenu+'/'+obj.path : obj.path;
    }
    return {
      ...toRefs(props),
      getPath
    }
  },
})
</script>
