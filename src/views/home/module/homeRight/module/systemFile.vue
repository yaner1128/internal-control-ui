<template>
  <el-dialog
    :close-on-click-modal="false"
    :append-to-body="true"
    v-model="dialogFormVisible"
    :lock-scroll="true"
    width="700px"
    title="查看制度文件列表"
  >
    <div class="content"></div>
    <div class="drawer__footer">
      <el-button>关闭</el-button>
    </div>
  </el-dialog>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: 'systemFile',
  components: {
    
  },
  setup() {
    const data = reactive({
      dialogFormVisible:false,
    })
    const open = () => {
      data.dialogFormVisible = true
    }
    
    return {
      ...toRefs(data),
      open,
    }
  },
})
</script>
  
<style lang="scss" scoped>
.title {
  font-size: 16px;
  font-weight: bold;
  border-bottom: 2px solid #2a70e5 !important;
  letter-spacing: 2px;
  width: auto;
  text-align: center;
  padding: 10px !important;
}

.drawer__footer {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.content {
  height: 200px;
  width: 100%;
}
</style>
  