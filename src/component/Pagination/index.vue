<template>
  <div class="paginationBox" :style="style">
    <el-pagination
      :current-page="pageObj.page + 1"
      v-model:page-size="pageObj.size"
      :page-sizes="[5, 10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: 'myPagination',
  props: {
    pageObj: {
      type: Object,
      default: {
        page: 0,
        size: 10
      }
    },
    total: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  emits: ['search'],
  setup(props, ctx){
    const style = computed(() => {
      return 'justify-content: ' + props.align;
    })
    const data = reactive({
      
    })
    const handleSizeChange = (val: any) => {
      props.pageObj.size = val;
      ctx.emit('search')
    };

    const handleCurrentChange = (val: any) => {
      props.pageObj.page = val - 1;
      ctx.emit('search')
    };

    return {
      ...toRefs(data),
      style,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style lang="scss" scoped>
.paginationBox{
  margin: 10px 0;
  display: flex;
}
</style>
