<template>
  <el-dialog
    v-model="dialogVisible"
    title="选择科室和人员"
    width="600px"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-scrollbar class="scrollContainer">
      <el-tree
        ref="treeRef"
        :data="userData"
        show-checkbox
        node-key="id"
        default-expand-all
        :props="defaultProps"
      />
    </el-scrollbar>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">
          关闭
        </el-button>
        <el-button type="success" @click="submitEvent">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, nextTick } from 'vue'

export default defineComponent({
  name: "selectUser",
  setup(props, { emit }) {
    const data = reactive({
      dialogVisible: false,
      defaultProps: {
        children: 'children',
        label: 'label',
      },
      userData: [
        { id: 1, label: '预算股(绩效评价股)',
          children: [
            { id: 2, label: '赵' },
            { id: 3, label: '钱' },
            { id: 4, label: '孙' },
            { id: 5, label: '李' },
            { id: 6, label: '周' },
            { id: 7, label: '吴' },
            { id: 8, label: '郑' },
            { id: 9, label: '王' },
          ]
        },
        { id: 21, label: '国库集中支付核算中心',
          children: [
            { id: 22, label: '张三' },
            { id: 23, label: '李四' },
            { id: 24, label: '王五' },
            { id: 25, label: '赵六' }
          ]
        },
      ]
    })

    const open = (curSelectUser: any) => {
      data.dialogVisible = true;
      nextTick(() => {
        treeRef.value && treeRef.value.setCheckedKeys(curSelectUser)
      })
    }
    // 获取当前选择的人员
    const treeRef = ref();
    const submitEvent = () => {
      if(!treeRef.value) return
      const selectId = treeRef.value.getCheckedKeys(false)
      const selectAllData = treeRef.value.getCheckedNodes(false, true);
      let value = "";
      for(var i=0; i<selectAllData.length; i++) {
        var temp = selectAllData[i];
        if(temp.children) {
          value+=`${selectAllData[i].label}`
          continue;
        }
        value+= `[${selectAllData[i].label}]`
      }

      emit('putData', {
        selectId,
        value
      })
      handleClose();
    }
    const handleClose = () => {
      treeRef.value.setCheckedNodes([]);
      data.dialogVisible = false;
    }

    return {
      ...toRefs(data),
      open,
      treeRef,
      submitEvent,
      handleClose
    }
  },
})
</script>

<style lang="scss" scoped>
.scrollContainer{
  height: calc(100vh - 500px);
  min-height: 240px;
}
</style>
