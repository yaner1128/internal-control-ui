<template>
  <el-tooltip
    class="box-item"
    effect="dark"
    content="Bottom Center prompts info"
    placement="bottom"
  >
    <el-icon class="btnIcon" @click="btnSetting"><Tools /></el-icon>
  </el-tooltip>
  <!-- 组件 -->
  <limitDrawer ref="limitDrawerRef"></limitDrawer>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import { Tools } from "@element-plus/icons-vue";
import limitDrawer from './limitDrawer.vue'

export default defineComponent({
  name: 'settingIcon',
  emits: ['reload'],
  components: {
    Tools,
    limitDrawer
  },
  props: {
    value: {
      type: String
    },
  },
  setup(props, {  emit }) {
    const limitDrawerRef = ref();
    const data = reactive({
    })
    const btnSetting = () => {
      limitDrawerRef.value.open()
    }
    return {
    ...toRefs(data),
    limitDrawerRef,
    btnSetting
    }
  },
})
</script>
    
<style lang="scss" scoped>
</style>
    