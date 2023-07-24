<template>
  <div class="headTitle">
    <div class="title">靖州市财政内控系统</div>
    <div class="operateBox">
      <div class="item">当前用户：内控办经办岗</div>
      <div class="item layoutBtn">退出</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "headTitle",
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
.headTitle{
  width: 100%;
  height: 100%;
  background-color: var(--main_color);
  color: var(--text_color);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding:  0 20px;
  box-sizing: border-box;
  .title{
    font-size: 34px;
    font-weight: 800;
    letter-spacing: 3px;
  }
  .operateBox{
    display: flex;
  }
  .item{
    border-right: 1px solid #ccc;
    padding: 0 20px;
  }
  .item:last-child{
    border: none;
  }
  .layoutBtn{
    cursor: pointer;
  }
  .layoutBtn:hover{
    color: var(--hover_color);
  }
}
</style>
