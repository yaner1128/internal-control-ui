<template>
  <div class="title_box_wrap">
    <div class="title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: "titleBox",
  props: {
    title: {
      type: String
    }
  },
  setup(props) {
    
    return {
      ...toRefs(props)
    }
  },
})
</script>

<style lang="scss" scoped>
.title_box_wrap{
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid #ccc;
  min-height: 25px;
  padding: 15px 10px 7px;
  margin: 15px 0;
  .title{
    font-size: 15px;
    font-weight: 600;
    color: #545454;
    padding: 0px 10px;
    position: absolute;
    left: 20px;
    top: 0;
    background-color: #fff;
    transform: translate(0, -50%);
    letter-spacing: 1px;
  }
}
</style>
