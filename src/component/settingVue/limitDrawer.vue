<template>
  <el-drawer
    v-model="limitDialog"
    title="标题"
    direction="rtl"
    size="50%"
  >
    
  </el-drawer>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: 'limitDrawer',
  components: {
    
  },
  setup() {
    const data = reactive({
      limitDialog:false,
    })
    const open = () => {
      data.limitDialog = true
    }
    return {
      ...toRefs(data),
      open
    }
  },
})
</script>
  
<style lang="scss" scoped>
</style>
  